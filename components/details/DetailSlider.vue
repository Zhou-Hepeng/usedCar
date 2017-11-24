<template>
  <div>
    <div :class="showMask ? 'show-mask' : ''" v-if="showMask" @click="closeMask">
      <slider class="mask-slider">
        <div class="mask-slider" v-for="(photo,index) in photos" :index="SelectIndex" :key="index">
          <image class="mask-img" :src="photo.uri" @load="onload"></image>
          <text class="indicator">{{photo.pos}}/{{photos.length}}</text>
        </div>
      </slider>
    </div>
    <div v-else>
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="(photo,index) in photos" :key="index" @click="showInfo(index)">
          <image class="image" resize="cover" :src="photo.uri"></image>
          <text class="indicator">{{photo.pos}}/{{photos.length}}</text>
          <text class="photo-text">江西 九江市 2017-05-22发布</text>
        </div>
      </slider>
    </div>
  </div>
</template>

<script>
export default {
	// porps: ['photos'],
	data() {
		return {
			showMask: false,
			SelectIndex: 0,
			photos: [
				{
					pos: 1,
					width: 128,
					height: 128,
					uri:
						'http://img7.kcimg.cn/uploads/31/a7/31a79f7a201f1db93e7a1a91998378d4.png'
				},
				{
					pos: 2,
					width: 400,
					height: 405,
					uri:
						'http://img7.kcimg.cn/uploads/82/a6/82a620764139e84f99bfb4e1363b555e.jpg'
				},
				{
					pos: 3,
					width: 580,
					height: 445,
					uri:
						'http://img7.kcimg.cn/uploads/10/0c/100cbc524faf060dfce582a77a0c1a7f.jpg'
				}
			]
		};
	},
	methods: {
		showInfo(index) {
			console.log(index);
			this.showMask = true;
			this.SelectIndex = index;
		},
		closeMask() {
			this.showMask = false;
		},
		onload(e) {
			console.log(e, 'onload');
			this.event = e;
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
    background: #000;
    z-index: 1000;
  }
  .mask-slider{
    position: relative;
    flex:1;
    z-index: 1001;
  }
  .mask-img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 700px;
    height: 500px;
  }
</style>
