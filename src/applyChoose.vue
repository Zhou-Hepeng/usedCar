<template>
    <div>
        <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
        <MyGoback title="商家申请-类型选择"></MyGoback>
        <div class="apply-container">
            <div class="apply-choose" @click="goWeexUrl('intermediaryApply')">
                <image class="image" :src="imageUrl + 'm/images/geti.png'"></image>
                <div class="content">
                    <text class="title">个体性质</text>
                    <text class="info">我是二手车经纪人，没有实体公司</text>
                </div>
                <text class="icon" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe604;</text>
            </div>
            <div class="apply-choose" @click="goWeexUrl('sellerApply')">
                <image class="image" :src="imageUrl + 'm/images/gongsi.png'"></image>
                <div class="content">
                    <text class="title">公司性质</text>
                    <text class="info">我是二手车车商，有实体公司</text>
                </div>
                <text class="icon" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe604;</text>
            </div>
        </div>
    </div>

</template>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)
import MyGoback from '../components/my/MyGoback.vue';

export default {
    components: {
        MyGoback
    },
    data (){
        return {
            imageUrl: 'https://tao.m.360che.com/',
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.apply-container{
    flex: 1;
    padding: 20px;
    background-color: #efeff4;
}
.apply-choose{
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px #dcdcdc;
    flex-direction: row;
    align-items: center;
}
.image{
    width: 100px;
    height: 84px;
}
.content{
    flex: 1;
    padding-left: 30px;
}
.title{
    margin-bottom: 10px;
    font-size: 28px;
    color: #333333;
}
.info{
    font-size: 24px;
    color: #999999;
}
.icon{
    color:#dfdfdf;
}
</style>
