<template>
<div>
    <div class="topBarShow" v-if="topBarShow" style="height:40px;background-color:#fff"></div>
    <my-goback title="商家申请-资料填写"></my-goback>
    <scroller class="container">
        <div class="form-box-con" :style="{marginBottom:'30px'}">
            <div class="form-box flex">
                <text class="label">商家类型</text>
                <text class="input box-flex text-right" @click="sidebarShow">{{shopInfo.name}}</text>
                <text class="icon" :style="{fontFamily:'icon', fontSize:'28px', transform: 'translateX(4px)'}">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">公司名称</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入公司名称"  @input="editInfo($event,'company_name')" ref="box0" />
            </div>
            <div class="form-box flex">
                <text class="label">有效期至</text>
                <text class="input box-flex text-right" @click="selectTime">{{submitData.licence_expiry}}</text>
                <text class="icon" :style="{fontFamily:'icon', fontSize:'28px', transform: 'translateX(4px)'}">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">注册号</text>
                <input class="input box-flex text-right ml" type="tel" placeholder="请输入注册号" @input="editInfo($event,'licence')"  ref="box1" />
            </div>
            <div class="form-box flex">
                <text class="label">公司名称</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入公司地址" @input="editInfo($event,'company_address')" ref="box2" />
            </div>
        </div>
        <div class="form-box-con" :style="{marginBottom:'30px'}">
            <div class="form-box flex">
                <text class="label">姓名</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入姓名" @input="editInfo($event,'realname')" ref="box3" />
            </div>
            <div class="form-box flex">
                <text class="label">所在城市</text>
                <div class="input box-flex text-right center" @click="pickLocationShow">
                  <text class="location-text">{{locationInfo.province && locationInfo.province.text}}  {{locationInfo.city && locationInfo.city.text}}  {{locationInfo.county && locationInfo.county.text}}</text>
                </div>
                <text class="icon" :style="{fontFamily:'icon', fontSize:'28px', transform: 'translateX(4px)'}">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">身份证</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入身份证"  @input="editInfo($event,'id_no')" ref="box4" />
            </div>
            <div class="form-box flex">
                <text class="label">卖车手机号</text>
                <input class="input box-flex text-right ml" type="tel" placeholder="请输入卖车手机号"  @input="editInfo($event,'mobile')" ref="box5" />
            </div>
            <div class="form-box form-box-small flex">
                <text class="label">微信</text>
                <input v-if="!switchType" class="input box-flex text-right ml" type="text" @input="editInfo($event,'wechat_id ')" :value="submitData.wechat_id" :placeholder="switchType ? submitData.wechat_id  : '请输入微信'" ref="box6" />
                <div v-else class="input box-flex text-right ml center">
                  <text :class="[!submitData.wechat_id ? 'placeholder' : '']">{{submitData.wechat_id ? submitData.wechat_id : '请输入微信'}}</text>
                </div>
                <text class="text-right ml">同号</text>
                <switch class="switch ml" @change="switchChange"></switch>
            </div>
            <div class="form-box form-box-small flex">
                <text class="label">验证码</text>
                <input class="input box-flex text-right ml" type="tel" placeholder="请输入验证码"  @input="editInfo($event,'captcha')" ref="box7" />
                <div :class="['code-btn','radius','ml', codeActive ? '' : 'code-active']" @click="getCode">
                    <text class="code-btn-text">{{codeActive ? '获取验证码' : codeNumber + '秒后重新获取'}}</text>
                </div>
            </div>
        </div>
        <div class="form-box-con upload-label-con">
            <div class="flex" :style="{marginBottom:'30px'}">
                <div class="box-flex">
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
            </div>
            <div class="flex" :style="{marginBottom:'30px'}">
                <div class="box-flex">
                    <div class="upload-label box-flex">
                        <text class="icon" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe6cc;</text>
                    </div>
                    <text class="upload-text">本人持身份证照</text>
                </div>
                <div class="box-flex ml">
                    <div class="upload-label box-flex">
                        <text class="icon" :style="{fontFamily:'icon',fontSize:'100px'}">&#xe626;</text>
                    </div>
                    <text class="upload-text">上传营业执照照片</text>
                </div>
            </div>
            <text class="tips">注：营业执照的经营者应与商家申请人的身份证保持一致</text>
        </div>
        <div class="terms-of-service flex-center">
            <div class="service-con flex-center">
                <div class="flex" :style="{marginBottom:'10px'}">
                    <text class="agree" :class="['agree-' + agreeActive]" :style="{fontFamily:'icon', fontSize:'24px'}" @click="agree">&#xe68b;</text>
                    <text class="service-text" :style="{marginLeft: '10px'}" @click="agree">请阅读并同意</text>
                    <text :style="{color: '#d22425', fontSize: '24px', textDecoration: 'underline'}" @click="toggleAgree">《服务条款》</text>
                </div>
                <div class="tel-phone"><text class="service-text">客服电话：400-819-7168</text></div>
            </div>
        </div>
        <div class="submit-con">
            <div class="box-flex flex-center submit-btn radius" :class="['submit-btn-' + submitActive]" @click="submit">
                <text class="submit-btn-text">提交申请</text>
            </div>
        </div>
        <div class="fixed-con" :class="['fixed-con-' + clauseActive]" @click="toggleAgree"></div>
        <div class="clause-con" :class="['clause-con-' + clauseActive]">
            <div class="clause-title flex-center"><text>阅读服务条款</text></div>
            <div class="clause-text">
                <clauseText></clauseText>
            </div>
            <div class="clause-close-btn flex-center" @click="toggleAgree"><text>关闭</text></div>
        </div>
    </scroller>
    <!-- sidebar弹出层 -->
    <div :class="['shade',shadeShow ? 'shade-visible' : '']" ref="shadeShow" @click="sidebarHide"></div>
    <div class="sidebar" ref="sidebar">
        <div class="title">
            <div class="title-name">
                <text class="title-name-text">商家类型</text>
            </div>
            <div class="back" @click="sidebarHide">
                <text class="back-text" :style="{fontFamily:'icon',fontSize:'36px',color:'#cbd6ec'}">&#xe60d;</text>
            </div>
        </div>
        <div class="sidebar-content">
            <scroller style="flex:1">
                <div class="model">
                    <div class="model-list" v-for="item in shopData" @click="clickSidebar(item)">
                        <text :class="['model-list-text',submitData.merchant_type == item.id ? 'font-visible' : '']">{{item.name}}</text>
                        <text v-if="submitData.merchant_type == item.id" :style="{fontFamily:'icon',fontSize:'36px',color:'#f60',marginRight:'20px'}">&#xe691;</text>
                    </div>
                </div>
            </scroller>
        </div>
    </div>
    <pick-location :pickShow="pickShow" @pickLocationShow="pickLocationShow" @submitLocation="submitLocation"></pick-location>
</div>
</template>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)
const animation = weex.requireModule('animation')
const picker = weex.requireModule('picker')
const storage = weex.requireModule('storage')

import MyGoback from '../components/my/MyGoback.vue'
import clauseText from '../components/clauseText.vue'
import pickLocation from '../components/pickLocation.vue'

export default {
    data (){
        return {
            toKen:'',
            switchType: false,
            wechat: '',
            codeText: '获取验证码',
            timer: null,
            code:'',
            //是否可以请求code
            clickCode:true,
            //获取验证码按钮状态
            codeActive: true,
            //验证码倒计时
            codeNumber: 5,
            submitActive: true,
            agreeActive: true,
            clauseActive: true,

            //遮罩层
            shadeShow:false,
            //是否显示sidebar
            sidebarPop:false,
            // 商家类型数据
            shopData:[
                {
                    id:'1',
                    name:'经销商'
                },
                {
                    id:'2',
                    name:'4s店'
                },
                {
                    id:'3',
                    name:'货运公司'
                },
                {
                    id:'4',
                    name:'其他'
                },
            ],
            shopInfo:{},
            //总提交数据
            submitData:{
                merchant_type : '',
                company_name : '',
                licence_expiry : '',
                licence : '',
                company_address : '',
                id_face_photo : '',
                id_back_photo : '',
                id_person_photo : '',
                licence_photo : '',
                province_no : '',
                city_no : '',
                area_no : '',
                realname : '',
                id_no : '',
                mobile : '',
                wechat_id : '',
                captcha : '',
            },
            //是否显示选择地区
            pickShow:false,
            //选择的地区详细数据
            locationInfo:{},
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
        // 服务条款
        agree (){
            this.submitActive = this.agreeActive = this.agreeActive == 'active' ? true : 'active';
        },
        // 打开服务条款
        toggleAgree (){
            this.clauseActive = this.clauseActive == 'active' ? true : 'active';
        },
        // 提交
        submit (){
            if (this.submitActive == 'active'){
                return false;
            }
            this.submitActive = 'active';
            // 提交
            // ajax
        },
        sidebarShow(){
            this.shadeShow = true
            let sidebar = this.$refs.sidebar
            animation.transition(sidebar,{
                styles:{
                    transform: 'translateX(0)',
                    opacity: 1
                },
                duration:300,
                timingFunction: 'ease-in-out',
                needLayout:false,
                delay:0,
            })
        },
        sidebarHide(){
            let sidebar = this.$refs.sidebar
            animation.transition(sidebar,{
                styles:{
                    transform: 'translateX(750px)',
                    opacity: 1
                },
                duration:300,
                timingFunction: 'ease-in-out',
                needLayout:false,
                delay:0,
            },() => {
                this.shadeShow = false
            })
        },
        clickSidebar(item){
            //店铺详细信息
            this.shopInfo = item
            //最终提交店铺id
            this.submitData.merchant_type = item.id
            this.sidebarHide();
        },
        //选择时间
        selectTime(){
            picker.pickDate({
                value:'',
                max:'',
                min:'',
            },ele => {
                if(ele.result == 'success'){
                    this.submitData.licence_expiry = ele.data
                }
            })
        },
        //输入信息
        editInfo(event,type){
            this.submitData[type] = event.value

            //如果是微信同号
            if(this.switchType && type == 'mobile'){
                this.submitData.wechat_id = event.value
            }
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
    },
    components: {
        clauseText,
        MyGoback,
        pickLocation
    }
}
</script>

<style scoped>

/*遮罩层*/
.shade{
  position:fixed;
  right:0;
  bottom:0;
  top:0;
  background-color:rgba(0,0,0,.4);
}
.shade-visible{
    left:0;
}
.sidebar{position:fixed;left:150px;top:0;right:0;bottom:0;background-color:#fff;opacity:0;transform: translateX(750px);}
.title{position: relative;height:90px;}
.back{position: absolute;left:0;top:0;height:90px;width:80px;justify-content: center;align-items: center;}
.title-name{height:90px;justify-content: center;align-items: center;}
.sidebar-content{position:relative;flex:1;background-color: #efeff4}
.model{margin-top: 30px;padding-left:20px;background-color:#fff;}
.model-list{height:80px;flex-direction: row;align-items: center;justify-content: space-between;border-bottom-width: 1px;border-bottom-color: #eee;border-bottom-style: solid;}
.model-list-text{font-size:28px;}
.font-visible{color:#ee6e47;}


.container{
    padding-bottom: 160px;
    flex: 1;
    background-color: #efeff4;
    padding-top:30px;
}
.flex{
    flex-direction: row;
}
.box-flex{
    flex: 1;
}
.flex-center{
    align-items: center;
    justify-content: center;
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
    padding-top: 24px;
    padding-right:20px;
    padding-bottom:24px;
    margin-left: 20px;
    background-color: #fff;
}
.form-box-small{
    padding-top: 20px;
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
    padding-top: 15px;
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
    padding-top: 30px;
    padding-right:20px;
    padding-bottom:30px;
    padding-left:20px;
}
.upload-label{
    height: 220px;
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
/*提示语*/
.tips{
    padding-left: 20px;
    padding-right: 20px;
    font-size: 24px;
    text-align: center;
    color: #d84b4b;
}
.terms-of-service{
    padding-top: 30px;
}
.service-text{
    font-size: 24px;
    color: #96a6c5;
}
.agree{
    color: #17a915;
}
.agree-active{
    color: #ccc;
}
/*提交按钮*/
.submit-con{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 128px;
    padding-top: 20px;
    padding-right:20px;
    padding-bottom:20px;
    padding-left:20px;
    background-color: #fff;
}
.submit-btn{
    background-color: #ee6e47;
}
.submit-btn-text{
    color: #ffffff;
}
.submit-btn-active{
    background-color: #ccc;
}
/*服务条款*/
.fixed-con{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
    opacity: 0;
    visibility: hidden;
}
.fixed-con-active{
    opacity: 1;
    visibility: visible;
}
.clause-con{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 600px;
    transform: translateY(600px);
}
.clause-con-active{
    transform: translateY(0px);
}
.clause-close-btn,
.clause-title{
    text-align: center;
    height: 80px;
    background-color: #fff;
}
.clause-text{
    height: 440px;
}
.center{
  justify-content: center;
  align-items: flex-end;
}
.placeholder{
  color:#999;
}
</style>