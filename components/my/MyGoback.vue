<template>
  <div class="go-back">
    <div class="back-btn" @click="goBack()">
      <text class="back-arrow" :style="{fontFamily:'icon',fontSize:'32px'}">&#xe60d;</text>
      <text class="back">返回</text>
    </div>
    <text class="view-name">{{title}}</text>
    <text class="clear" v-if="history" @click="clearItem">清除</text>
  </div>
</template>
<script>
export default {
	props: ['title', 'history'], // history 不传为false
	data: () => ({}),
  methods:{
    clearItem(){
      this.$emit('clearItem')
    }
  }
};
</script>
<style scoped>
  .go-back{
    padding-left: 10px;
    padding-right: 10px;
    height: 90px;
    flex-direction: row;
    align-items: center;
    background-color:#fff;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
    border-bottom-style: solid;
  }
  .back-btn{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 90px;
  }
  .back-arrow{
    margin-right: 8px;
    font-family: 'icon';
    font-size: 32px;
    color: #cbd6ec;
  }
  .back{
    font-size: 28px;
    color: #666;
  }
  .view-name{
    font-size: 32px;
    font-weight: 500;
    width: 450px;
    text-align: center;
    text-overflow:ellipsis;
    -webkit-line-clamp:1;
    overflow:hidden;
    lines:1;
  }
  .clear{
    width: 120px;
    height: 90px;
    line-height: 90px;
    font-size: 28px;
    text-align: right;
  }
</style>
