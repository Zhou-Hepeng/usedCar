<template>
    <div class="shop-item-con">
        <list class="list" @loadmore="fetch" loadmoreoffset="10">
            <cell class="cell" v-for="item in goodsList" :key="item.id">
                <truckItem :truckData="item"></truckItem>
            </cell>
        </list>
    </div>
</template>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)

import truckItem from '../components/truckItem.vue' 

export default {
    data (){
        return {
            // 列表数据
            goodsList: [],
            page: 1,
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
        fetch (){
            if(this.ajaxIng){
                return false;
            }
            this.getData(`/seller-truck/seller-truck?id=${5}&page=${this.page}`, ele => {
                this.ajaxIng = true;
                if ( ele.ok ){
                    this.page ++;
                    this.goodsList.push(this.data);
                    // this.ajaxIng = false;
                }
            })
        }
    },
    created(){
        this.fetch();
    },
    components: {
        truckItem
    }
}
</script>

<style scoped>

</style>