<template>
  <div>
    <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
    <div class="container" v-if="myCollectionData === null">
      <my-goback :title="'我的收藏'"></my-goback>
      <scroller style="flex: 1">
        <div class="no-info">
          <text class="no-car" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe694;</text>
          <text class="tip-text">没有任何车辆信息</text>
        </div>
        <list-nav :leftTitle="'最新上架'" :rightTitle="'最新推荐'" :selected="selected" @clickLeft="leftChoose" @clickRight="rightChoose"></list-nav>
        <template v-for="(item,index) in truckData">
          <truck-item :truckData="item" :key="index"></truck-item>
        </template>
      </scroller>
    </div>
    <div class="container" v-else>
      <my-goback :title="'我的收藏'" :history="true"></my-goback>
      <scroller style="flex: 1">
        <template v-for="(item,index) in myCollectionData">
          <collection-item :truckData="item" :key="index"></collection-item>
        </template>
      </scroller>
    </div>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';
Vue.mixin(mixins);
let storage = weex.requireModule('storage')
import MyGoback from '../components/my/MyGoback.vue';
import ListNav from '../components/index/ListNav.vue';
import truckItem from '../components/truckItem.vue';
import CollectionItem from '../components/mycollection/CollectionItem.vue';
export default {
	data: () => {
		return {
			selected: true,
			truckData: [], // 推荐信息列表
			myCollectionData: [], // 我收藏列表的数据
			page: 1, // 收藏页数
			token:''
		};
	},
	components: {
		MyGoback,
		ListNav,
		truckItem,
		CollectionItem
	},
	created() {
		//获取toKen
		storage.getItem('toKen', ele => {
			if (ele.result == 'success') {
				this.token = ele.data;
				//获取收藏列表
				this.fetch();
			}
		});
	},
	methods: {
		leftChoose() {
			this.selected = true;
		},
		rightChoose() {
			this.selected = false;
		},
		fetch() {
			// 进行数据请求
			this.getData(
				`/favorite?access-token=${this.token}&page=${this.page}`,
				res => {
					this.myCollectionData = res.data.data;
				}
			);
		}
	}
};
</script>

<style scoped>
  .container{
    flex:1;
    height: 100%;
    background-color: #f5f5f5;
  }
  .no-info{
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
    flex: 1;
    align-items: center;
  }
  .no-car{
    font-family:'icon';
    font-size:100px;
    color: #d8d8d8;
  }
  .tip-text{
    margin-top: 20px;
    font-size: 28px;
    color: #999;
  }
</style>
