<template>
  <div class="container">
    <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
    <scroller style="flex: 1">
      <detail-slider :photos="photoData"  v-if="photoData"></detail-slider>
      <info-text :detailData="detailData"></info-text>
      <car-info :carInfoData="detailData"></car-info>
      <sail-info :seller="detailData.seller" :publisher="detailData.publisher" :groups="detailData.groups"></sail-info>
      <div style="margin-top: 20px;background-color: #fff;">
        <list-nav :leftTitle="'最新上架'" :rightTitle="'最新推荐'" :selected="selected" @clickLeft="leftChoose" @clickRight="rightChoose"></list-nav>
        <template v-for="(item,index) in truckData">
          <truck-item :truckData="item" :key="index"></truck-item>
        </template>
        <div class="look-more">
          <text class="more-text">查看更多车源</text>
          <text class="arrow" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe604;</text>
        </div>
      </div>
    </scroller>
    <div class="concat">
      <div class="collect" @click="collection">
        <text class="collect-icon" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe692;</text>
        <text class="collect-text">{{collectText}}</text>
      </div>
      <div class="share" @click="share">
        <text class="share-icon" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe68a;</text>
        <text class="share-text">分享</text>
      </div>
      <div class="sailer" @click="concatToSailer">
        <text class="sailer-text">联系卖家</text>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';
Vue.mixin(mixins);
const storage = weex.requireModule('storage');
import DetailSlider from '../components/details/DetailSlider.vue';
import InfoText from '../components/details/InfoText.vue';
import CarInfo from '../components/details/CarInfo.vue';
import SailInfo from '../components/details/SailInfo.vue';
import ListNav from '../components/index/ListNav.vue';
import truckItem from '../components/truckItem.vue';

export default {
	components: {
		DetailSlider,
		InfoText,
		CarInfo,
		SailInfo,
		ListNav,
		truckItem
	},
	data: () => {
		return {
			detailData: {}, // 全部信息
			id: '',
			photoData: {
				province: '',
				photos: [],
				creatTime: ''
			}, // 照片信息
			hotData: '', // 热度
			token: '',
			selected: true,
			truckData: [] // 渲染同价位等list
		};
	},
	computed: {
		collectText() {
			if (this.detailData.favorited === 1) {
				return '已收藏';
			} else {
				return '收藏';
			}
		}
	},
	created() {
		//获取toKen
		storage.getItem('toKen', ele => {
			if (ele.result == 'success') {
				this.token = ele.data;
			}
		});
		storage.getItem('productId', ele => {
			if (ele.result == 'success') {
				this.id = ele.data;
				//获取详情
				this.fetch();
			}
		});
	},
	methods: {
		fetch() {
			this.getData(
				`/weex/truck/detail?access-token=${this.token}&id=${this.id}`,
				res => {
					let data = res.data.data;
					this.detailData = data;
					// 轮播图需要的相关参数
					this.photoData.photos = data.photos;
					this.photoData.province = `${data.trad_province.province} ${
						data.trad_city.city
					}`;
					this.photoData.creatTime = data.create_at;
					// 进行同价位请求
					this.sameList();
				}
			);
		},
		leftChoose() {
			this.selected = true;
			this.sameList();
		},
		rightChoose() {
			this.selected = false;
			this.samePriceList();
		},
		// 同品牌
		sameList() {
			this.getData(
				`/weex/recommend/brand-relative?id=${this.detailData.cat_id}`,
				res => {
					let data = res.data.data;
					this.truckData = data;
				}
			);
		},
		// 同价位
		samePriceList() {
			this.getData(
				`/weex/recommend/price-relative?id=${this.detailData.cat_id}`,
				res => {
					let data = res.data.data;
					this.truckData = data;
				}
			);
		},
		collection() {
			if (!this.detailData.favorited) {
				// 点击收藏
				this.postData(
					`/favorite?access-token=${this.token}`,
					`truck_id=${this.id}`,
					res => {
						this.detailData.favorited = 1;
					}
				);
			} else {
				this.getData(
					`/favorite/delete?access-token=${this.token}&truck_id=${this.id}`,
					res => {
						this.detailData.favorited = 0;
					}
				);
			}
		},
		share() {
			// 点击分享
			this.alert('进行分享');
			// weex.requireModule('THAW').onShowShare({
			// 	title: this.detailData.title, // 分享标题
			// 	desc: '', // 分享描述
			// 	link: '', // 分享链接
			// 	imgUrl: '' // 分享图标
			// });
		},
		concatToSailer() {
			this.alert('联系卖家');
			// 拨打电话
			weex.requireModule('THAW').onGoCall(this.detailData.seller.mobile);
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
    flex-direction: row;
    height: 90px;
    align-items: center;
    justify-content: center;
  }
  .collect,.share{
    height: 90px;
    flex: 1;
    flex-direction: row;
    background-color: #000;
    align-items: center;
    justify-content: center;
  }
  .share{
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: rgba(255, 255, 255, 0.6);
  }
  .collect-icon,.share-icon{
    font-family: 'icon';
    font-size: 28px;
    color: #fff;
    margin-right: 8px;
  }
  .collect-text,.share-text{
    color: #fff;
    font-size: 32px;
  }
  .sailer{
    height: 90px;
    align-items: center;
    justify-content: center;
    flex: 2;
    background-color: #d33b26;
  }
  .sailer-text{
    color: #fff;
    font-size: 32px;
  }
  .look-more{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 64px;
    padding-top: 10px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .more-text{
    font-size: 24px;
    color: #999;
  }
  .arrow{
    font-family: 'icon';
    font-size: 28px;
    color: #999;
  }
</style>
