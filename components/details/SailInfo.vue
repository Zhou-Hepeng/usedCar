<template>
  <div v-if="seller && groups">
    <text class="title-text">卖家信息</text>
    <!-- 带标签的联系方式 -->
    <div class="list-li">
      <div class="li-front">
        <image class="user-img" :src="seller.avatar"></image>
        <text class="user-name">{{seller.name}}</text>
        <div class="status" v-if="identity !== '个人'">
          <!-- 标签 -->
          <text class="user-type">{{identity}}</text>
          <template v-for="item in icons">
            <image class="icon-img" :src="item"></image>
          </template>
        </div>
      </div>
      <div class="list-content" @click="goShop" v-if="identity !== '个人'">
        <text class="li-to-store">进入店铺</text>
        <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe604;</text>
      </div>
    </div>
    <!-- 单个联系人 -->
    <div class="list-li">
      <text class="list-line"></text>
      <text class="gray-title">联系人：</text>
      <text class="concat">{{seller.name}}</text>
    </div>

    <!-- 带标签联系人 -->
    <!-- <div class="list-li-more">
      <text class="list-line"></text>
      <div class="company">
        <text class="gray-title">公司名称：</text>
        <text class="concat">江西江龙集团粤顺物流有限公司</text>
      </div>
      <div class="user-concat">
        <text class="gray-title">联系人：</text>
        <text class="concat">{{seller.name}}</text>
      </div>
    </div> -->

    <!-- 点击拨打电话和复制微信号按钮 -->
    <div class="concat-btn" v-if="seller.mobile || seller.wechat_id">
      <text class="list-line"></text>
      <div class="btn left-btn" @click="telPhone" v-if="seller.mobile && seller.mobile !== null">
        <div class="concat-phone">
          <text class="icon-phone" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe689;</text>
          <text class="phone">{{seller.mobile}}</text>
        </div>
        <text class="ascription">归属地：{{seller.mobile_location}}</text>
      </div>
      <div class="btn right-btn" @click="copyInfo" v-if="seller.wechat_id && seller.wechat_id !== null">
        <div class="wx-concat">
          <text class="icon-wx" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe60f;</text>
          <text class="wx-number">{{seller.wechat_id}}</text>
        </div>
        <text class="wx-copy">点击复制</text>
      </div>
    </div>
  </div>
</template>

<script>
const clipboard = weex.requireModule('clipboard');
const modal = weex.requireModule('modal');
export default {
	props: ['seller', 'publisher', 'groups'],
	computed: {
		identity() {
			let i;
			if (this.publisher === 1) {
				i = '个人';
			} else if (this.publisher === 2) {
				i = '经纪人';
			} else if (this.publisher === 3) {
				i = '商家';
			}
			return i;
		},
		icons() {
			let a = [];
			this.groups &&
				this.groups.forEach(item => {
					if (item === 1) {
						a.push('https://tao.m.360che.com/m/images/vip.png');
					} else if (item === 2) {
						a.push('https://tao.m.360che.com/m/images/bao.png');
					}
				});
			return a;
		}
	},
	methods: {
		goShop() {
			// 进店看看
		},
		telPhone() {
			// 拨打电话
		},
		copyInfo() {
			// 复制微信号
			clipboard.setString(this.seller.wechat_id);
			modal.toast({
				message: '复制成功,请去微信添加好友',
				duration: 1
			});
		}
	}
};
</script>

<style scoped>
  .title-text{
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    color: #96A6C5;
    font-size: 28px;
  }
  .list-li{
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 24px;
    padding-bottom: 24px;
    flex-direction: row;
    min-height: 40px;
    align-items: center;
    background-color: #fff;
  }
  .list-li-more{
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 24px;
    padding-bottom: 24px;
    min-height: 40px;
    background-color: #fff;
  }
  .company{
    margin-bottom: 10px;
  }
  .company,.user-concat{
    flex-direction: row;
    align-items: center;
  }
  .li-front{
    flex: 1;
    flex-direction: row;
    align-items: center;
  }
  .user-img{
    width: 72px;
    height: 72px;
    margin-right: 10px;
  }
  .user-name{
    width: 240px;
    font-size: 28px;
    line-height: 40px;
    margin-right: 24px;
    text-overflow:ellipsis;
    -webkit-line-clamp:1;
    overflow:hidden;
    lines:1;
  }
  .status{
    flex-direction: row;
  }
  .user-type{
    height: 32px;
    font-size: 24px;
    line-height: 24px;
    margin-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    color: #904208;
    background-color: #ffdd62;
  }
  .icon-img{
    width: 32px;
    height: 32px;
    margin-right: 8px;
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
  .li-arrow{
    font-family: 'icon';
    font-size: 24px;
    color: #999;
  }
  .gray-title{
    min-width: 140px;
    font-size: 28px;
    line-height: 40px;
    color: #999;
  }
  .concat{
    font-size: 28px;
    line-height: 40px;
  }
  .list-line{
    position: absolute;
    left: 30px;
    top: 0;
    width: 720px;
    height: 2px;
    background-color: #eee;
    z-index: 10;
  }
  .concat-btn{
    position: relative;
    flex-direction: row;
    height: 100px;
    align-items: center;
  }
  .btn{
    height: 98px;
    flex: 1;
    padding-top: 12px;
    padding-bottom: 14px;
    align-items: center;
  }
  .left-btn{
    background-color: #EE6E47;
  }
  .right-btn{
    background-color: #fff;
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
