<template>
  <div class="shop-item-con">
    <my-goback :title="shopInfo.company_name"></my-goback>
    <scroller class="list" @loadmore="getList" loadmoreoffset="10">
      <header-info :shopInfo="shopInfo"></header-info>
      <div class="cell" v-for="item in goodsList" :key="item.id">
          <truckItem :truckData="item"></truckItem>
      </div>
    </scroller>
    <!-- 点击拨打电话和复制微信号按钮 -->
    <!-- <div class="concat-btn">
      <div class="btn right-btn" @click="copyInfo(shopInfo.mobile)">
        <div class="wx-concat">
          <text class="icon-wx" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe60f;</text>
          <text class="wx-number">{{shopInfo.mobile}}</text>
        </div>
        <text class="wx-copy">点击复制</text>
      </div>
      <div class="btn left-btn" @click="goCall(shopInfo.mobile)">
        <div class="concat-phone">
          <text class="icon-phone" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe689;</text>
          <text class="phone">{{shopInfo.mobile}}</text>
        </div>
        <text class="ascription">归属地：</text>
      </div> -->
  </div>
</template>

<style scoped>
  .concat-btn{
    position: relative;
    flex-direction: row;
    min-height: 50px;
    align-items: center;
    border-top-color: #eee;
    border-top-width: 1px;
    border-top-style: solid;
  }
  .btn{
    flex: 1;
    padding-top: 12px;
    padding-bottom: 14px;
    align-items: center;
  }
  .left-btn{
    background-color: #EE6E47;
  }
  .concat-phone,.wx-concat{
    flex-direction: row;
    align-items: center;
  }
  .icon-phone,.icon-wx{
    font-family: 'icon';
    font-size: 28px;
    color: #fff;
    margin-right: 10px;
  }
  .phone{
    height: 48px;
    line-height: 48px;
    font-size: 32px;
    color: #fff;
  }
  .ascription{
    font-size: 24px;
    color: #fff;
  }
  .icon-wx{
    color: #17a915;
  }
  .wx-number{
    height: 48px;
    line-height: 48px;
    font-size: 28px;
    color: #17a915;
  }
  .wx-copy{
    font-size: 24px;
    color: #17a915;
  }
</style>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)
const storage = weex.requireModule('storage')
const clipboard = weex.requireModule('clipboard');
const modal = weex.requireModule('modal');
import MyGoback from '../components/my/MyGoback.vue';
import HeaderInfo from '../components/index/HeaderInfo.vue'
import truckItem from '../components/truckItem.vue'
import SailInfo from '../components/details/SailInfo.vue';

export default {
    data (){
        return {
            // 列表数据
            goodsList: [],
            page: 1,
            //店铺信息
            shopInfo:{},
            data: {
                id: 0,
                cover: 'https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg',
                mainTitle: '青岛解放 320马力 自卸车',
                secondTitle: '2017年9月 / 1万公里 / 8X4',
                price: '31.00',
                price_reduce: 'yes',
                publisher: 3,
                groups: [1, 2]
            },
            ajaxIng: false
        }
    },
    methods: {
        getList (){
            if(this.ajaxIng){
                return false;
            }
            this.getData(`/seller-truck/seller-truck?id=${this.shopInfo.id}&page=${this.page}`, ele => {
                if (ele.ok && ele.data.status == 0){

                    //如果page == 1  ？ 直接复制 ：下拉加载，合并数据
                    if(this.page == 1){
                        this.goodsList = ele.data.data
                    }else{
                        this.goodsList = this.goodsList.concat(ele.data.data)
                    }

                    // 增加页数
                    this.page ++;

                    // 如果没有数据，拒绝下次请求
                    if(!ele.data.data.length){
                        this.ajaxIng = true;
                    }
                }
            })
        },
      copyInfo(number) {
        // 复制微信号
        clipboard.setString(number);
        modal.toast({
          message: '复制成功,请去微信添加好友',
          duration: 1
        });
      }
    },
    created(){
        //获取店铺信息
        storage.getItem('shopInfo',ele => {
            if(ele.result == 'success'){
              this.shopInfo = JSON.parse(ele.data)
              this.alert(this.shopInfo)
              this.getList();
            }
        })
    },
    components: {
        MyGoback,
        HeaderInfo,
        truckItem,
        SailInfo
    }
}
</script>