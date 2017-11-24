<template>
    <scroller class="container">
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
        <div class="form-box-con upload-label-con flex">
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
</template>

<script>
import mixins from '../mixins/mixins'
Vue.mixin(mixins)

export default {
    data (){
        return {
            switchType: false,
            wechat: '',
            codeText: '获取验证码',
            timer: null,
            time: 90,
            codeActive: true,
            submitActive: true
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
        // 提交
        submit (){
            if (this.submitActive == 'active'){
                return false;
            }
            this.submitActive = 'active';
            // 提交
        }
    }
}
</script>

<style scoped>
.container{
    flex: 1;
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
    padding: 20px;
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