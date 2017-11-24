<template>
  <div class="list-item">
    <div class="item-content">
      <image class="image" :src="truckData.cover"></image>
      <div class="truck-content">
        <text class="truck-title-text">{{truckData.title}}</text>
        <text class="second-title-text">{{truckData.SubSeries}}</text>
        <div class="agian">
          <text class="no-pass">未通过</text>
          <text class="edit-car">请修改车辆信息</text>
        </div>
      </div>
      <text class="list-line"></text>
    </div>
    <div class="item-footer">
      <text class="delete">删除</text>
      <text class="edit">编辑</text>
    </div>
  </div>
</template>

<script>
export default {
	props: ['truckData']
};
</script>

<style scoped>
  .list-item{
    margin-top: 24px;
    background-color: #fff;
  }
  .item-content{
    position: relative;
    flex-direction: row;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .image{
    width: 204px;
    height: 136px;
  }
  .list-line{
    position: absolute;
    left: 30px;
    bottom: 0;
    width: 720px;
    height: 2px;
    background-color: #eee;
  }
  .truck-content{
    padding-left: 20px;
  }
  .truck-title-text{
    width: 460px;
    text-overflow:ellipsis;
    overflow:hidden;
    lines:1;
    font-size: 32px;
    color: #333;
  }
  .second-title-text{
    margin-top: 14px;
    font-size: 24px;
    color: #999;
  }
  .agian{
    margin-top: 36px;
    flex-direction: row;
  }
  .no-pass,.edit-car{
    font-size: 24px;
  }
  .no-pass{
    color: #d22425;
  }
  .edit-car{
    margin-left: 10px;
    color:#999;
  }
  .item-footer{
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .delete,.edit{
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 28px;
    color: #ee6e47;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-color: #ee6e47;
    border-top-style: solid;
    border-top-width: 2px;
    border-right-color: #ee6e47;
    border-right-style: solid;
    border-right-width: 2px;
    border-bottom-color: #ee6e47;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-left-color: #ee6e47;
    border-left-style: solid;
    border-left-width: 2px;
  }
  .edit{
    margin-left: 10px;
  }
</style>
