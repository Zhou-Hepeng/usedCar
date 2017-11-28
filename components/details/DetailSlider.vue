<template>
    <div>
      <div class="show-mask" v-if="showMask" @click="closeMask">
        <slider class="mask-slider" :index="SelectIndex">
          <div class="slider-img" v-for="(photo,index) in photos.photos" :key="`mask_${index}`">
            <image class="mask-img" resize="cover" :src="imgUrl + photo.uri" @load="onload" :style="`width:${photo.width}px;height:${photo.height}px`"></image>
            <text class="indicator">{{photo.pos}}/{{photos.photos.length}}</text>
          </div>
        </slider>
      </div>
      <div>
        <slider class="slider" interval="3000" auto-play="true">
          <div class="frame" v-for="(photo,index) in photos.photos" :key="`frame_${index}`" @click="showInfo(index)">
            <image class="image" resize="cover" :src="imgUrl + photo.uri"></image>
            <text class="indicator">{{photo.pos}}/{{photos.photos.length}}</text>
            <text class="photo-text">{{photos.province}} {{format(photos.creatTime)}}发布</text>
          </div>
        </slider>
      </div>
    </div>
</template>

<script>
export default {
	props: ['photos'],
	data() {
		return {
			showMask: false,
			SelectIndex: -1,
			imgUrl: 'http://img7.kcimg.cn/'
		};
	},
	methods: {
		showInfo(index) {
			this.showMask = true;
			this.SelectIndex = index;
		},
		closeMask() {
			this.showMask = false;
			this.SelectIndex = -1;
		},
		onload(e) {
			console.log(e, 'onload');
			this.event = e;
		},
		zero(m) {
			// ＜10 + 0
			return m < 10 ? '0' + m : m;
		},
		format(t) {
			//t是整数，否则要parseInt转换
			let time = new Date(t * 1000);
			let y = time.getFullYear();
			let m = time.getMonth() + 1;
			let d = time.getDate();
			return `${y}-${this.zero(m)}-${this.zero(d)}`;
		}
	}
};
</script>

<style scoped>
  .slider,
  .frame,
  .image{
      width: 750px;
      height: 500px;
      background-color: #eee;
  }
  .indicator{
    position: absolute;
    right: 30px;
    bottom: 16px;
    color: #fff;
  }
  .photo-text{
    position: absolute;
    left: 30px;
    bottom: 16px;
    color: #fff;
    font-size: 28px;
  }
  .show-mask{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    z-index: 1000;
  }
  .mask-slider{
    position: relative;
    flex:1;
    z-index: 1001;
    background-color: #000;
    width: 750px;
  }
  .slider-img{
    justify-content: center;
  }
  .mask-img{
    margin-left: 30px;
    width: 690px;
    height: 500px;
  }
</style>
