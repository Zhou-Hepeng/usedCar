<template>
  <div>
    <text class="title-text">卖家信息</text>
    <!-- 卖家联系方式 -->
    <div class="list-li">
      <image class="user-img" src="https://i.kcimg.cn/data/avatar/new/17/1757e1a63938378423be2d1098ffb207_big.jpg-80x80.jpg"></image>
      <text class="user-name">asfdasfdasfdsaf</text>
    </div>
    <!-- 带标签的联系方式 -->
    <div class="list-li">
      <div class="li-front">
        <image class="user-img" src="https://i.kcimg.cn/data/avatar/new/17/1757e1a63938378423be2d1098ffb207_big.jpg-80x80.jpg"></image>
        <text class="user-name">asfdasfdasfdsaf</text>
        <div class="status">
          <!-- 标签 -->
          <text class="user-type">经纪人</text>
          <image class="shop-vip" src="https://tao.m.360che.com/m/images/vip.png"></image>
          <image class="shop-protect" src="https://tao.m.360che.com/m/images/bao.png"></image>
        </div>
      </div>
      <div class="list-content" @click="goShop">
        <text class="li-to-store">进入店铺</text>
        <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe604;</text>
      </div>
    </div>
    <!-- 单个联系人 -->
    <div class="list-li">
      <text class="list-line"></text>
      <text class="gray-title">联系人：</text>
      <text class="concat">asdfdsafdsafdsafdsaf</text>
    </div>

    <!-- 带标签联系人 -->
    <div class="list-li-more">
      <text class="list-line"></text>
      <div class="company">
        <text class="gray-title">公司名称：</text>
        <text class="concat">江西江龙集团粤顺物流有限公司</text>
      </div>
      <div class="user-concat">
        <text class="gray-title">联系人：</text>
        <text class="concat">asdfdsafdsafdsafdsaf</text>
      </div>
    </div>

    <!-- 点击拨打电话和复制微信号按钮 -->
    <div class="concat-btn">
      <text class="list-line"></text>
      <div class="btn left-btn" @click="telPhone">
        <div class="concat-phone">
          <text class="icon-phone" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe689;</text>
          <text class="phone">13446632067</text>
        </div>
        <text class="ascription">归属地：</text>
      </div>
      <div class="btn right-btn" @click="copyInfo">
        <div class="wx-concat">
          <text class="icon-wx" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe60f;</text>
          <text class="wx-number">13795978018</text>
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
	methods: {
		goShop() {
			// 进店看看
		},
		telPhone() {
			// 拨打电话
		},
		copyInfo() {
			// 复制微信号
			clipboard.setString('13795978018');
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
  .shop-vip,.shop-protect{
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
  }
  .concat-btn{
    position: relative;
    flex-direction: row;
    min-height: 50px;
    align-items: center;
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
