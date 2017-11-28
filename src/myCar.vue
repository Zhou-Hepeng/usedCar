<template>
  <div class="container">
    <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
    <my-goback :title="'我的车辆'"></my-goback>
    <div class="nav">
      <text :class="['prev', firstClass]" @click="firstNav">审核中（0）</text>
      <text></text>
      <text :class="['now', secondClass]" @click="secondNav">在售（0）</text>
      <text :class="['next', thirdClass]" @click="thirdNav">已售（0）</text>
    </div>
    <scroller class="scroll" loadmoreoffset="10" @loadmore="loadMore">
      <div class="no-info" v-if="listData === null">
        <text class="no-car" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe694;</text>
        <text class="tip-text">没有任何车辆信息</text>
      </div>
      <template v-for="(item, index) in listData" v-else>
        <verify :truckData="item" :key="index"></verify>
      </template>
      <loading class="loading" :display="showLoading" @loading="onLoading" v-if="showText">
         <text class="indicator">正在加载 ...</text>
      </loading>
    </scroller>
  </div>
</template>

<script>
import mixins from '../mixins/mixins';
Vue.mixin(mixins);
let storage = weex.requireModule('storage')
import MyGoback from '../components/my/MyGoback.vue';
import Verify from '../components/mycar/Verify.vue';
let mycar = false;
export default {
	data: () => {
		return {
			first: false,
			second: true,
			third: false,
			truckStatus: 2, // 卡车列表状态参数 1 审核中 2 在售 3 已售
			page: 1, // 页数
			showLoading: 'hide', // 是否显示加载
			listData: [], // 请求数据数组
			token:'',
			showText: false // 是否显示loading
		};
	},
	created(){
      //获取toKen
      storage.getItem('toKen',ele => {
        if(ele.result == 'success'){
          this.token = ele.data
          //获取车辆列表
          this.fetch();
        }
      })
	},
	components: {
		MyGoback,
		Verify
	},
	computed: {
		firstClass() {
			return this.first ? 'selected' : '';
		},
		secondClass() {
			return this.second ? 'selected' : '';
		},
		thirdClass() {
			return this.third ? 'selected' : '';
		}
	},

	methods: {
		fetch() {
			// 数据请求
			this.getData(`/truck/my-truck?access-token=${this.accessToken}&s=${this.truckStatus}&page=${this.page}&ajax=${true}`,res => {
				if (this.page === 1) {
					this.listData = res.data.data;
				} else {
					if (res.data.data !== null) {
						this.listData = this.listData.concat(res.data.data);
						mycar = false;
					}
					this.showLoading = 'hide';
					this.showText = false;
					// 消失前重置loadmore
					this.resetLoadmore();
				}
			});
		},
		firstNav() {
			if (this.first) return;
			// 切换标签
			this.first = true;
			this.second = false;
			this.third = false;
			this.truckStatus = 1;
			// 需要点击标签切换的时候，将page置为1，允许loading
			this.page = 1;
			mycar = false;
			this.showText = false;
			// 进行请求
			this.fetch();
		},
		secondNav() {
			if (this.second) return;
			// 切换标签
			this.first = false;
			this.second = true;
			this.third = false;
			this.truckStatus = 2;
			// 需要点击标签切换的时候，将page置为1，允许loading
			this.page = 1;
			mycar = false;
			this.showText = false;
			// 进行请求
			this.fetch();
		},
		thirdNav() {
			if (this.third) return;
			// 切换标签
			this.first = false;
			this.second = false;
			this.third = true;
			this.truckStatus = 3;
			// 需要点击标签切换的时候，将page置为1，允许loading
			this.page = 1;
			mycar = false;
			this.showText = false;
			// 进行请求
			this.fetch();
		},
		loadMore() {
			this.showText = true;
		},
		onLoading() {
			if (mycar) return;
			this.page++;
			mycar = true;
			this.showLoading = 'show';
			this.fetch();
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
  .nav{
    margin-top: 2px;
    position: relative;
    flex-direction: row;
    height: 88px;
    background-color: #fff;
    align-items: center;
  }
  .prev,.now,.next{
    flex: 1;
    text-align: center;
    height: 88px;
    line-height: 88px;
    font-size: 28px;
    color: #666;
    border-bottom-width: 0;
  }
  .selected{
    height: 84px;
    line-height: 84px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #d22425;
    color: #ee6e47;
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
  .scroll{
    flex: 1;
  }
  .loading{
    width: 750px;
  }
  .indicator{
    color: #999;
    font-size: 28px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
