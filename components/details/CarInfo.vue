<template>
  <div class="car-info" v-if="carInfoData.configs">
    <text class="title-text">车辆档案</text>
    <!-- 各个参数渲染 -->
    <template v-for="item in carInfoData.configs">
      <car-config :configs="item"></car-config>
    </template>
    <!-- VIN码后六位 -->
    <!-- <div class="list-li">
      <text class="list-line"></text>
      <text class="gray-title">VIN码后六位：</text>
      <text class="text-info">000000</text>
    </div> -->
    <!-- 车辆描述 -->
    <div class="list-li" v-if="carInfoData.extra">
      <text class="list-line"></text>
      <text class="gray-title">车辆描述：</text>
      <text class="text-area" v-if="!moreData">{{carInfoData.extra.introduction ? carInfoData.extra.introduction : '暂无描述'}}</text>
      <text :class="['text-area', textMoreInfo]" v-else>{{carInfoData.extra.introduction ? carInfoData.extra.introduction : '暂无描述'}}</text>
    </div>
    <!-- 查看更多 -->
    <div class="look-more" @click="lookMore">
      <text class="more">{{moreText}}</text>
      <text :class="['arrow',arrowClass]" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe601;</text>
    </div>
    <div class="tips">
      <text class="more-line"></text>
      <text class="text-tip">以上参数配置由卖家提供，仅供参考，实际参数以卖家售卖车辆为准，如参数有误，请随时反馈。</text>
    </div>
  </div>
</template>

<script>
import CarConfig from './CarConfig.vue';
export default {
	props: ['carInfoData'],
	components: {
		CarConfig
	},
	data() {
		return {
			moreText: '查看更多',
			moreData: false
		};
	},
	computed: {
		arrowClass() {
			return this.moreData ? 'up-arrow' : '';
		},
		textMoreInfo() {
			return this.moreData ? 'text-more-info' : '';
		}
	},
	methods: {
		// ＜10 + 0
		zero(m) {
			return m < 10 ? '0' + m : m;
		},
		format(t) {
			//t是整数，否则要parseInt转换
			let time = new Date(t * 1000);
			let y = time.getFullYear();
			let m = time.getMonth() + 1;
			let d = time.getDate();
			let h = time.getHours();
			let mm = time.getMinutes();
			let s = time.getSeconds();
			return `${y}年${this.zero(m)}月${this.zero(d)}`;
		},
		lookMore() {
			this.moreData = !this.moreData;
			this.moreData
				? (this.moreText = '收起更多')
				: (this.moreText = '查看更多');
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
    background-color: #fff;
  }
  .list-line{
    position: absolute;
    left: 30px;
    top: 0;
    width: 720px;
    height: 2px;
    background-color: #eee;
  }
  .gray-title{
    min-width: 80px;
    font-size: 28px;
    color: #999;
  }
  .text-info{
    font-size: 28px;
    flex: 1;
    text-align: right;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    overflow:hidden;
    lines:2;
  }
  .text-area{
    font-size: 28px;
    flex: 1;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    overflow:hidden;
    lines:2;
  }
  .text-more-info{
    lines: 0;
  }
  .look-more{
    position: relative;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 24px;
    background-color: #fff;
  }
  .more{
    font-size: 24px;
    color:#999;
  }
  .arrow{
    width: 24px;
    height: 24px;
    margin-left: 10px;
    font-family: 'icon';
    font-size: 24px;
    color:#999;
    transform: rotate(0deg);
  }
  .up-arrow{
    transform: rotate(180deg);
    top: 0;
  }
  .more-line{
    position: absolute;
    left: 0;
    top: 0;
    width: 750px;
    height: 2px;
    background-color: #eee;
  }
  .tips{
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
  }
  .text-tip{
    font-size: 28px;
    color: #ee6e47;
  }
</style>
