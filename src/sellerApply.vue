<template>
    <scroller class="container">
        <div class="form-box-con" :style="{marginBottom:'30px'}">
            <div class="form-box flex">
                <text class="label">商家类型</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="{fontFamily:'icon', fontSize:'28px', transform: 'translateX(4px)'}">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">公司名称</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入公司名称" />
            </div>
            <div class="form-box flex">
                <text class="label">有效期至</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="{fontFamily:'icon', fontSize:'28px', transform: 'translateX(4px)'}">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">注册号</text>
                <input class="input box-flex text-right ml" type="tel" placeholder="请输入注册号" />
            </div>
            <div class="form-box flex">
                <text class="label">公司名称</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入公司名称" />
            </div>
        </div>
        <div class="form-box-con" :style="{marginBottom:'30px'}">
            <div class="form-box flex">
                <text class="label">姓名</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入姓名" />
            </div>
            <div class="form-box flex">
                <text class="label">所在城市</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="{fontFamily:'icon', fontSize:'28px', transform: 'translateX(4px)'}">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">身份证</text>
                <input class="input box-flex text-right ml" type="text" placeholder="请输入身份证" />
            </div>
            <div class="form-box flex">
                <text class="label">卖车手机号</text>
                <input class="input box-flex text-right ml" type="tel" @input="mobileChange" placeholder="请输入卖车手机号" />
            </div>
            <div class="form-box form-box-small flex">
                <text class="label">微信</text>
                <input :disabled="switchType" class="input box-flex text-right ml" type="text" :placeholder="switchType ? wechat : '请输入微信'" />
                <text class="text-right ml">同号</text>
                <switch class="switch ml" @change="switchChange"></switch>
            </div>
            <div class="form-box form-box-small flex">
                <text class="label">验证码</text>
                <input class="input box-flex text-right ml" type="tel" placeholder="请输入验证码" />
                <div class="code-btn radius ml" :class="['code-' + codeActive]" @click="code">
                    <text class="code-btn-text">{{codeText}}</text>
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
</template>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)

import clauseText from '../components/clauseText.vue'

export default {
    data (){
        return {
            switchType: false,
            wechat: '',
            codeText: '获取验证码',
            timer: null,
            time: 90,
            codeActive: true,
            submitActive: true,
            agreeActive: true,
            clauseActive: true
        }
    },
    methods: {
        // 微信同号按钮
        switchChange (event){
            this.switchType = event.value;
        },
        // 手机号输入同步至微信
        mobileChange (event){
            this.wechat = event.value;
        },
        code (){
            // ajax
            this.codeActive != 'active' && this.codeInterval();
        },
        // 倒计时
        codeInterval (){
            this.codeActive = 'active';
            this.timer = setInterval(() => {
                this.time < 1 ? 
                (this.time = 90, clearInterval(this.timer), this.codeActive = true, this.codeText = '获取验证码') : 
                (this.time--, this.codeText = `${this.time}秒后重新获取`);
            }, 1000)
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
        }
    },
    components: {
        clauseText
    }
}
</script>       

<style scoped>
.container{
    padding-bottom: 160px;
    flex: 1;
    background-color: #efeff4;
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
    padding: 24px 20px 24px 0;
    margin-left: 20px;
    background-color: #fff;
}
.form-box-small{
    padding: 20px 20px 20px 0;
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
    padding: 15px 10px;
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
    padding: 30px 20px;
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
    padding: 0 20px;
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
    padding: 20px;
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
</style>