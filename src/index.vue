<template>
  <div class="container">
    <scroller style="flex:1;background-color:red">
      <!-- 轮播图 -->
      <carousel :carouselData="carouselData"></carousel>
      <!-- 附加功能 -->
      <additional></additional>
      <!-- 品牌列表 -->
      <!-- <brandList></brandList> -->
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
      <div class="menu">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe6a8;</text>
        <text class="footer-bar-text">买车</text>
      </div>
      <div class="menu">
        <text class="footer-bar-icon" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe699;</text>
        <text class="footer-bar-text">我的</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{flex:1;background-color:red;}
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
  export default {
    components:{
      carousel,
      additional
    },
    data: {
      //地区选择数据
      locationData:{},
      //轮播图数据
      carouselData:{},
      //品牌栏数据
      brandList:[],
    },
    methods: {
      
    },
    created(){
      //获取页面其他数据
      this.getData('weex/site',ele => {
        if (ele.ok && ele.data.status == 0) {
          console.log(ele.data)
          this.carouselData = ele.data.data.carousel
        }
      })
      //获取省市数据
      this.getData('area/cities',ele => {
        if (ele.ok) {
          console.log(ele.data)
        }
      })
    }
  }
</script>