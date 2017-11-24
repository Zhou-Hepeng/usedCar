// { "framework": "Vue"} 

!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=91)}({0:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("modal"),r=weex.requireModule("dom"),n=weex.requireModule("THAW"),s=weex.requireModule("navigator"),a=weex.requireModule("stream"),d=(weex.requireModule("animation"),weex.requireModule("storage"));e.default={methods:{alert:function(t){i.alert({message:JSON.stringify(t)})},showConfirm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),i.confirm({message:e,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(e){t(e)})},goUrl:function(t){n&&n.goUrl(t)},goWeexUrl:function(t){s.push({url:"http://192.168.1.196:8080/dist/"+t+".js",animated:"true"},function(){})},goBack:function(){s.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(t,e){return a.fetch({method:"GET",type:"json",url:this.ajaxUrl()+t},e)},postData:function(t,e,o){return a.fetch({method:"POST",url:this.ajaxUrl()+t,type:"json",body:e},o)},loadingShow:function(){n&&n.onShowLoading()},loadingHide:function(){n&&n.onHideLoading()},goTop:function(){var t=this.$refs.goTop;r.scrollToElement(t,{offset:0})},getToKen:function(){var t=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(e){t.alert(e,"eleeleele"),e.ok&&0==e.data.status&&d.setItem("toKen",e.data.data.token)})}},created:function(){}}},1:function(t,e,o){var i,r,n=[];n.push(o(3)),i=o(2);var s=o(4);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-30d00a51",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},111:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["truckData"]}},120:function(t,e){t.exports={"list-item":{marginTop:24,backgroundColor:"#ffffff"},"item-content":{position:"relative",flexDirection:"row",paddingTop:24,paddingBottom:24,paddingLeft:30,paddingRight:30},image:{width:204,height:136},"list-line":{position:"absolute",left:30,bottom:0,width:720,height:2,backgroundColor:"#eeeeee"},"truck-content":{paddingLeft:20},"truck-title-text":{width:460,textOverflow:"ellipsis",overflow:"hidden",lines:1,fontSize:32,color:"#333333"},"second-title-text":{marginTop:14,fontSize:24,color:"#999999"},agian:{marginTop:36,flexDirection:"row"},"no-pass":{fontSize:24,color:"#d22425"},"edit-car":{fontSize:24,marginLeft:10,color:"#999999"},"item-footer":{paddingTop:16,paddingBottom:16,paddingLeft:30,paddingRight:30,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},delete:{paddingTop:8,paddingBottom:8,paddingLeft:16,paddingRight:16,fontSize:28,color:"#ee6e47",borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomRightRadius:8,borderBottomLeftRadius:8,borderTopColor:"#ee6e47",borderTopStyle:"solid",borderTopWidth:2,borderRightColor:"#ee6e47",borderRightStyle:"solid",borderRightWidth:2,borderBottomColor:"#ee6e47",borderBottomStyle:"solid",borderBottomWidth:2,borderLeftColor:"#ee6e47",borderLeftStyle:"solid",borderLeftWidth:2},edit:{paddingTop:8,paddingBottom:8,paddingLeft:16,paddingRight:16,fontSize:28,color:"#ee6e47",borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomRightRadius:8,borderBottomLeftRadius:8,borderTopColor:"#ee6e47",borderTopStyle:"solid",borderTopWidth:2,borderRightColor:"#ee6e47",borderRightStyle:"solid",borderRightWidth:2,borderBottomColor:"#ee6e47",borderBottomStyle:"solid",borderBottomWidth:2,borderLeftColor:"#ee6e47",borderLeftStyle:"solid",borderLeftWidth:2,marginLeft:10}}},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["list-item"]},[o("div",{staticClass:["item-content"]},[o("image",{staticClass:["image"],attrs:{src:t.truckData.cover}}),o("div",{staticClass:["truck-content"]},[o("text",{staticClass:["truck-title-text"]},[t._v(t._s(t.truckData.title))]),o("text",{staticClass:["second-title-text"]},[t._v(t._s(t.truckData.SubSeries))]),t._m(0)]),o("text",{staticClass:["list-line"]})]),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["agian"]},[o("text",{staticClass:["no-pass"]},[t._v("未通过")]),o("text",{staticClass:["edit-car"]},[t._v("请修改车辆信息")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["item-footer"]},[o("text",{staticClass:["delete"]},[t._v("删除")]),o("text",{staticClass:["edit"]},[t._v("编辑")])])}]},t.exports.render._withStripped=!0},2:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},3:function(t,e){t.exports={"go-back":{paddingLeft:10,paddingRight:10,height:90,flexDirection:"row",alignItems:"center",backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee",borderBottomStyle:"solid"},"back-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:120,height:90},"back-arrow":{marginRight:8,fontFamily:"'icon'",fontSize:32,color:"#cbd6ec"},back:{fontSize:28,color:"#666666"},"view-name":{fontSize:32,fontWeight:"500",width:450,textAlign:"center",textOverflow:"ellipsis",WebkitLineClamp:1,overflow:"hidden",lines:1},clear:{width:120,height:90,lineHeight:90,fontSize:28,textAlign:"right"}}},32:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),n=i(r),s=o(1),a=i(s),d=o(82),c=i(d);Vue.mixin(n.default);var l=weex.requireModule("storage"),f=!1;e.default={data:function(){return{first:!1,second:!0,third:!1,truckStatus:2,page:1,showLoading:"hide",listData:[],token:"",showText:!1}},created:function(){var t=this;l.getItem("toKen",function(e){"success"==e.result&&(t.token=e.data,t.fetch())})},components:{MyGoback:a.default,Verify:c.default},computed:{firstClass:function(){return this.first?"selected":""},secondClass:function(){return this.second?"selected":""},thirdClass:function(){return this.third?"selected":""}},methods:{fetch:function(){var t=this;this.getData("/truck/my-truck?access-token="+this.accessToken+"&s="+this.truckStatus+"&page="+this.page+"&ajax="+!0,function(e){1===t.page?t.listData=e.data.data:(null!==e.data.data&&(t.listData=t.listData.concat(e.data.data),f=!1),t.showLoading="hide",t.showText=!1,t.resetLoadmore())})},firstNav:function(){this.first||(this.first=!0,this.second=!1,this.third=!1,this.truckStatus=1,this.page=1,f=!1,this.showText=!1,this.fetch())},secondNav:function(){this.second||(this.first=!1,this.second=!0,this.third=!1,this.truckStatus=2,this.page=1,f=!1,this.showText=!1,this.fetch())},thirdNav:function(){this.third||(this.first=!1,this.second=!1,this.third=!0,this.truckStatus=3,this.page=1,f=!1,this.showText=!1,this.fetch())},loadMore:function(){this.showText=!0},onLoading:function(){f||(this.page++,f=!0,this.showLoading="show",this.fetch())}}}},4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["go-back"]},[o("div",{staticClass:["back-btn"],on:{click:function(e){t.goBack()}}},[o("text",{staticClass:["back-arrow"],style:{fontFamily:"icon",fontSize:"32px"}},[t._v("")]),o("text",{staticClass:["back"]},[t._v("返回")])]),o("text",{staticClass:["view-name"]},[t._v(t._s(t.title))]),t.history?o("text",{staticClass:["clear"],on:{click:t.clearItem}},[t._v("清除")]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},53:function(t,e){t.exports={container:{flex:1,height:100,backgroundColor:"#f5f5f5"},nav:{marginTop:2,position:"relative",flexDirection:"row",height:88,backgroundColor:"#ffffff",alignItems:"center"},prev:{flex:1,textAlign:"center",height:88,lineHeight:88,fontSize:28,color:"#666666",borderBottomWidth:0},now:{flex:1,textAlign:"center",height:88,lineHeight:88,fontSize:28,color:"#666666",borderBottomWidth:0},next:{flex:1,textAlign:"center",height:88,lineHeight:88,fontSize:28,color:"#666666",borderBottomWidth:0},selected:{height:84,lineHeight:84,borderBottomWidth:4,borderBottomStyle:"solid",borderBottomColor:"#d22425",color:"#ee6e47"},"no-info":{paddingTop:60,paddingBottom:60,paddingLeft:30,paddingRight:30,flex:1,alignItems:"center"},"no-car":{fontFamily:"'icon'",fontSize:100,color:"#d8d8d8"},"tip-text":{marginTop:20,fontSize:28,color:"#999999"},scroll:{flex:1},loading:{width:750},indicator:{color:"#999999",fontSize:28,paddingTop:20,paddingBottom:20,textAlign:"center"}}},67:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"]},[o("my-goback",{attrs:{title:"我的车辆"}}),o("div",{staticClass:["nav"]},[o("text",{class:["prev",t.firstClass],on:{click:t.firstNav}},[t._v("审核中（0）")]),o("text"),o("text",{class:["now",t.secondClass],on:{click:t.secondNav}},[t._v("在售（0）")]),o("text",{class:["next",t.thirdClass],on:{click:t.thirdNav}},[t._v("已售（0）")])]),o("scroller",{staticClass:["scroll"],attrs:{loadmoreoffset:"10"},on:{loadmore:t.loadMore}},[null===t.listData?o("div",{staticClass:["no-info"]},[o("text",{staticClass:["no-car"],style:{fontFamily:"icon",fontSize:"100px"}},[t._v("")]),o("text",{staticClass:["tip-text"]},[t._v("没有任何车辆信息")])]):t._l(t.listData,function(t,e){return[o("verify",{key:e,attrs:{truckData:t}})]}),t.showText?o("loading",{staticClass:["loading"],attrs:{display:t.showLoading},on:{loading:t.onLoading}},[o("text",{staticClass:["indicator"]},[t._v("正在加载 ...")])]):t._e()],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},82:function(t,e,o){var i,r,n=[];n.push(o(120)),i=o(111);var s=o(135);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/mycar/Verify.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-41a100dd",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},91:function(t,e,o){var i,r,n=[];n.push(o(53)),i=o(32);var s=o(67);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/myCar.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-c152037e",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i,t.exports.el="true",new Vue(t.exports)}});