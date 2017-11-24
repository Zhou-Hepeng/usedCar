<template>
    <div class="truck-item flex" :key="truckData.id" @click="jump(truckData.id)">
        <div class="truck-img">
            <image class="image" :src="truckData.cover"></image>
        </div>
        <div class="truck-info box-flex">
            <div class="truck-title"><text class="truck-title-text">{{truckData.mainTitle}}</text></div>
            <div class="second-title box-flex"><text class="second-title-text">{{truckData.secondTitle}}</text></div>
            <div class="other-info flex align-center">
                <div class="truck-price flex align-center">
                    <text class="truck-price-text">{{truckData.price}}</text>
                    <text class="price-small-text">万</text>
                </div>
                <!-- 是否降价 -->
                <image class="price-reduce ml" v-if="truckData.price_reduce == 'yes'" :src="imageUrl + 'm/images/price_reduce.png'"></image>
                <!-- 身份标识 -->
                <div class="user-tips ml" v-if="truckData.publisher == 2 || truckData.publisher == 3">
                    <text v-if="truckData.publisher == 2" class="tips-text">经纪人</text>
                    <text v-if="truckData.publisher == 3" class="tips-text">商家</text>
                </div>
                <!-- vip标识 -->
                <image class="tips-vip ml" v-if="truckData.groups.indexOf(2) !== -1" :src="imageUrl + 'm/images/vip.png'"></image>
                <!-- 保证金标识 -->
                <image class="tips-bao ml" v-if="truckData.groups.indexOf(1) !== -1" :src="imageUrl + 'm/images/bao.png'"></image>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
        }
    },
    props: ['truckData'],
    methods: {
        jump (id){
            this.goWeexUrl('http://www.baidu.com' + id);
        }
    }
}
</script>