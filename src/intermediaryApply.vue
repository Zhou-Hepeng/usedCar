<template>
    <div>
    <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
    <my-goback title="申请经纪人"></my-goback>
    <scroller class="container">
        <div class="form-box-con" :style="{marginBottom:'30px'}">
            <div class="form-box flex">
                <text class="label">姓名</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入姓名" @input="editInfo($event,'realname')" ref="box0" />
            </div>
            <div class="form-box flex">
                <text class="label">所在城市</text>
                <div class="input box-flex text-right center" @click="pickLocationShow">
                  <text class="location-text">{{locationInfo.province && locationInfo.province.text}}  {{locationInfo.city && locationInfo.city.text}}  {{locationInfo.county && locationInfo.county.text}}</text>
                </div>
                <!-- <text class="input box-flex text-right" style="background-color:red" @click="pickLocationShow"></text> -->
                <text class="icon" :style="{fontFamily:'icon', fontSize:'28px', transform: 'translateX(4px)'}">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">身份证</text>
                <input class="input box-flex text-right ml" type="text" @input="editInfo($event,'id_no')" placeholder="请输入身份证" ref="box1" />
            </div>
            <div class="form-box flex">
                <text class="label">卖车手机号</text>
                <input class="input box-flex text-right ml" type="tel" @input="editInfo($event,'mobile')" placeholder="请输入卖车手机号" ref="box2" />
            </div>
            <div class="form-box form-box-small flex">
                <text class="label">微信</text>
                <input v-if="!switchType" class="input box-flex text-right ml" type="text" @input="editInfo($event,'wechat_id ')" :value="submitData.wechat_id" :placeholder="switchType ? submitData.wechat_id  : '请输入微信'" ref="box3" />
                <div v-else class="input box-flex text-right ml center">
                  <text :class="[!submitData.wechat_id ? 'placeholder' : '']">{{submitData.wechat_id ? submitData.wechat_id : '请输入微信'}}</text>
                </div>
                <text class="text-right ml">同号</text>
                <switch class="switch ml" @change="switchChange"></switch>
            </div>
            <div class="form-box form-box-small flex">
                <text class="label">验证码</text>
                <input class="input box-flex text-right ml" type="tel" @input="editInfo($event,'captcha')" placeholder="请输入验证码" ref="box4" />
                <div :class="['code-btn','radius','ml', codeActive ? '' : 'code-active']" @click="getCode">
                    <text class="code-btn-text">{{codeActive ? '获取验证码' : codeNumber + '秒后重新获取'}}</text>
                </div>
            </div>
        </div>
        <div class="form-box-con upload-label-con flex">
            <div class="box-flex" @click="upLoadImg">
                <div class="upload-label box-flex">
                    <text class="icon" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe6cb;</text>
                </div>
                <text class="upload-text">上传身份证正面</text>
            </div>
            <div class="box-flex ml">
                <div class="upload-label box-flex">
                    <text class="icon" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe6ca;</text>
                </div>
                <text class="upload-text">上传身份证反面</text>
            </div>
            <div class="box-flex ml">
                <div class="upload-label box-flex">
                    <text class="icon" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe6cc;</text>
                </div>
                <text class="upload-text">本人持身份证照</text>
            </div>
        </div>
        <div class="submit-con">
            <div class="box-flex submit-btn radius" :class="['submit-btn-' + submitActive]" @click="submit">
                <text class="submit-btn-text">提交申请</text>
            </div>
        </div>
    </scroller>
    <pick-location :pickShow="pickShow" @pickLocationShow="pickLocationShow" @submitLocation="submitLocation"></pick-location>
</div>
</template>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)
const picker = weex.requireModule('picker')
const storage = weex.requireModule('storage')
const thaw = weex.requireModule('THAW')

import MyGoback from '../components/my/MyGoback.vue'
import pickLocation from '../components/pickLocation.vue'

export default {
  components: {
      MyGoback,
      pickLocation
  },
  data (){
    return {
      toKen:'',
      // 微信同号按钮
      switchType: false,
      timer: null,
      time: 90,
      code:'',
      //是否可以请求code
      clickCode:true,
      //获取验证码按钮状态
      codeActive: true,
      //验证码倒计时
      codeNumber: 5,
      submitActive: true,
      //是否显示选择地区
      pickShow:false,
      //选择地区详细信息
      locationInfo:{},
      //总提交数据
      submitData:{
        id_face_photo:'https://sm.kcimg.cn/bbs-face/ershouche/db66a7c218fc83058bf3cef48b9f9d3d.jpg?e=1511851087&token=mHIzr0FO97w_nnu71_2OkN85excbOj-ma23E6Zj2:ZDdCyPwwVu2UBXiw-l-uIbgUJuw=',
        id_back_photo :'https://sm.kcimg.cn/bbs-face/ershouche/7fde3e7fca7fdc96cb4c1288734fc718.jpg?e=1511851358&token=mHIzr0FO97w_nnu71_2OkN85excbOj-ma23E6Zj2:q_8jYRDWwSXxusKs0pC6rPeDWc8=',
        id_person_photo :'https://sm.kcimg.cn/bbs-face/ershouche/f18c0fef97e7056eff7793ac24e6f3c0.jpg?e=1511851421&token=mHIzr0FO97w_nnu71_2OkN85excbOj-ma23E6Zj2:MNk4AvxEhx1yuRZSvlGXCya-EJc=',
        province_no :'',
        city_no :'',
        area_no :'',
        realname :'',
        id_no :'',
        mobile :'',
        wechat_id :'',
        captcha :'',
      },
    }
  },
  created(){
      storage.getItem('toKen',ele => {
        if(ele.result == 'success'){
          this.toKen = ele.data
        }
      })
  },
  methods: {
    // 微信同号按钮
    switchChange (event){
      this.switchType = event.value;
      //如果微信同号
      if(event.value){
        this.submitData.wechat_id = this.submitData.mobile
      }else{
        this.submitData.wechat_id = ''
      }
    },
    // 手机号输入同步至微信
    mobileChange (event){
      this.wechat = event.value;
    },
    //获取验证码
    getCode (){
      if(!this.clickCode){
        return ;
      }
      this.clickCode = false
      this.postData(`/sms/captcha?access-token=${this.toKen}`,`mobile=${this.submitData.mobile}`,ele => {
        if(ele.ok && ele.data.status == 0){
            this.codeActive = false
            this.codeInterval();
          //赋值code
          this.code = ele.data.data
          this.alert(this.code)
        }else{
          this.alert(ele.data.data)
          this.codeActive = true
          this.codeNumber = 5
        }
        this.clickCode = true
      })
    },
    // 获取验证码倒计时
    codeInterval (){
      let time = setTimeout(() => {
        this.codeNumber--
        if(this.codeNumber == 0){
          this.codeActive = true
          this.codeNumber = 5
        }else{
          this.codeInterval()
        }
        clearTimeout(time)
      },1000)
    },
    // 最终提交
    submit (){
      if(this.submitData.realname == ''){
        this.alert('姓名不能为空')
        return
      }else if(this.submitData.province_no == ''){
        this.alert('所在城市不能为空')
        return
      }else if(this.submitData.id_no == ''){
        this.alert('身份证号不能为空')
        return
      }else if(this.submitData.mobile == ''){
        this.alert('卖车手机号不能为空')
        return
      }else if(this.submitData.captcha == ''){
        this.alert('验证码不能为空')
        return
      }else if(this.submitData.id_face_photo == ''){
        this.alert('身份证正面照片不能为空')
        return
      }else if(this.submitData.id_back_photo == ''){
        this.alert('身份证背面照片不能为空')
        return
      }else if(this.submitData.id_person_photo == ''){
        this.alert('持证照不能为空')
        return
      }else if(this.submitData.captcha != this.code){
        this.alert('验证码不正确')
        return
      }


      let data = ''
      for(let key in this.submitData){
        data += key + '=' + this.submitData[key] + '&'
      }
      this.alert(data)

      //提交
      this.postData(`/intermediary?access-token=${this.toKen}`,data,ele => {
        this.alert(ele)
        if(ele.ok){
          this.alert(ele.data)
        }
      })

      if (this.submitActive == 'active'){
        return false;
      }
      this.submitActive = 'active';
      // 提交
    },
    //选择时间
    pickDate () {
      picker.pickDate({
        value: this.value
      }, event => {
        if (event.result === 'success') {
          this.value = event.data
        }
      })
    },
    //显示 || 隐藏选择地区
    pickLocationShow(){
      //显示选择地区的时候先失去焦点
      if(!this.pickShow){
        let box = this.$refs;
        console.log(box)
        for(let i = 0 ; i < 5 ; i++){
          this.$refs['box' + i].blur();
        }
      }
      this.pickShow = !this.pickShow
    },
    // 确认地区选择
    submitLocation(locationInfo){
      //赋值详细信息
      this.locationInfo = locationInfo
      this.pickShow = false;
      // this.alert(this.locationInfo)
      this.submitData.province_no = locationInfo.province.value
      this.submitData.city_no = locationInfo.city.value
      this.submitData.area_no = locationInfo.county.value
    },
    //编辑信息
    editInfo(event,type){
      this.alert()
      this.submitData[type] = event.value

      //如果是微信同号
      if(this.switchType && type == 'mobile'){
        this.submitData.wechat_id = event.value
      }
    },
    //图片上传
    upLoadImg(){
       this.goLogin(ele => {
        this.alert(1)
        this.alert(ele)
      })
    }
  }
}
</script>

<style scoped>
.container{
    flex: 1;
    padding-top: 30px;
    background-color: #efeff4;
}
.flex{
    flex-direction: row;
}
.box-flex{
    flex: 1;
}
.ml{
    margin-left: 20px;
}
.radius{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}
.text-right{
    text-align: right;
}
.center{
  justify-content: center;
  align-items: flex-end;
}
.placeholder{
  color:#999;
}
.location-text{
  font-size:28px;
  color:#333;
}
.input{
    height: 50px;
}
.form-box-con{
    background-color: #fff;
}
.form-box{
    border-bottom-width: 1px;
    border-bottom-color: #dfdfdf;
    border-bottom-style: solid;
    align-items: center;
    justify-content: center;
    padding-top:24px;
    padding-bottom:24px;
    padding-right:20px;
    margin-left: 20px;
    background-color: #fff;
}
.form-box-small{
    padding-top:20px;
    padding-right:20px;
    padding-bottom:20px;
}
.icon{
    color: #dfdfdf;
    font-family: 'icon';
}
.switch{
    align-items: flex-start;
}
/*获取验证码*/
.code-btn{
    width: 220px;
    height:60px;
    padding-top:15px;
    padding-right:10px;
    padding-bottom:15px;
    padding-left:10px;
    background-color: #09bb07;
}
.code-active{
    background-color: #ccc;
}
.code-btn-text{
    text-align: center;
    font-size: 24px;
    color: #ffffff;
}
/*上传*/
.upload-label-con{
    padding-top:30px;
    padding-right:20px;
    padding-bottom:30px;
    padding-left:20px;
}
.upload-label{
    height: 152px;
    border-width: 1px;
    border-style: solid;
    border-color: #dfdfdf;
    align-items: center;
    justify-content: center;
}
.upload-text{
    margin-top: 10px;
    font-size: 24px;
    text-align: center;
    color: #96a6c5;
}
/*提交按钮*/
.submit-con{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 128px;
    padding-top:20px;
    padding-right:20px;
    padding-bottom:20px;
    padding-left:20px;
    background-color: #fff;
}
.submit-btn{
    align-items: center;
    justify-content: center;
    background-color: #ee6e47;
}
.submit-btn-text{
    color: #ffffff;
}
.submit-btn-active{
    background-color: #ccc;
}

</style>