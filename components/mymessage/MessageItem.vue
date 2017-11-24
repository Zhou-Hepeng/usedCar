<template>
  <div :class="['message-item',touchActive ? 'active' : '']" ref="nihao" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <text class="line"></text>
    <div class="icon-message">
      <div class="icon">
        <text class="red-tip" v-if="message.readed === 'unread'"></text>
        <text class="icon-tip" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe693;</text>
      </div>
    </div>
    <div class="message-content">
      <text class="message-text">{{message.content}}</text>
      <text class="message-time">{{this.format(message.create_at)}}</text>
    </div>
    <div class="cancle-collection" @click="clearRecord(message.id)">
      <div class="collection">
        <text class="cancle">删除</text>
      </div>
    </div>
  </div>
</template>

<script>
  let animation = weex.requireModule('animation')
export default {
	props: ['message','index'],
  data(){
    return {
      touchActive: false, // 手指滑动
      startPageX:'',
      endPageX:'',
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
			return `${y}-${this.zero(m)}-${this.zero(d)} ${this.zero(h)}:${this.zero(
				mm
			)}:${this.zero(s)}`;
		},
    //向左滑动
    touchstart(e) {
      this.startPageX = e.changedTouches[0].pageX;
    },
    touchmove(e) {
      this.endPageX = e.changedTouches[0].pageX;
      let number = 0;

      if(this.endPageX - this.startPageX > 20){
        number = 0
      }
      if (this.startPageX - this.endPageX > 20) {
        number = 90
      }
      let nihao = this.$refs.nihao
      // animation.transition(nihao,{
      //   styles:{
      //     transform: `translateX(-${number}px)`,
      //     opacity: 1
      //   },
      //   duration:300,
      //   timingFunction: 'ease-in-out',
      //   needLayout:false,
      //   delay:0,
      // },() => {

      // })
    },
    touchend(e) {
      // if (this.startPageX - this.endPageX > 20) {
      //   this.touchActive = true;
      // }
      // if (this.endPageX - this.startPageX > 20) {
      //   this.touchActive = false;
      // }
    },
    //删除本条记录
    clearRecord(id){
      this.touchActive = false;
      this.$emit('clearRecord',id,this.index)
    }
	}
};
</script>

<style scoped>
.active{
  transform: translateX(-90px)
}
  .message-item{
    position: relative;
    flex-direction: row;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    padding-right: 24px;
    background-color: #fff;
    transform: translateX(0)
  }
  .line{
    position: absolute;
    left: 30px;
    bottom: 0;
    width: 720px;
    height: 2px;
    background-color: #eee;
  }
  .icon-message{
    position: relative;
    margin-right: 24px;
    padding-top: 8px;
    justify-content: flex-start;
  }
  .red-tip{
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    z-index: 100;
  }
  .icon-tip{
    width: 36px;
    height: 44px;
    font-family: 'icon';
    font-size: 32px;
    color: #999;
  }
  .message-content{
    flex: 1;
  }
  .message-text{
    height: 80px;
    font-size: 28px;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    lines: 2;
    color: #333;
  }
  .message-time{
    margin-top: 16px;
    font-size: 24px;
    color: #999;
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
