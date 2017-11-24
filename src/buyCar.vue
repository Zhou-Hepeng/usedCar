<template>
	<div class="container">
      <div class="search-bar">
          <div class="location" @click="locationPop">
              <text class="location-icon" :style="{fontFamily:'icon',color:'#666',fontSize:'24px'}">&#xe619;</text>
              <text class="location-text">{{locationInfo.city ? locationInfo.city : '全国'}}</text>
          </div>
          <div class="search" @click="searchPop">
              <text class="search-text">搜索二手车</text>
          </div>
          <div class="sort" @click="sidebarShow('sort')">
          	<text class="sort-text">排序</text>
          </div>
      </div>
      <div class="screen-bar">
      	<div class="option">
      		<div class="option-content" @click="sidebarShow('source')">
	      		<text class="option-text">{{screenData.source.name != '不限' &&  screenData.source.name != '全部' ? screenData.source.name:'来源 '}}</text>
	      		<text :style="{fontFamily:'icon',color:'#666',fontSize:'24px'}">&#xe601;</text>
      		</div>
      	</div>
      	<div class="option">
      		<div class="option-content" @click="sidebarShow('models')">
	      		<text class="option-text">{{screenData.models.name != '不限' &&  screenData.models.name != '全部' ? screenData.models.name : '车型'}}</text>
	      		<text :style="{fontFamily:'icon',color:'#666',fontSize:'24px'}">&#xe601;</text>
      		</div>
      	</div>
      	<div class="option">
      		<div class="option-content" @click="sidebarShow('brand')">
	      		<text class="option-text">{{screenData.brand.name != '不限' &&  screenData.brand.name != '全部' ? screenData.brand.F_BrandName : '品牌'}}</text>
	      		<text :style="{fontFamily:'icon',color:'#666',fontSize:'24px'}">&#xe601;</text>
      		</div>
      	</div>
      	<div class="option">
      		<div class="option-content" @click="sidebarShow('more')">
	      		<text class="option-text">更多</text>
	      		<text :style="{fontFamily:'icon',color:'#666',fontSize:'20px'}">&#xe601;</text>
      		</div>
      	</div>
      </div>
      <!-- 筛选条件 -->
      <div class="condition" v-if="condition.length && (condition[0].id != 0 || condition[1].F_BrandId != 0 || condition[2].id != 0 || condition[3].id != 0 || condition[4].id != 0 || condition[5].id != '')">
      	<div class="clear-all" @click="clearConditionAll">
      		<text :style="{fontFamily:'icon',color:'#1571e5',fontSize:'20px'}">&#xe611;</text>
      		<text class="clear-all-text">重置</text>
      	</div>
      	<div class="condition-option" v-for="item in condition" v-if="item.id != 0 && item.F_BrandId != 0">
      		<text class="condition-option-text">{{item.name || item.F_BrandName}}</text>
      		<text :style="{fontFamily:'icon',color:'#ee6e47',fontSize:'20px'}" @click="clearCondition(item)">&#xe662;</text>
      	</div>
      </div>
      <!-- 没有符合筛选内容 -->
      <div class="not-content" v-if="!carList.length">
      	<text :style="{fontFamily:'icon',color:'#d8d8d8',fontSize:'100px'}">&#xe694;</text>
      	<text class="not-content-text">不好意思，当前条件下没有您想要的车~</text>
      	<div class="subscribe">
      		<text class="subscribe-text">一键订阅</text>
      	</div>
      </div>
		<scroller style="flex:1;background-color:red" @loadmore="loadMore">
			<div ref="goTop"></div>
			<truckItemList :truckItemData="carList"></truckItemList>
		</scroller>


    <!-- 地区选择 -->
    <location :location="location" :indexNav="indexNav" :locationShow="locationShow" @locationPop="locationPop" @selectLocation="selectLocation"></location>
    <!-- 搜索二手车 -->
    <search :searchData="searchData" :searchShow="searchShow" @searchPop='searchPop'></search>

		<!-- 筛选弹出层 -->
		<div class="shadow" v-if="shadow" ref="shadow" @click="sidebarHide"></div>
		 <!-- sidebar弹出层 -->
		<div class="screenPop" ref="sidebar">
			<div class="title">
				<div class="title-name">
					<text class="title-name-text">{{source ? '来源' : models ? '选择车型' : more ? '更多筛选项' : brand ? '选择品牌' : '选择排序'}}</text>
				</div>
				<div class="back" @click="sidebarHide">
					<text class="back-text" :style="{fontFamily:'icon',fontSize:'36px',color:'#cbd6ec'}">&#xe60d;</text>
				</div>
			</div>
			<div class="sidebar-content">
				<!-- 来源内容 -->
				<div class="model" v-if="source">
					<div class="model-list" v-for="item in sourceData" @click="clickSidebar('source',item)">
						<text :class="['model-list-text',screenData.source.id == item.id ? 'font-visible' : '']">{{item.name}}</text>
						<text v-if="screenData.source.id == item.id" :style="{fontFamily:'icon',fontSize:'36px',color:'#f60',marginRight:'20px'}">&#xe691;</text>
					</div>
				</div>
				<!-- 车型内容 -->
				<div class="model" v-if="models">
					<div class="model-list" v-for="item in modelsData" @click="clickSidebar('models',item)">
						<text :class="['model-list-text',screenData.models.id == item.id ? 'font-visible' : '']">{{item.name}}</text>
						<text v-if="screenData.models.id == item.id" :style="{fontFamily:'icon',fontSize:'36px',color:'#f60',marginRight:'20px'}">&#xe691;</text>
					</div>
				</div>
				<!-- 品牌内容 -->
				<scroller :class="[brand ? 'brand-visible' :'brand-wrapper']" v-show="">
					<div class="brand-model" v-for="(item,index) in brandData.location">
						<div class="brand-title">
							<text class="brand-title-text">{{brandData.indexNav[index]}}</text>
						</div>
						<div class="brand-content">
							<div class='brand-list' @click="clickSidebar('brand',{name:'不限',F_BrandId:'0'})">
								<text :class="['brand-name',screenData.brand.F_BrandId == 0 ? 'font-visible' : '']">不限</text>
								<text v-if="screenData.brand.F_BrandId == 0" :style="{fontFamily:'icon',fontSize:'36px',color:'#f60',marginRight:'20px'}">&#xe691;</text>
							</div>
							<div class="brand-list" v-for="ele in item" @click="clickSidebar('brand',ele)">
								<text :class="['brand-name',screenData.brand.F_BrandId == ele.F_BrandId ? 'font-visible' : '']">{{ele.F_BrandName}}</text>
								<text v-if="screenData.brand.F_BrandId == ele.F_BrandId" :style="{fontFamily:'icon',fontSize:'36px',color:'#f60',marginRight:'20px'}">&#xe691;</text>
							</div>
						</div>
					</div>
				</scroller>
				<!-- 更多内容 -->
				<div class="more-model" v-if="more">
					<div class="more-list" v-for="(item,index) in moreData.content">
						<div class="more-title">
							<text class="more-name">{{moreData.nav[index]}}</text>
						</div>
						<!-- 价格 -->
						<div class="more-content" v-if="index == 0">
							<div :class="['more-info',screenData.price.id == ele.id ? 'more-info-visible' : '']" v-for="ele in item" @click="clickSidebar('price',ele)">
								<text :class="['more-text',screenData.price.id == ele.id ? 'font-visible' : '']">{{ele.name}}</text>
							</div>
						</div>

						<!-- 排放 -->
						<div class="more-content" v-if="index == 1">
							<div :class="['more-info',screenData.discharge.id == ele.id ? 'more-info-visible' : '']" v-for="ele in item" @click="clickSidebar('discharge',ele)">
								<text :class="['more-text',screenData.discharge.id == ele.id ? 'font-visible' : '']">{{ele.name}}</text>
							</div>
						</div>
					</div>
				</div>
				<div class="more-buttons" v-if="more">
					<div class="button" @click="reset">
						<text class="reset-text">重置</text>
					</div>
					<div class="button more-submit" @click="goScreen">
						<text class="submit-text">确定</text>
					</div>
				</div>
				<!-- 排序 -->
				<div class="model" v-if="sort">
					<div class="model-list" v-for="item in sortData" @click="clickSidebar('sort',item)">
						<text :class="['model-list-text',screenData.sort.id == item.id ? 'font-visible' : '']">{{item.name}}</text>
						<text v-if="screenData.sort.id == item.id" :style="{fontFamily:'icon',fontSize:'36px',color:'#f60',marginRight:'20px'}">&#xe691;</text>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped>
	/*筛选条件*/
	.condition{position:relative;flex-direction: row;flex-wrap: wrap;padding-left:30px;padding-right:120px;padding-top:20px;background-color:#efeff4;}
	.clear-all{position: absolute;right:30;top:0;height:84px;flex-direction: row;justify-content: center;align-items: center;}
	.clear-all-text{font-size: 24px;color:#1571e5;margin-left:6px;}
	.condition-option{height:44px;flex-direction: row;justify-content: center;align-items: center;background-color:#fff;margin-right: 20px;margin-bottom:20px;padding-left:10px;padding-right: 10px;padding-top: 5px;padding-bottom: 5px}
	.condition-option-text{font-size:24px; color:#333;margin-right:8px;}
	/*没有筛选内容*/
	.not-content{height:356px;justify-content: center;align-items: center;background-color:#efeff4;}
	.not-content-text{font-size:28px;color:#999;margin-top: 20px;margin-bottom:20px;}
	.subscribe{width:212px;height:64px;justify-content: center;align-items: center;background-color:#ee6e47;border-top-left-radius: 6px;border-top-right-radius: 6px;border-bottom-right-radius: 6px;border-bottom-left-radius: 6px;}
	.subscribe-text{font-size:28px;color:#fff;}

	.shadow{position:absolute;left:0;top:0;right:0;bottom:0;background-color:rgba(0,0,0,.4)}
	.screenPop{position:fixed;left:150px;top:0;right:0;bottom:0;background-color:#fff;opacity:0;transform: translate(750px,0);}/**/
	.title{position: relative;height:90px;}
	.back{position: absolute;left:0;top:0;height:90px;width:80px;justify-content: center;align-items: center;}
	.title-name{height:90px;justify-content: center;align-items: center;}
	.sidebar-content{position:relative;flex:1;background-color: #efeff4}
	/*品牌*/
	.brand-wrapper{height:0;}
	.brand-visible{flex:1;}
	.brand-title{height:60px;padding-left:30px;justify-content: center;}
	.brand-title-text{color:#666;font-size:28px;}
	.brand-content{padding-left:30px;background-color:#fff;}
	.brand-list{height:90px;flex-direction:row;align-items: center;justify-content: space-between;border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: #eee;}
	.brand-name{font-size:28px;color:#333;}
	/*更多*/
	.model{margin-top: 30px;padding-left:20px;background-color:#fff;}
	.model-list{height:80px;flex-direction: row;align-items: center;justify-content: space-between;border-bottom-width: 1px;border-bottom-color: #eee;border-bottom-style: solid;}
	.model-list-text{font-size:28px;}
	.more-model{flex:1;}
	.more-title{height:60px;padding-left:20px;justify-content: center;}
	.more-name{color:#666;font-size:28px;}
	.more-content{padding-left:20px;padding-top:20px;flex-direction: row;flex-wrap: wrap;background-color: #fff;}
	.more-info{width:173px;height:60px;margin-right:20px;margin-bottom:20px;justify-content: center;align-items: center;
		border-top-width: 1px;border-top-color: #ccc;border-top-style: solid;
		border-right-width: 1px;border-right-color: #ccc;border-right-style: solid;
		border-bottom-width: 1px;border-bottom-color: #ccc;border-bottom-style: solid;
		border-left-width: 1px;border-left-color: #ccc;border-left-style: solid;
		border-top-left-radius: 8px;border-top-right-radius: 8px;
		border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;
	}
	.more-info-visible{
		border-top-color:#ee6e47;
		border-right-color:#ee6e47;
		border-bottom-color:#ee6e47;
		border-left-color:#ee6e47;
	}
	.more-text{font-size:28px;}
	.more-buttons{height:80px;flex-direction: row;}
	.button{flex:1;justify-content: center;align-items: center;background-color:#fff;}
	.reset-text{color:#333;font-size:28px;}
	.more-submit{background-color:#ee6e47;}
	.submit-text{color:#fff;font-size:28px;}
	.font-visible{color:#ee6e47;}


	.container{flex:1;height: 100%;background-color:#fff;}

	.search-bar{height:90px;flex-direction: row;border-bottom-color: #eee;border-bottom-style: solid;border-bottom-width: 1px;background-color: #fff;}
	.location{position:relative;padding-left:20px;width:160px;justify-content: center;align-items: center;}
	.location-icon{position:absolute;left:10px;top:30px;}
	.location-text{font-size:28px;color:#666;margin-left:10px;    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    lines: 1;}
	.search{flex:1;justify-content: center;align-items: flex-start;margin-top:20px;margin-bottom:20px;padding-left:30px;padding-top:15px;padding-bottom:15px;font-size:28px;border-top-left-radius: 6px;border-top-right-radius: 6px;border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;background-color:#f2f2f2;}
	.search-text{color:#999;font-size:28px;}
	.sort{padding-left:20px;padding-right:20px;justify-content: center;align-items: center;}
	.sort-text{font-size:28px;color:#999;}

	.screen-bar{flex-direction: row;height:80px;border-bottom-color: #eee;border-bottom-style: solid;border-bottom-width: 1px;}
	.option{flex:1;justify-content: center;}
	.option-content{flex-direction:row;justify-content:center;align-items: center;border-right-color: #eee;border-right-style: solid;border-right-width: 1px;}
	.option-text{font-size: 24px;color:#666;margin-right:10px;}
</style>

<script>
	let animation = weex.requireModule('animation')
	let storage = weex.requireModule('storage')
	let dom = weex.requireModule('dom')
  //地区数据
  import cities from '../components/cities.js'

	import mixins from '../mixins/mixins'
  Vue.mixin(mixins)
  import location from '../components/location.vue'
  import search from '../components/index/search.vue'
  import truckItemList from '../components/truckItemList.vue'

  //筛选栏弹层数据
  import sidebarData from '../components/buyCar/data.js'
  export default {
  	components:{location,search,truckItemList},
    data(){
      return {
        //选择地区数据
        location:[],
        indexNav:[],
        //当前地区信息
        locationInfo:{
        	id:''
        },
        //是否显示选择地区弹层
        locationShow:false,
	      //搜索二手车数据
	      searchData:[],
	      //是否显示搜索弹层
	      searchShow:false,
	      // 车辆列表
	      carList:[],
	      //请求车辆列表页数
	      page:1,
	      //弹出框阴影
	      shadow:false,
	      //sidebar显示隐藏
	      sidebarPop:false,
	      //来源内容
	      sourceData:[],
	      source:false,
	      //车型内容
	      modelsData:[],
	      models:false,
	      //品牌内容
	      brandData:{},
	      brand:false,
	      //更多内容
	      moreData:{},
	      more:false,
	      //排序内容
	      sortData:{},
	      sort:false,
	      //筛选条件
	      condition:[],
	      //筛选总数据
	      screenData:{
	      	//车型
	      	models:{id:'0',name:'不限'},
	      	//品牌
	      	brand:{F_BrandId:'0',name:'不限'},
	      	//来源
	      	source:{id:'0',name:'全部'},
	      	//价格
	      	price:{id:'0'},
	      	//排放
	      	discharge:{id:'0'},
	      	//排序
	      	sort:{id:''}
	      },
	      //是否确定排放和价格
	      screenButton:false,
	      //如果没有数据了，下拉加载不会请求
	      notContent:false,
      }
    },
    created(){
      //获取省市数据
      this.location = cities.location
      this.indexNav = cities.indexNav

      //查看当前城市
      storage.getItem('location',ele => {
      	if(ele.result == 'success'){
      		this.locationInfo = JSON.parse(ele.data)
      		// this.alert(this.locationInfo)
      	}
      })

    	//来源内容
    	this.sourceData = sidebarData.sourceData
    	//车型内容
    	this.modelsData = sidebarData.modelsData
    	//更多内容
    	this.moreData = sidebarData.moreData
    	//排序内容
    	this.sortData = sidebarData.sortData

    	//查看是否有筛选条件
    	storage.getItem('screen',ele => {
    		if(ele.result == 'success'){
    			let data = JSON.parse(ele.data)

    			// 价格 & 排放 置为false
  				this.screenButton = true

    			for (let key in data){
    				this.screenData[key] = data[key]
    			}
    			//存储筛选对象 && 请求列表数据
    			this.setCondition()
    			storage.removeItem('screen')
    		}else{
    			//直接请求数据
    			this.getListData();
    		}
    	})

      //请求搜索条件
      this.getData('/key-words',ele => {
        if(ele.ok){
          this.searchData = ele.data.data
          console.log(this.searchData,'搜索条件')
        }
      })

      //请求品牌内容
      this.getData('/weex/brand',ele => {
      	if(ele.ok){
      		this.brandData = ele.data.data;
      		console.log(this.brandData,'品牌列表')
      	}
      })
    },
    methods:{
    	// 点击sidebar
    	clickSidebar(type,item){

    		//存储总发送对象
    		this.screenData[type] = item

    		//如果是价格和排放，那么return
    		if(type == 'price' || type == 'discharge'){
    			return
    		}

    		//存储筛选条件
    		this.setCondition()
    		//隐藏侧边栏
    		this.sidebarHide();
    		this.alert(1)
    	},
    	//请求买车列表
    	getListData(o){
    		let ajaxUrl = `/weex/site/list?page=${this.page}&city=${this.locationInfo.id}`

    		//判断是否有筛选条件
    		if(this.condition.length){
    			ajaxUrl += '&key='

    			if(this.condition[0].id != 0){
    				ajaxUrl += 'c' + this.condition[0].id
    				if(this.condition[1].F_BrandId != 0){
    					ajaxUrl += '_b' + this.condition[1].F_BrandId
    				}
    			}else{
    				if(this.condition[1].F_BrandId != 0){
    					ajaxUrl += 'b' + this.condition[1].F_BrandId
    				}
    			}

    			let p = ''
    			if(this.condition[2].id != 0){
    				p += 'p' + this.condition[2].id
    				if(this.condition[3].id != 0){
    					p += '_' + this.condition[3].id
    				}else{
    					if(this.condition[4].id != 0){
    						p += '_' + this.condition[4].id
    					}
    				}
    			}else{
    				if(this.condition[3].id != 0){
    					p += 'p' + this.condition[3].id
    					if(this.condition[4].id != 0){
    						p += '_' + this.condition[4].id
    					}
    				}else{
    					if(this.condition[4].id != 0){
    						p += 'p' + this.condition[4].id
    					}
    				}
    			}

    			if(p != ''){
	    			if(this.condition[0].id != 0 || this.condition[1].F_BrandId != 0){
	    				ajaxUrl += '_'
	    			}
		    		ajaxUrl += p
		    	}


	    		//查看是否有排序
	    		if(this.condition[5].id != ''){
	    			if(this.condition[0].id != 0 || this.condition[1].F_BrandId != 0 || p != ''){
	    				ajaxUrl += '_'
	    			}
	    			ajaxUrl += this.condition[5].id
	    		}
    		}

    		this.alert(ajaxUrl)
    		//发送请求请求
	      this.getData(ajaxUrl,ele => {
	      	if(ele.ok && ele.data.status == 0){

	      		if(this.page == 1){
	      			// dom.scrollToElement(this.$refs['goTop'][0], {offset: 0})
	      			this.carList = ele.data.data
	      		}else{
	      			this.carList = this.carList.concat(ele.data.data)
	      		}

	      		//page页数
	      		this.page++
	      		//如果没有内容，下次不会请求数据
	      		if(!ele.data.data.length){
	      			this.notContent = true
	      		}
	      	}
	      })
    	},
    	//重置价格和排放
    	reset(){
    		this.screenData.price = {id:'0'}
    		this.screenData.discharge = {id:'0'}

    		//重置价格 & 排放
    		this.screenButton = true
    	},
    	//确定选择价格和排放
    	goScreen(){
    		//点击确定
  			this.screenButton = true;
  			//存储筛选对象
  			this.setCondition()
    		//隐藏侧边栏
    		this.sidebarHide();
    	},
    	//清除筛选条件
    	clearCondition(item){
    		for(let key in this.screenData){
    			//品牌
    			if(item.F_BrandName){
	    			if(this.screenData[key].F_BrandId == item.F_BrandId){
							this.screenData[key] = {F_BrandId:'0',name:'不限'}
	    			}
    			}else{
    				//其他
	    			if(this.screenData[key].id == item.id){
							this.screenData[key] = {id:'0',name:'不限'}
	    			}
    			}
    		}
    		//存储筛选对象
  			this.setCondition()
    	},
    	//清除所有筛选条件
    	clearConditionAll(){
				this.screenData = {
	      	//来源
	      	source:{id:'0',name:'全部'},
	      	//车型
	      	models:{id:'0',name:'不限'},
	      	//品牌
	      	brand:{F_BrandId:'0',name:'不限'},
	      	//价格
	      	price:{id:'0'},
	      	//排放
	      	discharge:{id:'0'},
	      	//排序
	      	sort:{id:''}
				}
    		//存储筛选对象
  			this.setCondition()
    	},
    	//存储筛选条件
    	setCondition(){
    		this.condition[0] = this.screenData.models
    		this.condition[1] = this.screenData.brand
    		this.condition[2] = this.screenData.source
    		if(this.screenButton){
	    		this.condition[3] = this.screenData.price
	    		this.condition[4] = this.screenData.discharge
    		}
    		this.condition[5] = this.screenData.sort

    		// 价格 & 排放 置为false
  			this.screenButton = false

  			//重置内容
  			this.notContent = false

  			//回滚到顶部
      	this.goTop();

    		//重置配置
    		this.page = 1
    		// 请求数据
    		this.getListData()
    	},
      // 是否显示选地区弹层
      locationPop(){
        this.locationShow = !this.locationShow
      },
      // 是否显示搜索弹层
      searchPop(){
        this.searchShow = !this.searchShow
      },
      // 请求车辆列表
      loadMore(){
      	//如果没有数据，直接return
      	if(this.notContent){
      		return
      	}
      	this.alert('下拉加载更多')
      	this.getListData();
      },
      //显示侧边栏
      sidebarShow(type){

      	this.shadow = true
      	this.sidebarPop = true

      	if(type == 'source'){
      		this.source = true
      	}else if(type == 'models'){
      		this.models = true
      	}else if(type == 'more'){
      		this.more = true
      	}else if(type == 'brand'){
      		this.brand = true
      	}else if(type == 'sort'){
      		this.sort = true
      	}

				let sidebar = this.$refs.sidebar;
				animation.transition(sidebar,{
					styles:{
						transform: 'translate(0, 0)',
						opacity: 1
					},
					duration:300,
   				timingFunction: 'ease-in-out',
          needLayout:false,
          delay:0,
				},() => {

				})
      },
      //隐藏侧边栏
      sidebarHide(){

				let sidebar = this.$refs.sidebar;
				animation.transition(sidebar,{
					styles:{
						transform: 'translate(750px, 0)',
						opacity: 0
					},
					duration:300,
   				timingFunction: 'ease-in-out',
          needLayout:false,
          delay:0,
				},() => {
					//隐藏遮罩层
      		this.shadow = false
      		this.sidebarPop = false
	      	//数据隐藏
	    		this.source = false
	    		this.models = false
	    		this.brand = false
	    		this.more = false
	    		this.sort = false
				})
      },
      //选择地区
      selectLocation(ele){
        this.locationInfo = ele
        storage.setItem('location',JSON.stringify(ele),res => {
          if (res.result === 'success') {
            this.locationShow = false

            //请求列表
            this.getListData();
          }
        })
      }
    }
  }
</script>