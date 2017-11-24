<template>
    <div class="container">
    	<slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="carousel in carouselData" :key="carousel.ID">
                <image class="image" resize="cover" :src="carousel.img"></image>
            </div>
            <indicator class="indicator"></indicator>
        </slider>
        <div class="search-bar">
            <div class="location" @click="locationPop">
                <text class="location-text">{{locationInfo && locationInfo.city ? locationInfo.city : '全国'}}</text>
                <text class="location-more" :style="{fontFamily:'icon',color:'#666',fontSize:'24px'}">&#xe601;</text>
            </div>
            <div class="search" @click="searchPop">
                <text class="search-text">搜索二手车</text>
            </div>
        </div>
    </div>
</template>

<script>
let storage = weex.requireModule('storage')
export default {
    props: ['carouselData','locationInfo'],
    created(){
        storage.getItem('location',ele => {

        })
    },
    methods:{
        //显示选择地区弹层
        locationPop(){
            this.$emit('locationPop')
        },
        //显示搜索弹层
        searchPop(){
           this.$emit('searchPop')
        }
    }
}
</script>

<style scoped>
.container{
    position: relative;
}
.search-bar{
    position:absolute;
    top:25px;
    left:25px;
    width:700px;
    height:72px;
    flex-direction: row;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #fff;
}
.location{
    width:180px;
    padding-right:30px;
    position: relative;
    justify-content: center;
    align-items: center;
}
.location-text{
    font-size:28px;
    color:#666;
    margin-right:10px;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    lines: 1;
}
.location-more{
    position:absolute;
    right:20;
    top:25;
}
.search{
    flex:1;
    justify-content: center;
    align-items: flex-start;
}
.search-text{
    color:#999;
    font-size:28px;
    padding-left:30px;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #eee;
}
.box-flex{
    flex: 1;
}
.slider,
.frame,
.image{
    width: 750px;
    height: 360px;
    background-color: #eee;
}
.indicator {
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    width: 750px;
    height: 20px;
    item-color: #fff;
    item-selected-color: #ffd600;
    item-size: 12px;
}
</style>