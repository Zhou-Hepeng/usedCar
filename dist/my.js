// { "framework": "Vue"} 

!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=95)}({0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("modal"),n=weex.requireModule("dom"),s=weex.requireModule("THAW"),r=weex.requireModule("navigator"),a=weex.requireModule("stream"),l=(weex.requireModule("animation"),weex.requireModule("storage")),c=weex.requireModule("picker");e.default={methods:{alert:function(t){o.alert({message:JSON.stringify(t)})},showConfirm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),o.confirm({message:e,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(e){t(e)})},goUrl:function(t){s&&s.goUrl(t)},goWeexUrl:function(t){r.push({url:"http://192.168.1.186:8080/dist/"+t+".js",animated:"true"},function(){})},goBack:function(){r.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(t,e){return a.fetch({method:"GET",type:"json",url:this.ajaxUrl()+t},e)},postData:function(t,e,i){return a.fetch({method:"POST",url:this.ajaxUrl()+t,type:"json",body:e},i)},loadingShow:function(){s&&s.onShowLoading()},loadingHide:function(){s&&s.onHideLoading()},goTop:function(){var t=this.$refs.goTop;n.scrollToElement(t,{offset:0})},getToKen:function(){var t=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(e){t.alert(e,"eleeleele"),e.ok&&0==e.data.status&&l.setItem("toKen",e.data.data.token)})},goCall:function(t){s&&s.onGoCall(t)},pickLocation:function(){var t=this;c.pick({index:2,items:[1,2,3,4],height:"500px"},function(e){"success"==e.result&&t.alert(e.data)})}},created:function(){}}},1:function(t,e,i){var o,n,s=[];s.push(i(3)),o=i(2);var r=i(4);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-30d00a51",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o},2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},3:function(t,e){t.exports={"go-back":{paddingLeft:10,paddingRight:10,height:90,flexDirection:"row",alignItems:"center",backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee",borderBottomStyle:"solid"},"back-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:120,height:90},"back-arrow":{marginRight:8,fontFamily:"'icon'",fontSize:32,color:"#cbd6ec"},back:{fontSize:28,color:"#666666"},"view-name":{fontSize:32,fontWeight:"500",width:450,textAlign:"center",textOverflow:"ellipsis",WebkitLineClamp:1,overflow:"hidden",lines:1},clear:{width:120,height:90,lineHeight:90,fontSize:28,textAlign:"right"}}},35:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r);Vue.mixin(s.default);var l=weex.requireModule("storage");e.default={components:{MyGoback:a.default},data:function(){return{title:"个人中心",userInfo:{group:{is_auth:1}}}},created:function(){var t=this;this.getToKen(),l.getItem("userInfo",function(e){"success"==e.result&&(t.userInfo=JSON.parse(e.data))})}}},4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["go-back"]},[i("div",{staticClass:["back-btn"],on:{click:function(e){t.goBack()}}},[i("text",{staticClass:["back-arrow"],style:{fontFamily:"icon",fontSize:"32px"}},[t._v("")]),i("text",{staticClass:["back"]},[t._v("返回")])]),i("text",{staticClass:["view-name"]},[t._v(t._s(t.title))]),t.history?i("text",{staticClass:["clear"],on:{click:t.clearItem}},[t._v("清除")]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},54:function(t,e){t.exports={my:{backgroundColor:"#efeff4"},"my-info":{paddingTop:48,paddingBottom:36,paddingLeft:30,paddingRight:30,flexDirection:"row",alignItems:"center",backgroundColor:"#ffffff"},"user-img":{width:160,height:160,borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10,boxShadow:"0 0 5px #999",marginRight:20},"user-content":{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"user-status":{flexDirection:"row",alignItems:"center"},"user-name":{width:240,fontSize:36,fontWeight:"700",textOverflow:"ellipsis",WebkitLineClamp:1,overflow:"hidden",lines:1},"user-type":{height:32,fontSize:24,lineHeight:24,marginLeft:10,marginRight:8,color:"#904208",backgroundColor:"#ffdd62"},"user-opration":{flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},"user-edit":{fontSize:28,color:"#999999"},arrow:{fontFamily:"'icon'",fontSize:24,color:"#96a6c5",marginLeft:8},"my-content":{marginTop:24},toApply:{marginTop:24},"list-li":{position:"relative",paddingLeft:30,paddingRight:30,flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:88,backgroundColor:"#ffffff"},"list-content":{width:160,maxWidth:160,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},"li-to-store":{marginRight:8,fontSize:24,color:"#999999"},"li-title":{fontSize:28,flex:1},"li-arrow":{fontFamily:"'icon'",fontSize:24,color:"#96a6c5",transform:"rotate(180deg)"},"list-line":{position:"absolute",left:30,top:0,width:720,height:2,backgroundColor:"#eeeeee"}}},68:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["my"]},[i("my-goback",{attrs:{title:t.title}}),i("div",{staticClass:["my-info"]},[i("image",{staticClass:["user-img"],attrs:{src:t.userInfo.avatar}}),i("div",{staticClass:["user-content"]},[i("div",{staticClass:["user-status"]},[i("text",{staticClass:["user-name"]},[t._v(t._s(t.userInfo.nickname))]),i("text",{staticClass:["user-type"]},[t._v(t._s(1==t.userInfo.group.is_auth?"个人":2==t.userInfo.group.is_auth?"经纪人":"商家"))])]),i("div",{staticClass:["user-opration"]},[i("text",{staticClass:["user-edit"]},[t._v("编辑")]),i("text",{staticClass:["arrow"],style:{fontFamily:"icon",fontSize:"24px"}},[t._v("")])])])]),i("div",{staticClass:["my-content"]},[i("div",{staticClass:["list-li"],on:{click:function(e){t.goWeexUrl("myCar")}}},[i("text",{staticClass:["li-title"]},[t._v("我的车辆")]),i("div",{staticClass:["list-content"]},[i("text",{staticClass:["li-arrow"],style:{fontFamily:"icon",fontSize:"24px"}},[t._v("")])])]),i("div",{staticClass:["list-li"],on:{click:function(e){t.goWeexUrl("myCollection")}}},[i("text",{staticClass:["list-line"]}),i("text",{staticClass:["li-title"]},[t._v("我的收藏")]),i("div",{staticClass:["list-content"]},[i("text",{staticClass:["li-arrow"],style:{fontFamily:"icon",fontSize:"24px"}},[t._v("")])])]),i("div",{staticClass:["list-li"],on:{click:function(e){t.goWeexUrl("myMessage")}}},[i("text",{staticClass:["list-line"]}),i("text",{staticClass:["li-title"]},[t._v("我的消息")]),i("div",{staticClass:["list-content"]},[i("text",{staticClass:["li-arrow"],style:{fontFamily:"icon",fontSize:"24px"}},[t._v("")])])]),i("div",{staticClass:["list-li"],on:{click:function(e){t.goWeexUrl("myRecord")}}},[i("text",{staticClass:["list-line"]}),i("text",{staticClass:["li-title"]},[t._v("浏览记录")]),i("div",{staticClass:["list-content"]},[i("text",{staticClass:["li-arrow"],style:{fontFamily:"icon",fontSize:"24px"}},[t._v("")])])]),i("div",{staticClass:["toApply"],on:{click:function(e){t.goWeexUrl("applyChoose")}}},[i("div",{staticClass:["list-li"]},[i("text",{staticClass:["li-title"]},[t._v("申请经纪人或商家")]),i("div",{staticClass:["list-content"]},[i("text",{staticClass:["li-to-store"]},[t._v("去申请")]),i("text",{staticClass:["li-arrow"],style:{fontFamily:"icon",fontSize:"24px"}},[t._v("")])])])])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},95:function(t,e,i){var o,n,s=[];s.push(i(54)),o=i(35);var r=i(68);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/my.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-7ec540c3",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o,t.exports.el="true",new Vue(t.exports)}});