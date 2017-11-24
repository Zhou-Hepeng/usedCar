<template>
  <div class="header">
    <image class="company-img" src="https://i.kcimg.cn/data/avatar/new/58/61c6701364994a3f811c06041d95c19a_big.jpg-80x80.jpg"></image>
    <div class="header-content">
      <div class="shop-title">
        <text class="shop-name">{{shopInfo.company_name}}</text>
        <text class="shop-type">商家</text>
        <image class="shop-vip" src="https://tao.m.360che.com/m/images/vip.png"></image>
        <image class="shop-protect" src="https://tao.m.360che.com/m/images/bao.png"></image>
      </div>
      <div class="company-name">
        <text class="gray">公司名称：</text>
        <text class="name">{{shopInfo.licence_company}}</text>
      </div>
      <div class="company-concat">
        <text class="gray">联系人：</text>
        <text class="name">{{shopInfo.realname}}</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	props: ['shopInfo'],
	data: () => ({})
};
</script>
<style scoped>
  .header{
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    padding-top:48px;
    padding-left:30px;
    padding-bottom:36px;
    padding-right:30px;
    border-bottom-width:20px;
    border-bottom-style: solid;
    border-bottom-color: #f5f5f5;
  }
  .company-img{
    width: 160px;
    height: 160px;
    margin-right: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 0 0 10px #999;
  }
  .header-content{
    flex: 1;
    flex-direction: column;
  }
  .shop-title{
    height: 50px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
  }
  .shop-name{
    width: 240px;
    font-size: 36px;
    font-weight: 700;
    text-overflow:ellipsis;
    -webkit-line-clamp:1;
    overflow:hidden;
    lines:1;
  }
  .shop-type{
    height: 32px;
    font-size: 24px;
    line-height: 24px;
    margin-left: 10px;
    margin-right: 8px;
    padding-top: 4px;
    padding-bottom:4px;
    padding-left:8px;
    padding-right:8px;
    color: #904208;
    background-color: #ffdd62;
  }
  .shop-vip,.shop-protect{
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  .company-name,.company-concat{
    flex-direction: row;
  }
  .gray{
    font-size: 28px;
    line-height: 40px;
    color: #999;
  }
  .name{
    flex: 1;
    font-size: 28px;
    line-height: 40px;
    word-break: break-all;
  }
</style>
