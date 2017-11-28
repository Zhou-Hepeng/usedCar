<template>
  <div class="container">
    <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
    <my-goback :title="'浏览历史'" :history="clearButton" @clearItem='clearItem'></my-goback>
    <scroller style="flex: 1;background-color:#f5f5f5;">
      <!-- 没有历史记录 -->
      <div class="no-info" v-if="notRecordList">
        <text class="no-car" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe694;</text>
        <text class="tip-text">没有任何车辆信息啊</text>
      </div>
      <template v-for="(item,index) in recordList">
        <record  :item="item" :index="index" @clearRecord="clearRecord"></record>
      </template>
    </scroller>
  </div>
</template>

<script>
  import mixins from '../mixins/mixins'
  Vue.mixin(mixins)
let storage = weex.requireModule('storage')
import MyGoback from '../components/my/MyGoback.vue';
import record from '../components/myRecord/record.vue'
export default {
	components: {
		MyGoback,
    record
	},
  data(){
    return {
      //请求的页数
      page:1,
      //历史列表数据
      recordList:[],
      //是否没有list
      notRecordList:false,
      token:{},
      //清除历史记录按钮
      clearButton:false,
    }
  },
  created(){
    //获取toKen
    storage.getItem('toKen',ele => {
      if(ele.result == 'success'){
        this.token = ele.data

        //请求用户信息
        this.getRecord()
      }
    })

    // this.getData('/member/history',ele => {
    //   this.alert(ele)
    //   if(ele.ok && ele.data.status == 0){
    //     this.alert(ele.data.data)
    //   }
    // })
  },
  methods:{
    //获取历史记录列表
    getRecord(){
      this.getData(`/member/history?page=${this.page}&access-token=${this.token}`,ele => {
        // this.alert(ele)
        this.recordList = ele.data.data
        //如果有历史记录 && 显示清除按钮
        if(this.recordList.length){
          this.clearButton = true
        }else{
          //如果没有历史记录 && 显示没有内容
          this.notRecordList = true
        }
      })
    },
    // 删除某条历史记录
    clearRecord(id,index){
      //弹出提示框 && 询问是否删除
      this.showConfirm(value => {
        if(value == "确定"){
          this.getData(`/member/historyd?access-token=${this.token}&id=${id}`,ele => {
              if(ele.ok && ele.data.status == 0){
                this.recordList.splice(index,1)
                if(!this.recordList.length){
                  this.clearButton = false
                  //如果没有历史记录 && 显示没有内容
                  this.notRecordList = true
                }
              }
          })
        }
      });
    },
    // 删除所有的历史记录
    clearItem(){
      //弹出提示框 && 询问是否删除
      this.showConfirm(value => {
        if(value == "确定"){
          this.getData(`/member/historyds?access-token=${this.token}`,ele => {
            if(ele.ok && ele.data.status == 0){
              this.recordList = [];
              this.clearButton = false
              //显示没有内容
              this.notRecordList = true
            }
          })
        }
      });
    }
  }
};
</script>

<style scoped>
  .container{
    flex: 1;
    height: 100%;
  }
  .no-info{
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
    flex: 1;
    align-items: center;
    background-color:#f5f5f5;
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
