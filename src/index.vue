<template>
  <div class="wrapper">
    <text>11e</text>
    <!-- 轮播图 -->
    <carousel :carouselData="carouselData"></carousel>
    <!-- 附加功能 -->
    <additional></additional>
    <!-- 品牌列表 -->
    <brandList></brandList>
  </div>
</template>

<style scoped>

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
      carouselData:{}
    },
    methods: {
      
    },
    created(){
      this.getData('http://www.atool.org/httptest.php',{},ele => {
        console.log(ele,'ele')
      })
    }
  }
</script>