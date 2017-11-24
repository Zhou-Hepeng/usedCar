<template>
    <scroller class="container">
        <div class="form-box-con">
            <text class="form-title">图片上传（照片清晰详细可获得更好的展示）</text>
            <div class="upload-label-con flex">
                <div class="upload-label" v-for="image in images" :key="image.id">
                    <image class="upload-image" :src="image.src"></image>
                </div>
            </div>
            <text class="form-title">车辆基本信息</text>
            <div class="form-box flex"> 
                <text class="label">标题</text>
                <input
                	class="input box-flex text-right ml"
                	type="text"
                	placeholder="请输入标题"
                	ref="title"
                	@input="inputData($event, 'title')"
                	@focus="inputFocus('title')"
                />
            </div>
            <div class="form-box flex" @click="toggleFixed(true, 'cat_id')">
                <text class="label">选择车型分类</text>
                <text class="input box-flex text-right">{{cat_id_name}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <div class="form-box flex" @click="toggleFixed(true, 'brand_id')">
                <text class="label">选择品牌</text>
                <text class="input box-flex text-right">{{brand_id_name}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <div class="form-box flex" @click="toggleFixed(true, 'series_id')">
                <text class="label">选择车系</text>
                <text class="input box-flex text-right">{{series_id_name}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">车辆所在地</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <div class="form-box flex">
                <text class="label">表显里程</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入表显里程"
                	ref="mileage"
                	@input="inputData($event, 'mileage')"
                	@focus="inputFocus('mileage')"
                />
                <text class="label"> 万公里</text>
            </div>
            <div class="form-box flex">
                <text class="label">全款价格</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入全款价格"
                	ref="price"
                	@input="inputData($event, 'price')"
                	@focus="inputFocus('price')"
                />
                <text class="label"> 万元</text>
            </div>
            <div class="form-box form-box-small flex">
                <text class="label">是否支持分期</text>
                <input  
                    :disabled="!switchType"
                    class="input box-flex text-right ml"
                    type="tel"
                    ref="down_payment"
                    :value="switchType ? 0 : ''"
                    :placeholder="!switchType ? '' : '请输入首付价格'"
                    @input="inputData($event, 'down_payment')"
                    @focus="inputSet('down_payment', 0, 1)"
                />
                <text class="label">{{switchType ? ' 万元' : ''}}</text>
                <switch class="switch ml" @change="switchChange"></switch>
            </div>
            <div class="form-box flex">
                <text class="label">上牌时间</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <div class="form-box flex no-border">
                <text class="label">交强险过期时间</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <text class="form-title" v-if="truckType.length > 0">车辆主要参数</text>
            <!-- attr_1 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_1') !== -1" @click="toggleFixed(true)">
                <text class="label">发动机品牌</text>
                <text class="input box-flex text-right">{{formData.attr_1}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_2 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_2') !== -1" @click="toggleFixed(true, 'attr_2')">
                <text class="label">排放标准</text>
                <text class="input box-flex text-right">{{formData.attr_2}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_3 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_3') !== -1" @click="toggleFixed(true, 'attr_3')">
                <text class="label">变速箱档位</text>
                <text class="input box-flex text-right">{{formData.attr_3}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_4 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_4') !== -1" @click="toggleFixed(true, 'attr_4')">
                <text class="label">驱动形式</text>
                <text class="input box-flex text-right">{{formData.attr_4}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_5 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_5') !== -1">
                <text class="label">准牵引总重量</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入准牵引总重量"
                	ref="attr_5"
                	@input="inputData($event, 'attr_5')"
                	@focus="inputFocus('attr_5')"
                />
                <text class="label"> 吨</text>
            </div>
            <!-- attr_6 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_6') !== -1">
                <text class="label">马力</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入马力"
                	ref="attr_6"
                	@input="inputData($event, 'attr_6')"
                	@focus="inputFocus('attr_6')"
                />
                <text class="label"> 马力</text>
            </div>
            <!-- attr_7 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_7') !== -1">
                <text class="label">货箱长度</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入货箱长度"
                	ref="attr_7"
                	@input="inputData($event, 'attr_7')"
                	@focus="inputFocus('attr_7')"
                />
                <text class="label"> 米</text>
            </div>
            <!-- attr_8 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_8') !== -1">
                <text class="label">准载质量</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入准载质量"
                	ref="attr_8"
                	@input="inputData($event, 'attr_8')"
                	@focus="inputFocus('attr_8')"
                />
                <text class="label"> 吨</text>
            </div>
            <!-- attr_9 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_9') !== -1">
                <text class="label">自重</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入自重"
                	ref="attr_9"
                	@input="inputData($event, 'attr_9')"
                	@focus="inputFocus('attr_9')"
                />
                <text class="label"> 吨</text>
            </div>
            <!-- attr_10 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_10') !== -1" @click="toggleFixed(true, 'attr_10')">
                <text class="label">后桥速比</text>
                <text class="input box-flex text-right">{{formData.attr_10}}</text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_11 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_11') !== -1" @click="toggleFixed(true, 'attr_11')">
                <text class="label">挂车型号</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_12 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_12') !== -1" @click="toggleFixed(true, 'attr_12')">
                <text class="label">轴数</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_13 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_13') !== -1" @click="toggleFixed(true, 'attr_13')">
                <text class="label">悬挂形式</text>
                <text class="input box-flex text-right"></text>
                <text class="icon" :style="iconSize">&#xe604;</text>
            </div>
            <!-- attr_14 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_14') !== -1">
                <text class="label">上装品牌</text>
                <input
                	class="input box-flex text-right ml"
                	type="text"
                	placeholder="请输入上装品牌"
                	ref="attr_14"
                	@input="inputData($event, 'attr_14')"
                	@focus="inputFocus('attr_14')"
                />
            </div>
            <!-- attr_15 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_15') !== -1">
                <text class="label">减速机品牌</text>
                <input
                	class="input box-flex text-right ml"
                	type="text"
                	placeholder="请输入减速机品牌"
                	ref="attr_15"
                	@input="inputData($event, 'attr_15')"
                	@focus="inputFocus('attr_15')"
                />
            </div>
            <!-- attr_16 -->
            <div class="form-box flex" v-if="truckType.indexOf('attr_16') !== -1">
                <text class="label">方量</text>
                <input
                	class="input box-flex text-right ml"
                	type="tel"
                	placeholder="请输入方量"
                	ref="attr_16"
                	@input="inputData($event, 'attr_16')"
                	@focus="inputFocus('attr_16')"
                />
                <text class="label"> m³</text>
            </div>
            <text class="form-title">其他</text>
            <div class="form-box flex">
                <text class="label">卖家附言</text>
                <input
                	class="input box-flex text-right ml"
                	type="text"
                	placeholder="请输入附言"
                	ref="introduction"
                	@input="inputData($event, 'introduction')"
                	@focus="inputFocus('introduction')"
                />
            </div>
        </div>
        <div class="submit-con">
            <div class="box-flex flex-center submit-btn radius" :class="['submit-btn-' + submitActive]" @click="submit">
                <text class="submit-btn-text">发布</text>
            </div>
        </div>
        <text>{{formData}}</text>
        <div class="fixed-con" ref="fixedCon" @click="toggleFixed(false)"></div>
        <scroller class="right-option" ref="rightOption">
            <div :style="{opacity: optionOpactiy}">
                <!-- 双循环 -->
                <div v-if="options.letter">
                    <div v-for="option in options.data" :key="option.id">
                        <text class="form-title">{{option.index}}</text>
                        <div class="right-option-type" v-for="item in option.data" :key="item.id" @click="optionTypes(item.id, item.name, item.next)">
                            <text>{{item.name}}</text>
                        </div>
                    </div>
                </div>
                <!-- 单循环 -->
                <div v-else>
                    <div class="right-option-type" v-for="option in options.data" :key="option.id" @click="optionTypes(option.id, option.name, option.next)">
                        <text>{{option.name}}</text>
                    </div>
                </div>
            </div>
        </scroller>
    </scroller>
</template>

<script>
const animation = weex.requireModule('animation')
const modal = weex.requireModule('modal')

import mixins from '../mixins/mixins'
Vue.mixin(mixins)

import { truckTypeList } from '../mixins/publish'

export default {
    data (){
        return {
            // 字体样式
            iconSize: {fontFamily:'icon', fontSize:'28px', transform: 'translate(4px, 2px)'},
            // 分期按钮
            switchType: false,
            // 提交状态 'active' 为提交，按钮会变灰
            submitActive: true,
            // 车辆主要参数
            truckType: [],
            // 上传的图片
            images: [{
                src: 'https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg'
            },{
                src: 'https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg'
            },{
                src: 'https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg'
            },{
                src: 'https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg'
            },{
                src: 'https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg'
            }],
            // input选中，用来处理右弹软键盘不隐藏
            inputType: null,
            // 右边弹出样式
            optionOpactiy: 0,
            // 右边弹出类型
            optionType: null,
            // 右边弹出选项
            options: {
                data: null,
                letter: false
            },
            // 文字显示
            cat_id_name: null,
            brand_id_name: null,
            series_id_name: null,
            // 提交表单
            formData: {
                photos: [], // 图片数组
                title: null, // 标题
                cat_id: null, // 车型
                brand_id: null, // 品牌
                series_id: null, // 车系
                // product_id: null, // 型号
                trad_prov_no: null, // 车辆城市
                trad_city_no: null, // 车辆省份
                mileage: null, // 表显里程
                // years: null, // 年限
                price: null, // 拍卖售价
                pay_instalments: 'nonsupport', // 是否分期
                down_payment: null, // 分期数值
                reg_date: null, // 上牌时间
                compulsory_expiry: null, // 交强险
                // vin: null, // VIN
                attr_1: null, // 发动机品牌
                attr_2: null, // 排放标准
                attr_3: null, // 变速箱档位
                attr_4: null, // 驱动形式
                attr_5: null, // 准牵引总重量
                attr_6: null, // 马力
                attr_7: null, // 货箱长度
                attr_8: null, // 准载质量
                attr_9: null, // 自重
                attr_10: null, // 后桥速比
                attr_11: null, // 挂车型号
                attr_12: null, // 轴数
                attr_13: null, // 悬挂形式
                attr_14: null, // 上装品牌
                attr_15: null, // 减速机品牌
                attr_16: null, // 方量
                seller: null, // 姓名
                mobile: null, // 手机号
                introduction: null // 附言
            },
            // 请求地址
            api: {
                truckUrl: '/forward?api=https%3a%2f%2fproduct.360che.com%2findex.php&r=api/'
            },
            // 请求id
            ajaxId: {
                subId: null,
                brandId: null
            },
            ajaxIng: false
        }
    },
    methods: {
        toast (text){
            modal.toast({
                message: text,
                duration: .2
            })
        },
        // 是否分期按钮
        switchChange (event){
            this.switchType = event.value;
            // 赋值
            this.formData.down_payment = null;
            this.formData['pay_instalments'] = this.switchType ? 'support' : 'nonsupport';
        },
        // 提交
        submit (){
            if (this.submitActive == 'active') {
                return false;
            }
            this.submitActive = 'active';
            // 提交
            // ajax
        },
        // 右边弹出
        toggleFixed (active, type){
            if(active){
                this.optionType = type;
                this.inputType && this.$refs[this.inputType].blur();
                this.options.letter = false;
                if(truckTypeList[this.optionType]){
                    this.optionType == 'brand_id' && (this.options.letter = true);
                    this.options.data = truckTypeList[this.optionType];
                }else{
                    if (this.optionType == 'brand_id') {
                        this.optionType = 'cat_id';
                        if (!this.formData[this.optionType]) {
                            this.toast('请选择车型');
                            return false;
                        }
                    }else if (this.optionType == 'series_id') {
                        this.optionType = 'brand_id';
                        if (!this.formData[this.optionType]) {
                            this.toast('请选择品牌');
                            return false;
                        }
                    }
                    this.optionTypeAjax();
                }
                this.$nextTick(() => {
                    this.optionOpactiy = 1;
                })
                this.animations({
                    ref: this.$refs.rightOption,
                    styles: {
                        transform: `translateX(-600px)`,
                        opacity: 1
                    }
                })
                this.animations({
                    ref: this.$refs.fixedCon,
                    styles: {
                        opacity: 1
                    }
                })
            }else{
                this.optionOpactiy = 0;
                this.optionType = null;
                this.animations({
                    ref: this.$refs.rightOption,
                    styles: {
                        transform: `translateX(600px)`,
                        opacity: 0
                    }
                })
                this.animations({
                    ref: this.$refs.fixedCon,
                    styles: {
                        opacity: 0
                    }
                })
            }
        },
        // 车辆主要参数操作赋值
        optionTypes (id, name, next){
            // 车型匹配底部信息分类
            if (this.optionType == 'cat_id') {
                (this.truckType = truckTypeList[this.optionType][`c${id}`].type);
                for (let i = 1; i < 16; i++) {
                    this.formData[`attr_${i}`] = null;
                }
            }
            // 文字或ID
            if(this.optionType == 'cat_id' || this.optionType == 'brand_id' || this.optionType == 'series_id'){
                this.formData[this.optionType] = id;
                this[`${this.optionType}_name`] = name;
            }else{
                this.formData[this.optionType] = id;
            }
            // 是否关闭弹层
            if (!next) {
                this.toggleFixed(false);
            }else{
                if (this.optionType == 'cat_id') {
                    this.ajaxId.subId = id;
                    this.formData['brand_id'] = null;
                    this['brand_id_name'] = '';
                    this.formData['series_id'] = null;
                    this['series_id_name'] = '';
                }
                if (this.optionType == 'brand_id') {
                    this.ajaxId.brandId = id;
                    this.formData['series_id'] = null;
                    this['series_id_name'] = '';
                }
                this.optionTypeAjax();
            }
        },
        // 数据请求
        optionTypeAjax (){
            // this.loadingShow()
            if (this.ajaxIng) {
                this.toast('正在请求...');
                return false;
            }
            // 品牌请求
            if (this.optionType == 'cat_id') {
                this.ajaxIng = true;
                this.getData(`/weex/brand?subId=${this.ajaxId.subId}`, data => {
                    if (data.ok) {
                        let list = {};
                        let listData = data.data.data;
                        for(let i = 0; i < listData.location.length; i++){
                            list[i] = {
                                index: listData.indexNav[i],
                                data: []
                            }
                            for(let j in listData.location[i]){
                                list[i]['data'].push({
                                    id: listData.location[i][j].F_BrandId,
                                    name: listData.location[i][j].F_BrandName,
                                    next: true
                                })
                            }
                        }
                        this.options.letter = true;
                        this.options.data = list;
                        this.optionType = 'brand_id';
                        // 存储一波请求数据
                        truckTypeList[this.optionType] = list;
                        // 置空下一级
                        truckTypeList['series_id'] = null;
                        // this.loadingHide()
                        this.$nextTick(() => {
                            this.ajaxIng = false;
                        })
                    }
                });
            }
            // 车系请求
            if (this.optionType == 'brand_id') {
                this.ajaxIng = true;
                this.getData(`${this.api.truckUrl}getproductdataforershouche&subId=${this.ajaxId.subId}&brandId=${this.ajaxId.brandId}`, data => {
                    if (data.ok) {
                        let list = [];
                        if (!data.data) {
                            this.toast('该品牌暂无数据');
                            this.ajaxIng = false;
                            return false;
                        }
                        let listData = data.data.data.list;
                        for(let i = 0; i < listData.length; i++){
                            list.push({
                                id: listData[i].F_SeriesId,
                                name: listData[i].F_SeriesName + " " + listData[i].F_SubCategoryName
                            })
                        }
                        this.options.letter = false;
                        this.options.data = list;
                        this.optionType = 'series_id';
                        // 存储一波
                        truckTypeList[this.optionType] = list;
                        // this.loadingHide()
                        this.$nextTick(() => {
                            this.ajaxIng = false;
                        })
                    }
                }, 'jsonp');
            }
        },
        // 输入框赋值
        inputData (event, key){
            this.formData[key] = event.value;
        },
        inputFocus (key){
            this.inputType = key;
        },
        // input选择
        inputSet (id, start, end){
            this.$refs[id].setSelectionRange(start, end);
        },
        // 动画
        animations (obj) {
            animation.transition(obj.ref, {
                styles: obj.styles,
                duration: 300, //ms
                timingFunction: 'ease-in-out',
                needLayout: false,
                delay: 0 //ms
            })
        }
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
    height: 46px;
    line-height: 46px;
}
.upload-label-con{
    padding: 20px 10px 0;
    flex-wrap: wrap;
}
.upload-label{
    width: 162px;
    height: 120px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    border-width: 1px;
    border-color: #dfdfdf;
    border-style: solid;
}
.upload-image{
    width: 160px;
    height: 118px;
}
.form-box-con{
    background-color: #fff;
}
.form-title{
    padding: 26px 20px 18px;
    color: #666666;
    background-color: #efeff4;
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
.no-border{
    border-bottom-width: 0;
    border-bottom-color: #dfdfdf;
    border-bottom-style: solid;
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
.fixed-con{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
    opacity: 0;
}
.right-option{
    position: fixed;
    width: 600px;
    right: -600px;
    top: 0;
    bottom: 0;
    background-color: #fff;
}
.right-option-type{
    padding: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #dfdfdf;
    border-bottom-style: solid;
}
</style>