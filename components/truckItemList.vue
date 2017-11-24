<template>
    <div class="truck-item-con">
        <div class="title" v-if="titleName">
            <text class="title-text">{{titleName}}</text>
            <div class="more">
                <text class="more-text">更多</text>
                <text :style="{fontFamily:'icon',fontSize:'20px',color:'#96a6c5'}">&#xe604;</text>
            </div>
        </div>
        <template v-for="(item, index) in truckItemData">
            <truckItem :truckData="item" :key="index"></truckItem>
        </template>
    </div>
</template>

<script>
import truckItem from './truckItem.vue' 

export default {
    props: ['titleName','truckItemData'],
    components: {
        truckItem
    }
}
</script>

<style scoped>
.truck-item-con{
    background-color: #fff;
}
.title{height:110px;padding-left:30px;padding-right:30px;flex-direction:row;justify-content: space-between;align-items: center;
    border-top-width: 30px;border-top-style: solid;border-top-color: #efeff4;
    border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: #efeff4;}
.title-text{font-size:28px;}
.more{flex-direction: row;justify-content: center;align-items: center;}
.more-text{color:#96a6c5;font-size:24px;}
</style>
