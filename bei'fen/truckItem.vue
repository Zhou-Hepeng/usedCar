<template>
    <div class="truck-item-con">
        <div class="title" v-if="titleName">
            <text class="title-text">{{titleName}}</text>
            <div class="more">
                <text class="more-text">更多</text>
                <text :style="{fontFamily:'icon',fontSize:'20px',color:'#96a6c5'}">&#xe604;</text>
            </div>
        </div>
        <div class="truck-item flex" v-for="item in truckItemData" :key="item.id" @click="jump(item.id)">
            <div class="truck-img">
                <image class="image" :src="item.cover"></image>
            </div>
            <div class="truck-info box-flex">
                <div class="truck-title"><text class="truck-title-text">{{item.mainTitle}}</text></div>
                <div class="second-title box-flex"><text class="second-title-text">{{item.secondTitle}}</text></div>
                <div class="other-info flex align-center">
                    <div class="truck-price flex align-center">
                        <text class="truck-price-text">{{item.price}}</text>
                        <text class="price-small-text">万</text>
                    </div>
                    <!-- 是否降价 -->
                    <image class="price-reduce ml" v-if="item.price_reduce == 'yes'" :src="imageUrl + 'm/images/price_reduce.png'"></image>
                    <!-- 身份标识 -->
                    <div class="user-tips ml" v-if="item.publisher == 2 || item.publisher == 3">
                        <text v-if="item.publisher == 2" class="tips-text">经纪人</text>
                        <text v-if="item.publisher == 3" class="tips-text">商家</text>
                    </div>
                    <!-- vip标识 -->
                    <image class="tips-vip ml" v-if="item.groups.indexOf(2) !== -1" :src="imageUrl + 'm/images/vip.png'"></image>
                    <!-- 保证金标识 -->
                    <image class="tips-bao ml" v-if="item.groups.indexOf(1) !== -1" :src="imageUrl + 'm/images/bao.png'"></image>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title{height:110px;padding-left:30px;padding-right:30px;flex-direction:row;justify-content: space-between;align-items: center;
    border-top-width: 30px;border-top-style: solid;border-top-color: #efeff4;
    border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: #efeff4;}
.title-text{font-size:28px;}
.more{flex-direction: row;justify-content: center;align-items: center;}
.more-text{color:#96a6c5;font-size:24px;}
.flex{
    flex-direction: row;
}
.box-flex{
    flex: 1;
}
.align-center{
    align-items: center;
}
.ml{
    margin-left: 10px;
}
.truck-item-con{
    background-color: #fff;
}
.truck-item{
    width: 750px;
    padding: 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #eee;
}
.image,
.truck-img{
    width: 204px;
    height: 136px;
}
.truck-info{
    padding-left: 20px;
}
.truck-title,
.second-title{
    margin-bottom: 10px;
}
.truck-title-text{
    lines: 1;
    text-overflow: ellipsis;
    font-size: 32px;
    color: #333333;
}
.second-title-text{
    font-size: 24px;
    color: #999999;
}
.truck-price-text{
    font-size: 32px;
    color: #ee6e47;
}
.price-small-text{
    font-size: 30px;
    color: #ee6e47;
}
.user-tips{
    padding: 4px 8px;
    background-color: #ffdd62;
}
.tips-text{
    font-size: 24px;
    color: #904208;
}
.price-reduce{
    width: 36px;
    height: 26px;
}
.tips-vip{
    width: 32px;
    height: 28px;
}
.tips-bao{
    width: 32px;
    height: 34px;
}
</style>

<script>
const navigator = weex.requireModule('navigator')

export default {
    data (){
        return {
            imageUrl: 'https://tao.m.360che.com/',
            // truckItemData: [{
            //     id: 0,
            //     cover: 'https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg',
            //     mainTitle: '青岛解放 320马力 自卸车 自卸车 自卸车 自卸车 自卸车',
            //     secondTitle: '2017年9月 / 1万公里 / 8X4',
            //     price: '31.00',
            //     price_reduce: 'yes',
            //     publisher: 3,
            //     groups: [1, 2]
            // }]
        }
    },
    props: ['titleName','truckItemData'],
    methods: {
        jump (id){
            navigator.push({
                url: 'http://www.baidu.com' + id,
                animated: 'true'
            })
        }
    }
}
</script>