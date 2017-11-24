<template>
  <div class="nav">
    <div class="nav-content">
      <div @click="goUrl('https://bbs.360che.com/m/thread-2307692-1-1.html')" class="nav-item">
        <text class="nav-icon credit" :style="{fontFamily:'icon',fontSize:'48px'}">&#xe6ce;</text>
        <text class="nav-des">分期贷款</text>
      </div>
      <div @click="goUrl('http://cn.mikecrm.com/E7h21rK')" class="nav-item">
        <text class="nav-icon car-source" :style="{fontFamily:'icon',fontSize:'48px'}">&#xe6cd;</text>
        <text class="nav-des">批量车源</text>
      </div>
      <div @click="goUrl('https://tao.m.360che.com/static/guarantee/html/')" class="nav-item">
        <text class="nav-icon transaction" :style="{fontFamily:'icon',fontSize:'48px'}">&#xe6c9;</text>
        <text class="nav-des">担保交易</text>
      </div>
      <div @click="goUrl('https://tool-api.360che.com/tools/secondhandcar.php#&main')" class="nav-item">
        <text class="nav-icon car-value" :style="{fontFamily:'icon',fontSize:'48px'}">&#xe6c7;</text>
        <text class="nav-des">车价估量</text>
      </div>
    </div>
    <div class="nav-footer">
      <div class="footer-item item-buy" @click="goWeexUrl('buyCar')">
        <text class="truck-icon" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe6a8;</text>
        <text class="item-des">我要买车</text>
      </div>
      <div class="footer-item item-sale" @click="toSaleCar">
        <text class="truck-icon" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe69a;</text>
        <text class="item-des">我要卖车</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	data: () => ({}),
	methods: {
		toSaleCar() {
			// 去卖车
		}
	}
};
</script>
<style scoped>
  .nav{
    flex-direction: column;
    padding-left: 16px;
    padding-top: 24px;
    padding-right: 16px;
    padding-bottom: 24px;
  }
  .nav-content{
    flex-direction: row;
  }
  .nav-item{
    flex: 1;
  }
  .nav-des{
    color: #333;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
  }
  .nav-icon{
    font-family:'icon';
    font-size: 48px;
    text-align:center;
    line-height:68px
  }
  .credit{
    color:#ff9e00;
  }
  .car-source{
    color:#58d456;
  }
  .transaction{
    color:#f65a2b;
  }
  .car-value{
    color: #528cff;
  }
  .nav-footer{
    flex-direction: row;
    margin-left: 14px;
    margin-right: 14px;
    margin-top: 30px;
    margin-bottom: 16px;
  }
  .footer-item{
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 88px;
    font-size: 28px;
    line-height: 32px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .item-des{
    color: #fff;
    text-align: center;
  }
  .item-buy{
    margin-right: 15px;
    background-color: #ff9e00;
    box-shadow: 0 6px 6px #ffda9d;
  }
  .item-sale{
    margin-left: 15px;
    background-color: #f65a2b;
    box-shadow: 0 6px 6px #ffbca8;
  }
  .truck-icon{
    font-family:'icon';
    font-size: 28px;
    line-height: 32px;
    color: #fff;
    margin-right: 10px;
  }
</style>
