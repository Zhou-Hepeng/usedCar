<template>
  <div class="container" style="background-color:red">
    <scroller style="flex:1">
      <!-- 轮播图 -->
      <carousel :carouselData="carouselData" @locationPop="locationPop" @searchPop="searchPop" :locationInfo="locationInfo"></carousel>
      <!-- 附加功能 -->
      <additional></additional>
      <!-- 功能列表 -->
      <navBar></navBar>
      <!-- 品牌列表 -->
      <brand-list :brandList="brandList"></brand-list>
      <!-- 优质经销商 & 优质经纪人 -->
      <qualityList :seller="seller" :shopList="intermediary" ></qualityList>
      <!-- 最新二手车 -->
      <truckItemList v-if="hotList.length" titleName="最新二手货车" :truckItemData="hotList"></truckItemList>
      <!-- 推荐二手车 -->
      <truckItemList v-if="recommendList.length" titleName="推荐二手货车" :truckItemData="recommendList"></truckItemList>
      <!-- 降价二手车 -->
      <truckItemList v-if="priceList.length" titleName="降价二手货车" :truckItemData="priceList"></truckItemList>
      <!-- 二手车论坛 & 二手车咨询 -->
      <usedList :forum="forum" :news="news"></usedList>
    </scroller>
    <div class="footer-bar">
      <div class="menu">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe697;</text>
        <text class="footer-bar-text">首页</text>
      </div>
      <div class="menu" @click="sellCar('sellCar')">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe69a;</text>
        <text class="footer-bar-text">卖车</text>
      </div>
      <div class="menu" @click="goWeexUrl('buyCar')">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe6a8;</text>
        <text class="footer-bar-text">买车</text>
      </div>
      <div class="menu" @click="goWeexUrl('my')">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe699;</text>
        <text class="footer-bar-text">我的</text>
      </div>
    </div>

    <!-- 地区选择 -->
    <location :location="location" :indexNav="indexNav" :locationShow="locationShow" @locationPop="locationPop" @selectLocation="selectLocation"></location>
    <!-- 搜索二手车 -->
    <search :searchData="searchData" :searchShow="searchShow" @searchPop='searchPop' @screen="screen"></search>

  </div>
</template>

<style scoped>
.container{flex:1;background-color: #fff}
.footer-bar{height:100px;flex-direction: row;background-color: #f5f5f5;}
.menu{flex:1;justify-content: center;align-items: center;}
.footer-bar-icon{color:#ccbbb8;font-family: 'icon';font-size: 36px}
.footer-bar-text{color:#ccbbb8;font-size:28px;margin-top: 5px}
</style>

<script>
  let storage = weex.requireModule('storage')
  import mixins from '../mixins/mixins'
  Vue.mixin(mixins)

  import carousel from '../components/index/carousel.vue'
  import additional from '../components/index/additional.vue'
  import brandList from '../components/index/brandList.vue'
  import location from '../components/location.vue'
  import truckItemList from '../components/truckItemList.vue'
  import navBar from '../components/index/NavBar.vue'
  import qualityList from '../components/index/QualityList.vue'
  import usedList from '../components/index/UsedList.vue'
  import search from '../components/index/search.vue'
  //地区数据
  import cities from '../components/cities.js'
  export default {
    components:{
      carousel,
      additional,
      navBar,
      brandList,
      qualityList,
      location,
      truckItemList,
      usedList,
      search
    },
    data: {
      //地区选择数据
      locationData:{},
      //轮播图数据
      carouselData:{},
      //品牌栏数据
      brandList:[],
      //当前选择的省市信息
      locationInfo:{},
      //选择地区数据
      location:[],
      indexNav:[],
      //是否显示选择地区弹层
      locationShow:false,
      //优质车商 & 经纪人列表
      seller:[],
      intermediary:[],
      //最新 & 推荐 & 降价二手货车列表数据对象
      hotList:[],
      recommendList:[],
      priceList:[],
      //二手货车论坛 & 二手货车咨询
      forum:[],
      news:[],
      //搜索二手车数据
      searchData:[],
      //是否显示搜索弹层
      searchShow:false
    },
    methods: {
      // 是否显示选地区弹层
      locationPop(){
        this.locationShow = !this.locationShow
      },
      // 是否显示搜索弹层
      searchPop(){
        this.searchShow = !this.searchShow
      },
      goUrl(){
        this.goWeexUrl('http://192.168.1.218:8080/dist/index.web.js')
      },
      //选择地区
      selectLocation(ele){
        this.locationInfo = ele
        storage.setItem('location',JSON.stringify(ele),res => {
          if (res.result === 'success') {
            this.locationShow = false
          }
        })
      },
      //点击固定筛选条件
      screen(item){
        storage.setItem('screenInfo',item.word,ele => {
          if(ele.result == 'success'){
            this.goWeexUrl('buyCar')
          }
        })
      },
      // 点击跳转卖车页面
      sellCar(){
        storage.getItem('userInfo',ele => {
          if(ele.result == 'success'){
            let userInfo = JSON.parse(ele.data)
            if(userInfo.allowPublish == true){
              this.goWeexUrl('cellCar')
            }else{
              this.alert(userInfo.allowPublish)
            }
          }
        })
      }
    },
    created(){
      //请求toKen
      // this.getToKen()
      //查看是否有选中地区
      storage.getItem('location',res => {
        if (res.result === 'success') {
          this.locationInfo = JSON.parse(res.data)
        }
      })

      //获取轮播图 & 品牌列表 & 推荐车型 & 经纪人列表
      this.getData('/weex/site',ele => {
        if (ele.ok && ele.data.status == 0) {
          // console.log(ele.data.data,'总数据对象')
          //轮播图数据
          this.carouselData = ele.data.data.carousel
          //品牌列表数据
          this.brandList = ele.data.data.brands
          //优质车商 & 经纪人
          this.seller = ele.data.data.seller
          this.intermediary = ele.data.data.intermediary
          //二手货车 & 论坛
          this.forum = ele.data.data.forum
          console.log(this.forum,'this.forum')
          this.news = ele.data.data.news
          console.log(this.news,'this.news')
        }
      })
      //请求最新二手车列表
      this.getData('/weex/recommend/lastest-recommends',ele => {
        if (ele.ok && ele.data.status == 0) {
          this.hotList = ele.data.data
          console.log(this.hotList,'最新推荐')
        }
      })
      //请求推荐二手车列表
      this.getData('/weex/recommend',ele => {
        if (ele.ok && ele.data.status == 0) {
          this.recommendList = ele.data.data
          console.log(this.recommendList,'推荐')
        }
      })
      //降价二手车列表
      this.getData('/weex/recommend/reduce',ele => {
        if (ele.ok && ele.data.status == 0) {
          this.priceList = ele.data.data
          console.log(this.priceList,'降价列表')
        }
      })

      //获取省市数据
      this.location = cities.location
      this.indexNav = cities.indexNav

      //请求搜索条件
      this.getData('/key-words',ele => {
        if(ele.ok){
          this.searchData = ele.data.data
          console.log(this.searchData,'搜索条件')
        }
      })

      //请求用户信息
      storage.getItem('toKen',ele => {
        if(ele.result == 'success'){
          this.getData(`/weex/member?access-token=${ele.data}`,res => {
            if(res.ok && res.data.status == 0){
              this.userInfo = res.data.data
              storage.setItem('userInfo',JSON.stringify(res.data.data))
            }
          })
        }
      })
    }
  }
</script>