<template>
  <div class="my">
    <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
    <my-goback :title="title"></my-goback>
    <div class="my-info">
      <image class="user-img" :src="userInfo.avatar"></image>
      <div class="user-content">
        <div class="user-status">
          <text class="user-name">{{userInfo.nickname}}</text>
          <text class="user-type">{{userInfo.group.is_auth == 1 ? '个人' : userInfo.group.is_auth == 2 ? '经纪人' : '商家'}}</text>
        </div>
        <div class="user-opration">
          <text class="user-edit">编辑</text>
          <text class="arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe604;</text>
        </div>
      </div>
    </div>
    <div class="my-content">
      <div class="list-li" @click="goWeexUrl('myCar')">
        <text class="li-title">我的车辆</text>
        <div class="list-content">
          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe60d;</text>
        </div>
      </div>
      <div class="list-li" @click="goWeexUrl('myCollection')">
        <text class="list-line"></text>
        <text class="li-title">我的收藏</text>
        <div class="list-content">
          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe60d;</text>
        </div>
      </div>
      <div class="list-li" @click="goWeexUrl('myMessage')">
        <text class="list-line"></text>
        <text class="li-title">我的消息</text>
        <div class="list-content">
          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe60d;</text>
        </div>
      </div>
      <div class="list-li" @click="goWeexUrl('myRecord')">
        <text class="list-line"></text>
        <text class="li-title">浏览记录</text>
        <div class="list-content">
          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe60d;</text>
        </div>
      </div>
      <div class="toApply" @click="goWeexUrl('applyChoose')">
        <div class="list-li">
          <text class="li-title">申请经纪人或商家</text>
          <div class="list-content">
            <text class="li-to-store">去申请</text>
            <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe60d;</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from '../mixins/mixins';
Vue.mixin(mixins);
let storage = weex.requireModule('storage')
import MyGoback from '../components/my/MyGoback.vue';
export default {
	components: {
		MyGoback
	},
	data: () => ({
		title: '个人中心',
    userInfo:{
      group:{is_auth:1}
    },
	}),
  created(){
      this.getToKen();
      //获取用户信息
      storage.getItem('userInfo',ele => {
        if(ele.result == 'success'){
          this.userInfo = JSON.parse(ele.data)
          // this.alert(ele)
        }
      })
  },
};
</script>
<style scoped>
  .my{
    background-color: #efeff4;
  }
  .my-info{
  	padding-top:48px;
  	padding-bottom:36px;
  	padding-left:30px;
  	padding-right:30px;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
  }
  .user-img{
    width: 160px;
    height: 160px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 0 5px #999;
    margin-right: 20px;
  }
  .user-content{
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .user-status{
    flex-direction: row;
    align-items:center;
  }
  .user-name{
    width: 240px;
    font-size: 36px;
    font-weight: 700;
    text-overflow:ellipsis;
    -webkit-line-clamp:1;
    overflow:hidden;
    lines:1;
  }
  .user-type{
    height: 32px;
    font-size: 24px;
    line-height: 24px;
    margin-left: 10px;
    margin-right: 8px;
    padding: 4px 8px;
    color: #904208;
    background-color: #ffdd62;
  }
  .user-opration{
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .user-edit{
    font-size: 28px;
    color: #999;
  }
  .arrow{
    font-family: 'icon';
    font-size: 24px;
    color: #96a6c5;
    margin-left: 8px;
  }
  .my-content,.toApply{
    margin-top: 24px;
  }
  .list-li{
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 88px;
    background-color: #fff;
  }
  .list-content{
    width: 160px;
    max-width: 160px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .li-to-store{
    margin-right: 8px;
    font-size: 24px;
    color: #999;
  }
  .li-title{
    font-size: 28px;
    flex: 1;
  }
  .li-arrow{
    font-family: 'icon';
    font-size: 24px;
    color: #96a6c5;
    transform: rotate(180deg)
  }
  .list-line{
    position: absolute;
    left: 30px;
    top: 0;
    width: 720px;
    height: 2px;
    background-color: #eee;
  }
</style>
