<template>
  <div class="personal">
    <my-goback :title="title"></my-goback>
    <div class="form-data">
      <div class="list-li">
        <div class="must-input">
          <text class="li-title">所在城市</text>
          <text class="must">*</text>
        </div>
        <div class="list-content">
          <text class="li-to-store">选择所在城市</text>
          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe60d;</text>
        </div>
      </div>
      <div class="list-li">
        <text class="list-line"></text>
        <div class="must-input">
          <text class="li-title">卖车手机号</text>
          <text class="must">*</text>
        </div>
        <input class="phone" :value="inputTel" type="tel" placeholder="请输入手机号" maxlength="11" @input="telPhone" />
      </div>
      <div class="list-li">
        <text class="list-line"></text>
        <text class="li-title">微信</text>
        <input class="wx" type="text" placeholder="非同号请输入" />
        <div class="wx-selected" @click="selectRadio">
          <text class="wx-same">同号</text>
          <div class="wx-radio" :class="[radioSelect]">
            <text class="select-radio" v-if="selected" :style="{fontFamily:'icon',fontSize:'28px'}">&#xe691;</text>
          </div>
        </div>
      </div>
      <div class="list-li">
        <text class="list-line"></text>
        <div class="must-input">
          <text class="li-title">验证码</text>
          <text class="must">*</text>
          <input class="input-code" :value="inputCode" type="number" placeholder="请输入验证码" @input="codeInput" />
        </div>
        <div class="code-btn" @click="getCodes">
          <text class="code-text">{{time | change}}</text>
        </div>
        <div class="form-apply">
          <div class="form-apply-btn" @click="applyForm">
            <text class="form-submit-text">提交申请</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyGoback from '../components/my/MyGoback.vue';

import mixins from '../mixins/mixins'
Vue.mixin(mixins)

let flag = false
export default {
	components: {
		MyGoback
	},
	data: () => ({
		title: '个人资料',
		selected: false,
		inputTel: '',
		inputCode: '',
    startGetCode: false,
    time: '获取验证码'
	}),
	computed: {
		radioSelect() {
			return this.selected ? 'wx-selected-radio' : '';
		}
	},
	methods: {
		selectRadio() {
			this.selected = !this.selected;
		},
		telPhone(e) {
			console.log(e);
			this.inputTel = e.value;
		},
		codeInput(e) {
			console.log(e);
			this.inputCode = e.value;
		},
		getCodes() {
			let c = this.inputTel;
			var phoneNums = c.match(
				/1(([38]\d)|(4[57])|(5[012356789])|(7[0135678]))\d{8}/g
			); // 验证电话
			if (phoneNums) {
				console.log('手机号码验证通过，获取验证码');
        if (this.startGetCode) return
        this.time = 60
        let time = setInterval(() => {
          this.time--
          if (this.time === 0) {
            this.time = '重新获取'
            flag = true
            this.startGetCode = false
            clearInterval(time)
          }
        }, 100)
        this.startGetCode = true
			} else {
				console.log('请输入正确手机号');
			}
		},
    applyForm () {
      console.log('提交申请')
    }
	},
  filters: {
    change(value) {
      // value为time值
      if (!value) return ''
      if (!isNaN(value)) {
        // 检测是否 是数字值
        if (flag) {
          return `重新发送${value}S`
        }
        return value + 'S'
      } else {
        return value
      }
    }
  }
};
</script>
<style scoped>
  .personal{
    background-color:#efeff4;
  }
  .form-data{
    margin-top: 24px;
  }
  .list-li{
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 88px;
    background-color: #fff;
  }
  .list-content{
    width: 200px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .li-to-store{
    margin-right: 8px;
    font-size: 28px;
  }
  .must-input{
    flex-direction: row;
    align-items: center;
  }
  .must{
    color: #d22425;
    height: 24px;
    font-size: 24px;
  }
  .li-title{
    font-size: 28px;
    flex: 1;
  }
  .li-arrow{
    font-family: 'icon';
    font-size: 28px;
    color: #96a6c5;
    transform: rotate(180deg)
  }
  .list-line{
    position: absolute;
    left: 30px;
    top: 0;
    width: 720px;
    height: 2px;
    background-color: #eee;
  }
  .phone{
    font-size: 28px;
    height: 88px;
    flex: 1;
    text-align: right;
  }
  .wx,.input-code{
    margin-right: 20px;
    width: 300px;
    text-align: right;
    font-size: 28px;
    height: 88px;
  }
  .wx-selected{
    flex-direction: row;
    align-items: center;
  }
  .wx-same{
    font-size: 28px;
  }
  .wx-radio{
    width: 44px;
    height: 44px;
    margin-left: 10px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-style: solid;
    border-width: 2px;
    border-color: #dfdfdf;
  }
  .wx-selected-radio{
    background-color: #ee6e47;
    border-color: #ee6e47;
  }
  .select-radio{
    font-family: 'icon';
    font-size: 24px;
    width: 44px;
    height: 44px;
    line-height: 40px;
    margin-left: -2px;
    color: #fff;
    z-index: 2;
  }
  .code-btn{
    width: 232px;
    height: 60px;
    padding: 8px 20px;
    color: #fff;
    background-color: #09bb07;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .code-text{
    font-size: 24px;
    text-align: center;
    line-height: 44px;
    color: #fff;
  }
  .form-apply{
    position: fixed;
    bottom: 0;
    left: 0;
    height:108px;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 5;
    box-shadow: 0 0 2px #ccc;
  }
  .form-apply-btn{
    width: 690px;
    height: 88px;
    justify-content: center;
    align-items: center;
    background-color: #ee6e47;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;

  }
  .form-submit-text{
    font-size: 32px;
    color: #fff;
  }
</style>
