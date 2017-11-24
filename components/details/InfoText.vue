<template>
  <div class="info">
    <!-- 标题编号 -->
    <div class="front">
      <div class="front-info">
        <text class="car-text">{{detailData.title}}</text>
        <div class="status">
          <!-- 标签 -->
          <text class="user-type">{{identity}}</text>
          <image class="shop-vip" src="https://tao.m.360che.com/m/images/vip.png"></image>
          <image class="shop-protect" src="https://tao.m.360che.com/m/images/bao.png"></image>
          <text class="car-code">车源编号：{{detailData.code}}</text>
        </div>
        <text class="list-line"></text>
      </div>
      <!-- 热度 -->
      <div class="hot-info">
        <text class="hot-title">热度指数</text>
        <text class="hot-num">{{hot}}</text>
      </div>
    </div>
    <!-- 售价 -->
    <div class="price">
      <div class="sail-price">
        <text class="price-title">售价：</text>
        <text class="price-num">{{detailData.price}}万</text>
         <!-- v-if="infoData.price_reduce === 'yes'" -->
        <image class="price-down" v-if="detailData.price_reduce === 'yes'" src="https://s.kcimg.cn/wap/images/used-car/cutdown.png"></image>
      </div>
      <div class="loan" v-if="detailData.pay_instalments === 'support'">
        <text class="icon-loan">贷</text>
        <text class="first-loan">首付{{detailData.down_payment}}万起</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: ['detailData', 'hot'],
	computed: {
		identity() {
			let i;
			if (this.detailData.publisher === 1) {
				i = '个人';
			} else if (this.detailData.publisher === 2) {
				i = '经纪人';
			} else if (this.detailData.publisher === 3) {
				i = '商家';
			}
			return i;
		}
	}
};
</script>

<style scoped>
  .info{
    width: 750px;
    min-height: 250px;
    background-color: #fff;
  }
  .front{
    position: relative;
    flex-direction: row;
    min-height: 150px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .front-info{
    flex: 1;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: rgb(223, 223, 223);
  }
  .car-text{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 36px;
    line-height: 50px;
    width: 520px;
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
  .car-code{
    font-size: 24px;
    color: #999;
    line-height: 32px;
  }
  .list-line{
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 720px;
    height: 2px;
    background-color: #eee;
  }
  .hot-info{
    align-items: center;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .hot-title{
    font-size: 28px;
    line-height: 40px;
    color: #999;
  }
  .hot-num{
    font-size: 28px;
    margin-top: 4px;
    line-height: 40px;
    color:#d22425;
  }
  .price{
    flex-direction: row;
    height: 100px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #eee;
  }
  .price-title{
    font-size: 24px;
    line-height: 36px;
  }
  .price-num{
    margin-right: 12px;
    font-size: 36px;
    line-height: 50px;
    color: #ee6e47;
  }
  .price-down{
    height: 24px;
    width: 40px;
  }
  .sail-price{
    flex-direction: row;
    align-items: center;
    flex: 1;
  }
  .loan{
    width: 170px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .icon-loan{
    width: 32px;
    height: 32px;
    padding-top: 4px;
    background-color: #ee6e47;
    text-align: center;
    color: #fff;
    font-size: 24px;
    margin-right: 8px;
  }
  .first-loan{
    color: #ee6e47;
    font-size: 24px;
  }
</style>
