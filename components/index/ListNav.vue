<template>
  <div class="quality-nav">
    <text :class="['quality-left',selected ? 'quality-selected' : '']" @click="chooseLeft">{{leftTitle}}</text>
    <text :class="['quality-right',!selected ? 'quality-selected' : '']" @click="chooseRight">{{rightTitle}}</text>
    <text :class="['selected-line', selected ? '' : 'selected-right']"></text>
  </div>
</template>
<script>
export default {
	props: ['leftTitle','rightTitle','selected'],
	data: () => ({}),
	methods: {
		chooseLeft() {
			if (this.selected) return;
			this.$emit('clickLeft');
		},
		chooseRight() {
			if (!this.selected) return;
			this.$emit('clickRight');
		}
	}
};
</script>
<style scoped>
.quality-nav{
  margin-bottom: 2px;
  position: relative;
  flex-direction: row;
  height: 88px;
  background-color: #fff;
}
.quality-left,.quality-right{
  flex: 1;
  line-height: 88px;
  text-align: center;
}
.quality-selected{
  color: #d22425;
  flex: 1;
  line-height: 88px;
  text-align: center;
}
.selected-line{
  position: absolute;
  width: 375px;
  height: 2px;
  background-color: #d22425;
  left: 0;
  bottom: -2px;
}
.selected-right {
  left: 375px;
}
</style>
