<template>
    <div class="container">
      <my-goback :title="'我的消息'" :history="true" @clearItem='clearItem'></my-goback>
      <scroller style="flex: 1">
        <div class="no-info" v-if="notMessageList">
          <text class="no-car" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe694;</text>
          <text class="tip-text">没有任何车辆信息</text>
        </div>
        <template v-for="(item,index) in messageData">
          <message-item :message="item" :index="index" :key="index" @clearRecord="clearRecord"></message-item>
        </template>
      </scroller>
    </div>
</template>

<script>
import mixins from '../mixins/mixins';
Vue.mixin(mixins);
let modal = weex.requireModule('modal')
let storage = weex.requireModule('storage')
import MyGoback from '../components/my/MyGoback.vue';
import MessageItem from '../components/mymessage/MessageItem.vue';
export default {
	data: () => {
		return {
			messageData: [],
      //是否没有list
      notMessageList:false,
			page: 1,
      //toKen
			token:'',
      //清除历史记录按钮
      clearButton:false,
		};
	},
	components: {
		MyGoback,
		MessageItem
	},
  created(){
      //获取toKen
      storage.getItem('toKen',ele => {
        if(ele.result == 'success'){
          this.token = ele.data
          //获取消息列表
          this.getMessage()
        }
      })
  },
  methods:{
    //获取消息列表
    getMessage(){
      this.getData(`/member/notification?page=${this.page}&access-token=${this.token}`,ele => {
        if(ele.ok && ele.data.status == 0){
          this.messageData = ele.data.data
          //如果有历史记录 && 显示清除按钮
          if(this.messageData.length){
            this.clearButton = true
          }else{
            //如果没有历史记录 && 显示没有内容
            this.notMessageList = true
          }
        }
      })
    },
    //删除个别消息
    clearRecord(id,index){
      this.showConfirm(value => {
        if(value == "确定"){
          this.getData(`/member/delnotif?access-token=${this.token}&id=${id}`,ele => {
            if(ele.ok && ele.data.status == 0){
              this.messageData.splice(index,1)
              if(!this.messageData.length){
                this.clearButton = false
                //如果没有消息记录 && 显示没有内容
                this.notMessageList = true
              }
            }
          })
        }
      })
    },
    //清除所有的消息
    clearItem(){
      this.showConfirm(value => {
        if(value == "确定"){
          this.getData(`/member/delnotifs?access-token=${this.token}`,ele => {
            if(ele.ok && ele.data.status == 0){
              this.messageData = [];
              this.clearButton = false
              //显示没有内容
              this.notMessageList = true
            }
          })
        }
      })
    },
  }
};
</script>

<style scoped>
  .container{
    flex: 1;
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
