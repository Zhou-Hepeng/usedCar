<template>
  <div class="quality">
    <list-nav :leftTitle="leftTitle" :rightTitle="rightTitle" :selected="selected" @clickLeft="chooseLeft" @clickRight="chooseRight"></list-nav>
    <div class="quality-content">
      <div class="list-li" v-if="selected" v-for="(item, index) in seller">
        <text class="list-line" v-if="index !== 0"></text>
        <text class="li-title">{{item.company_name}}</text>
        <div class="list-content" @click="goWeexUrl('shop')">
          <text class="li-to-store" @>进入店铺</text>
          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe60d;</text>
        </div>
      </div>
      <div class="list-li" v-if="!selected" v-for="(item, index) in intermediary">
        <text class="list-line" v-if="index !== 0"></text>
        <text class="li-title">{{item.company_name}}</text>
        <div class="list-content" @click="goWeexUrl('shop')">
          <text class="li-to-store">进入店铺</text>
          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe60d;</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListNav from './ListNav.vue';
export default {
  props:['seller','intermediary'],
	components: {
		ListNav
	},
	data: () => ({
		leftTitle: '优质车商',
		rightTitle: '优质经纪人',
		selected: true,
		// seller: [
		// 	{
		// 		company_name: '济宁青汇运输有限公司'
		// 	},
		// 	{
		// 		company_name: '济宁青汇运输有限公司'
		// 	},
		// 	{
		// 		company_name: '济宁青汇运输有限公司'
		// 	},
		// 	{
		// 		company_name: '济宁青汇运输有限公司'
		// 	}
		// ],
		// intermediary: [
		// 	{
		// 		company_name: 'xxxx'
		// 	},
		// 	{
		// 		company_name: 'xxxx'
		// 	},
		// 	{
		// 		company_name: 'xxxx'
		// 	},
		// 	{
		// 		company_name: 'xxxx'
		// 	}
		// ]
	}),
	methods: {
    chooseLeft() {
      this.selected  = true
    },
    chooseRight() {
      this.selected = false
    },
	}
};
</script>
<style scoped>
.quality{
  border-top-width: 30px;
  border-top-style: solid;
  border-top-color: rgb(239, 239, 244);
}
.quality-content{
  background-color: #fff;
}
.list-li{
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 88px;
}
.li-title{
  font-size: 28px;
  flex: 1;
}
.list-content{
  width: 160px;
  height:88px;
  max-width: 160px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.li-to-store{
  margin-right: 8px;
  font-size: 24px;
  color: #96a6c5;
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
