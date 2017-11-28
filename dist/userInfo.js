// { "framework": "Vue"} 

!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=103)}({0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("modal"),n=weex.requireModule("dom"),s=weex.requireModule("THAW"),r=weex.requireModule("navigator"),a=weex.requireModule("stream"),l=(weex.requireModule("animation"),weex.requireModule("storage")),c=weex.requireModule("picker");e.default={methods:{alert:function(t){o.alert({message:JSON.stringify(t)})},showConfirm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),o.confirm({message:e,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(e){t(e)})},goUrl:function(t){s&&s.goUrl(t)},goWeexUrl:function(t){r.push({url:"http://192.168.1.186:8080/dist/"+t+".js",animated:"true"},function(){})},goBack:function(){r.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(t,e){return a.fetch({method:"GET",type:"json",url:this.ajaxUrl()+t},e)},postData:function(t,e,i){return a.fetch({method:"POST",url:this.ajaxUrl()+t,type:"json",body:e},i)},loadingShow:function(){s&&s.onShowLoading()},loadingHide:function(){s&&s.onHideLoading()},goTop:function(){var t=this.$refs.goTop;n.scrollToElement(t,{offset:0})},getToKen:function(){var t=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(e){t.alert(e,"eleeleele"),e.ok&&0==e.data.status&&l.setItem("toKen",e.data.data.token)})},goCall:function(t){s&&s.onGoCall(t)},pickLocation:function(){var t=this;c.pick({index:2,items:[1,2,3,4],height:"500px"},function(e){"success"==e.result&&t.alert(e.data)})}},created:function(){}}},1:function(t,e,i){var o,n,s=[];s.push(i(3)),o=i(2);var r=i(4);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-30d00a51",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o},103:function(t,e,i){var o,n,s=[];s.push(i(45)),o=i(43);var r=i(59);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/userInfo.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-11c08070",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o,t.exports.el="true",new Vue(t.exports)},2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},3:function(t,e){t.exports={"go-back":{paddingLeft:10,paddingRight:10,height:90,flexDirection:"row",alignItems:"center",backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee",borderBottomStyle:"solid"},"back-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:120,height:90},"back-arrow":{marginRight:8,fontFamily:"'icon'",fontSize:32,color:"#cbd6ec"},back:{fontSize:28,color:"#666666"},"view-name":{fontSize:32,fontWeight:"500",width:450,textAlign:"center",textOverflow:"ellipsis",WebkitLineClamp:1,overflow:"hidden",lines:1},clear:{width:120,height:90,lineHeight:90,fontSize:28,textAlign:"right"}}},4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["go-back"]},[i("div",{staticClass:["back-btn"],on:{click:function(e){t.goBack()}}},[i("text",{staticClass:["back-arrow"],style:{fontFamily:"icon",fontSize:"32px"}},[t._v("")]),i("text",{staticClass:["back"]},[t._v("返回")])]),i("text",{staticClass:["view-name"]},[t._v(t._s(t.title))]),t.history?i("text",{staticClass:["clear"],on:{click:t.clearItem}},[t._v("清除")]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},43:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=o(n),r=i(0),a=o(r);Vue.mixin(a.default);var l=!1;e.default={components:{MyGoback:s.default},data:function(){return{title:"个人资料",selected:!1,inputTel:"",inputCode:"",startGetCode:!1,time:"获取验证码"}},computed:{radioSelect:function(){return this.selected?"wx-selected-radio":""}},methods:{selectRadio:function(){this.selected=!this.selected},telPhone:function(t){console.log(t),this.inputTel=t.value},codeInput:function(t){console.log(t),this.inputCode=t.value},getCodes:function(){var t=this;if(this.inputTel.match(/1(([38]\d)|(4[57])|(5[012356789])|(7[0135678]))\d{8}/g)){if(console.log("手机号码验证通过，获取验证码"),this.startGetCode)return;this.time=60;var e=setInterval(function(){0==--t.time&&(t.time="重新获取",l=!0,t.startGetCode=!1,clearInterval(e))},100);this.startGetCode=!0}else console.log("请输入正确手机号")},applyForm:function(){console.log("提交申请")}},filters:{change:function(t){return t?isNaN(t)?t:l?"重新发送"+t+"S":t+"S":""}}}},45:function(t,e){t.exports={personal:{backgroundColor:"#efeff4"},"form-data":{marginTop:24},"list-li":{position:"relative",paddingLeft:30,paddingRight:30,flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:88,backgroundColor:"#ffffff"},"list-content":{width:200,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},"li-to-store":{marginRight:8,fontSize:28},"must-input":{flexDirection:"row",alignItems:"center"},must:{color:"#d22425",height:24,fontSize:24},"li-title":{fontSize:28,flex:1},"li-arrow":{fontFamily:"'icon'",fontSize:28,color:"#96a6c5",transform:"rotate(180deg)"},"list-line":{position:"absolute",left:30,top:0,width:720,height:2,backgroundColor:"#eeeeee"},phone:{fontSize:28,height:88,flex:1,textAlign:"right"},wx:{marginRight:20,width:300,textAlign:"right",fontSize:28,height:88},"input-code":{marginRight:20,width:300,textAlign:"right",fontSize:28,height:88},"wx-selected":{flexDirection:"row",alignItems:"center"},"wx-same":{fontSize:28},"wx-radio":{width:44,height:44,marginLeft:10,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomRightRadius:50,borderBottomLeftRadius:50,borderStyle:"solid",borderWidth:2,borderColor:"#dfdfdf"},"wx-selected-radio":{backgroundColor:"#ee6e47",borderColor:"#ee6e47"},"select-radio":{fontFamily:"'icon'",fontSize:24,width:44,height:44,lineHeight:40,marginLeft:-2,color:"#ffffff",zIndex:2},"code-btn":{width:232,height:60,color:"#ffffff",backgroundColor:"#09bb07",borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomRightRadius:8,borderBottomLeftRadius:8},"code-text":{fontSize:24,textAlign:"center",lineHeight:44,color:"#ffffff"},"form-apply":{position:"fixed",bottom:0,left:0,height:108,right:0,justifyContent:"center",alignItems:"center",backgroundColor:"#ffffff",zIndex:5,boxShadow:"0 0 2px #ccc"},"form-apply-btn":{width:690,height:88,justifyContent:"center",alignItems:"center",backgroundColor:"#ee6e47",borderTopLeftRadius:4,borderTopRightRadius:4,borderBottomRightRadius:4,borderBottomLeftRadius:4},"form-submit-text":{fontSize:32,color:"#ffffff"}}},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["personal"]},[i("my-goback",{attrs:{title:t.title}}),i("div",{staticClass:["form-data"]},[i("div",{staticClass:["list-li"]},[t._m(0),i("div",{staticClass:["list-content"]},[i("text",{staticClass:["li-to-store"]},[t._v("选择所在城市")]),i("text",{staticClass:["li-arrow"],style:{fontFamily:"icon",fontSize:"28px"}},[t._v("")])])]),i("div",{staticClass:["list-li"]},[i("text",{staticClass:["list-line"]}),t._m(1),i("input",{staticClass:["phone"],attrs:{value:t.inputTel,type:"tel",placeholder:"请输入手机号",maxlength:"11"},on:{input:t.telPhone}})]),i("div",{staticClass:["list-li"]},[i("text",{staticClass:["list-line"]}),i("text",{staticClass:["li-title"]},[t._v("微信")]),i("input",{staticClass:["wx"],attrs:{type:"text",placeholder:"非同号请输入"}}),i("div",{staticClass:["wx-selected"],on:{click:t.selectRadio}},[i("text",{staticClass:["wx-same"]},[t._v("同号")]),i("div",{staticClass:["wx-radio"],class:[t.radioSelect]},[t.selected?i("text",{staticClass:["select-radio"],style:{fontFamily:"icon",fontSize:"28px"}},[t._v("")]):t._e()])])]),i("div",{staticClass:["list-li"]},[i("text",{staticClass:["list-line"]}),i("div",{staticClass:["must-input"]},[i("text",{staticClass:["li-title"]},[t._v("验证码")]),i("text",{staticClass:["must"]},[t._v("*")]),i("input",{staticClass:["input-code"],attrs:{value:t.inputCode,type:"number",placeholder:"请输入验证码"},on:{input:t.codeInput}})]),i("div",{staticClass:["code-btn"],on:{click:t.getCodes}},[i("text",{staticClass:["code-text"]},[t._v(t._s(t._f("change")(t.time)))])]),i("div",{staticClass:["form-apply"]},[i("div",{staticClass:["form-apply-btn"],on:{click:t.applyForm}},[i("text",{staticClass:["form-submit-text"]},[t._v("提交申请")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["must-input"]},[i("text",{staticClass:["li-title"]},[t._v("所在城市")]),i("text",{staticClass:["must"]},[t._v("*")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["must-input"]},[i("text",{staticClass:["li-title"]},[t._v("卖车手机号")]),i("text",{staticClass:["must"]},[t._v("*")])])}]},t.exports.render._withStripped=!0}});