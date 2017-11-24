<template>
  <div class="container">
    <scroller style="flex: 1">
      <detail-slider></detail-slider>
      <info-text></info-text>
      <car-info></car-info>
      <sail-info></sail-info>
    </scroller>
    <div class="concat" @click="concatToSailer">
      <text class="sailer">联系卖家</text>
    </div>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';
Vue.mixin(mixins);
import DetailSlider from '../components/details/DetailSlider.vue';
import InfoText from '../components/details/InfoText.vue';
import CarInfo from '../components/details/CarInfo.vue';
import SailInfo from '../components/details/SailInfo.vue';

export default {
	components: {
		DetailSlider,
		InfoText,
		CarInfo,
		SailInfo
	},
	methods: {
		concatToSailer() {
			this.alert('联系卖家');
		}
	}
};
</script>

<style scoped>
  .container{
    flex: 1;
    height: 100%;
    background-color: #f5f5f5;
  }
  .concat{
    height: 90px;
    align-items: center;
    justify-content: center;
    background-color: #d33b26;
  }
  .sailer{
    color: #fff;
    font-size: 32px;
  }
</style>
