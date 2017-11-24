<template>
  <div class="list-li">
    <text class="list-line"></text>
    <text class="gray-title">{{configs.text}}</text>
    <text class="text-info">{{configs.value}}</text>
  </div>
</template>

<script>
export default {
	props: ['configs']
};
</script>

<style scoped>
  .list-li{
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 24px;
    padding-bottom: 24px;
    flex-direction: row;
    min-height: 40px;
    background-color: #fff;
  }
  .list-line{
    position: absolute;
    left: 30px;
    top: 0;
    width: 720px;
    height: 2px;
    background-color: #eee;
  }
  .gray-title{
    min-width: 80px;
    font-size: 28px;
    color: #999;
  }
  .text-info{
    font-size: 28px;
    flex: 1;
    text-align: right;
    text-overflow:ellipsis;
    -webkit-line-clamp:2;
    overflow:hidden;
    lines:2;
  }
</style>
