<template>
	<!-- 历史记录 -->
  <div :class="['truck-item','flex',touchActive ? 'active' : '']" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <div class="truck-img">
          <image class="image" :src="item.cover"></image>
      </div>
      <div class="truck-info box-flex">
          <div class="truck-title"><text class="truck-title-text">{{item.mainTitle}}</text></div>
          <div class="second-title box-flex"><text class="second-title-text">{{item.secondTitle}}</text></div>
          <div class="other-info flex align-center">
              <div class="truck-price flex align-center">
                  <text class="truck-price-text">{{item.price}}</text>
                  <text class="price-small-text">万</text>
              </div>
              <!-- 是否降价 -->
              <image class="price-reduce ml" v-if="item.price_reduce == 'yes'" :src="imageUrl + 'm/images/price_reduce.png'"></image>
              <!-- 身份标识 -->
              <div class="user-tips ml" v-if="item.publisher == 2 || item.publisher == 3">
                  <text v-if="item.publisher == 2" class="tips-text">经纪人</text>
                  <text v-if="item.publisher == 3" class="tips-text">商家</text>
              </div>
              <!-- vip标识 -->
              <image class="tips-vip ml" v-if="item.groups.indexOf(2) !== -1" :src="imageUrl + 'm/images/vip.png'"></image>
              <!-- 保证金标识 -->
              <image class="tips-bao ml" v-if="item.groups.indexOf(1) !== -1" :src="imageUrl + 'm/images/bao.png'"></image>
          </div>
      </div>
    <div class="cancle-collection" @click="clearRecord(item.id)">
      <div class="collection">
        <text class="cancle">删除</text>
      </div>
    </div>
  </div>
</template>

<script>
	export default{
		props:['item','index'],
		data(){
			return {
      			touchActive: false, // 手指滑动
      			imageUrl: 'https://tao.m.360che.com/',
			}
		},
		methods:{
		    //向左滑动
		    touchstart(e) {
		      this.startPageX = e.changedTouches[0].pageX;
		    },
		    touchmove(e) {
		      this.endPageX = e.changedTouches[0].pageX;
		    },
		    touchend(e) {
		      if (this.startPageX - this.endPageX > 20) {
		        this.touchActive = true;
		      }
		      if (this.endPageX - this.startPageX > 20) {
		        this.touchActive = false;
		      }
		    },
		    clearRecord(id){
		    	this.touchActive = false;
				this.$emit('clearRecord',id,this.index)
			}
		},

	}
</script>

<style>
.active{
  transform: translateX(-90px)
}
.flex{
    flex-direction: row;
}
.box-flex{
    flex: 1;
}
.align-center{
    align-items: center;
}
.ml{
    margin-left: 10px;
}
.truck-item{
    position:relative;
    width: 750px;
    padding: 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #eee;
    transform: translateX(0)
}
.image,
.truck-img{
    width: 204px;
    height: 136px;
}
.truck-info{
    padding-left: 20px;
}
.truck-title,
.second-title{
    margin-bottom: 10px;
}
.truck-title-text{
    lines: 1;
    text-overflow: ellipsis;
    font-size: 32px;
    color: #333333;
}
.second-title-text{
    font-size: 24px;
    color: #999999;
}
.truck-price-text{
    font-size: 32px;
    color: #ee6e47;
}
.price-small-text{
    font-size: 30px;
    color: #ee6e47;
}
.user-tips{
    padding: 4px 8px;
    background-color: #ffdd62;
}
.tips-text{
    font-size: 24px;
    color: #904208;
}
.price-reduce{
    width: 36px;
    height: 26px;
}
.tips-vip{
    width: 32px;
    height: 28px;
}
.tips-bao{
    width: 32px;
    height: 34px;
}
.cancle-collection{
  position: absolute;
  top: 0;
  right: -90px;
  width: 90px;
  height: 175px;
  justify-content: center;
  align-items: center;
  background-color: #ff9041;
  transition: all .15s linear;
}
.collection{
  width: 60px;
}
.cancle{
  font-size: 28px;
  color: #fff;
  line-height: 40px;
}
</style>