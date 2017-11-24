<template>
  <div class="container">
    <scroller style="flex:1">
      <!-- 轮播图 -->
      <carousel :carouselData="carouselData" @locationPop="locationPop" @searchPop="searchPop"></carousel>
      <!-- 附加功能 -->
      <additional></additional>
      <!-- 功能列表 -->
      <navBar></navBar>
      <!-- 品牌列表 -->
      <brand-list :brandList="brandList"></brand-list>
      <!-- 优质经销商 & 优质经纪人 -->
      <qualityList></qualityList>
      <!-- 最新二手车 -->
      <truckItem v-if="hotList.length" titleName="最新二手货车" :truckItemData="hotList"></truckItem>
      <!-- 推荐二手车 -->
      <truckItem v-if="recommendList.length" titleName="推荐二手货车" :truckItemData="recommendList"></truckItem>
      <!-- 降价二手车 -->
      <truckItem v-if="priceList.length" titleName="降价二手货车" :truckItemData="priceList"></truckItem>
      <!-- 二手车论坛 & 二手车咨询 -->
      <usedList></usedList>
    </scroller>
    <div class="footer-bar">
      <div class="menu">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe697;</text>
        <text class="footer-bar-text">首页</text>
      </div>
      <div class="menu">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe69a;</text>
        <text class="footer-bar-text">卖车</text>
      </div>
      <div class="menu" @click="goUrl">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe6a8;</text>
        <text class="footer-bar-text">买车</text>
      </div>
      <div class="menu">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe699;</text>
        <text class="footer-bar-text">我的</text>
      </div>
    </div>

    <!-- 地区选择 -->
    <location :location="location" :indexNav="indexNav" :locationShow="locationShow" @locationPop="locationPop"></location>
    <!-- 搜索二手车 -->
    <search :searchData="searchData" :searchShow="searchShow" @searchPop='searchPop'></search>

  </div>
</template>

<style scoped>
.container{flex:1;height:100%;background-color: #fff}
.footer-bar{height:100px;flex-direction: row;background-color: #f5f5f5;}
.menu{flex:1;justify-content: center;align-items: center;}
.footer-bar-icon{color:#ccbbb8;font-family: 'icon';font-size: 36px}
.footer-bar-text{color:#ccbbb8;font-size:28px;margin-top: 5px}
</style>

<script>
  import mixins from '../mixins/mixins'
  Vue.mixin(mixins)

  import carousel from '../components/index/carousel.vue'
  import additional from '../components/index/additional.vue'
  import brandList from '../components/index/brandList.vue'
  import location from '../components/location.vue'
  import truckItem from '../components/truckItem.vue'
  import navBar from '../components/index/NavBar.vue'
  import qualityList from '../components/index/QualityList.vue'
  import usedList from '../components/index/UsedList.vue'
  import search from '../components/index/search.vue'
  export default {
    components:{
      carousel,
      additional,
      navBar,
      brandList,
      qualityList,
      location,
      truckItem,
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
      //选择地区数据
      location:[],
      indexNav:[],
      //是否显示选择地区弹层
      locationShow:false,
      //最新 & 推荐 & 降价二手货车列表数据对象
      hotList:[],
      recommendList:[],
      priceList:[],
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
      }
    },
    created(){
      //获取轮播图 & 品牌列表
      this.getData('/weex/site',ele => {
        if (ele.ok && ele.data.status == 0) {
          // console.log(ele.data.data,'总数据对象')
          //轮播图数据
          this.carouselData = ele.data.data.carousel
          //品牌列表数据
          this.brandList = ele.data.data.brands
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
      this.getData('/weex/area/cities',ele => {
        if (ele.ok && ele.data.status == 0) {
          this.location = ele.data.data.location
          this.indexNav = ele.data.data.indexNav
          console.log(this.location,'this.location')
        }
      })

      //请求搜索条件
      this.getData('/key-words',ele => {
        if(ele.ok){
          this.searchData = ele.data.data
          console.log(this.searchData,'搜索条件')
        }
      })
    }
  }
</script>