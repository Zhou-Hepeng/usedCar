<template>
    <div class="shop-item-con">
        <my-goback :title="shopInfo.company_name"></my-goback>
        <scroller class="list" @loadmore="getList" loadmoreoffset="10">
            <header-info :shopInfo="shopInfo"></header-info>
            <div class="cell" v-for="item in goodsList" :key="item.id">
                <truckItem :truckData="item"></truckItem>
            </div>
        </scroller>
    </div>
</template>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)
let storage = weex.requireModule('storage')
import MyGoback from '../components/my/MyGoback.vue';
import HeaderInfo from '../components/index/HeaderInfo.vue'
import truckItem from '../components/truckItem.vue'

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
                this.ajaxIng = true;
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
                        this.ajaxIng = false;
                    }
                }
            })
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
        truckItem
    }
}
</script>

<style scoped>

</style>