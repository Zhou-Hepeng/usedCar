// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=93)}({0:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},1:function(t,e){t.exports=function(t,e,n,o){var i,a=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),o){var d=s.computed||(s.computed={});Object.keys(o).forEach(function(t){var e=o[t];d[t]=function(){return e}})}return{esModule:i,exports:a,options:s}}},107:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.list-item[data-v-20aaff63]{\n  margin-top: 24px;\n  background-color: #fff;\n}\n.item-content[data-v-20aaff63]{\n  position: relative;\n  flex-direction: row;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.image[data-v-20aaff63]{\n  width: 204px;\n  height: 136px;\n}\n.list-line[data-v-20aaff63]{\n  position: absolute;\n  left: 30px;\n  bottom: 0;\n  width: 720px;\n  height: 2px;\n  background-color: #eee;\n}\n.truck-content[data-v-20aaff63]{\n  padding-left: 20px;\n}\n.truck-title-text[data-v-20aaff63]{\n  width: 460px;\n  text-overflow:ellipsis;\n  overflow:hidden;\n  lines:1;\n  font-size: 32px;\n  color: #333;\n}\n.second-title-text[data-v-20aaff63]{\n  margin-top: 14px;\n  font-size: 24px;\n  color: #999;\n}\n.agian[data-v-20aaff63]{\n  margin-top: 36px;\n  flex-direction: row;\n}\n.no-pass[data-v-20aaff63],.edit-car[data-v-20aaff63]{\n  font-size: 24px;\n}\n.no-pass[data-v-20aaff63]{\n  color: #d22425;\n}\n.edit-car[data-v-20aaff63]{\n  margin-left: 10px;\n  color:#999;\n}\n.item-footer[data-v-20aaff63]{\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 30px;\n  padding-right: 30px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n}\n.delete[data-v-20aaff63],.edit[data-v-20aaff63]{\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-size: 28px;\n  color: #ee6e47;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-top-color: #ee6e47;\n  border-top-style: solid;\n  border-top-width: 2px;\n  border-right-color: #ee6e47;\n  border-right-style: solid;\n  border-right-width: 2px;\n  border-bottom-color: #ee6e47;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-left-color: #ee6e47;\n  border-left-style: solid;\n  border-left-width: 2px;\n}\n.edit[data-v-20aaff63]{\n  margin-left: 10px;\n}\n",""])},125:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.container[data-v-d6fb8172]{\n  flex: 1;\n  height: 100%;\n  background-color: #f5f5f5;\n}\n.nav[data-v-d6fb8172]{\n  margin-top: 2px;\n  position: relative;\n  flex-direction: row;\n  height: 88px;\n  background-color: #fff;\n  align-items: center;\n}\n.prev[data-v-d6fb8172],.now[data-v-d6fb8172],.next[data-v-d6fb8172]{\n  flex: 1;\n  text-align: center;\n  height: 88px;\n  line-height: 88px;\n  font-size: 28px;\n  color: #666;\n  border-bottom-width: 0;\n}\n.selected[data-v-d6fb8172]{\n  height: 84px;\n  line-height: 84px;\n  border-bottom-width: 4px;\n  border-bottom-style: solid;\n  border-bottom-color: #d22425;\n  color: #ee6e47;\n}\n.no-info[data-v-d6fb8172]{\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-left: 30px;\n  padding-right: 30px;\n  flex: 1;\n  align-items: center;\n}\n.no-car[data-v-d6fb8172]{\n  font-family:'icon';\n  font-size:100px;\n  color: #d8d8d8;\n}\n.tip-text[data-v-d6fb8172]{\n  margin-top: 20px;\n  font-size: 28px;\n  color: #999;\n}\n.scroll[data-v-d6fb8172]{\n  flex: 1;\n}\n.loading[data-v-d6fb8172]{\n  width: 750px;\n}\n.indicator[data-v-d6fb8172]{\n  color: #999;\n  font-size: 28px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n",""])},144:function(t,e,n){n(183);var o=n(1)(n(70),n(153),"data-v-20aaff63",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/mycar/Verify.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Verify.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},153:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item"},[n("div",{staticClass:"item-content"},[n("image",{staticClass:"image",attrs:{src:t.truckData.cover}}),t._v(" "),n("div",{staticClass:"truck-content"},[n("text",{staticClass:"truck-title-text"},[t._v(t._s(t.truckData.title))]),t._v(" "),n("text",{staticClass:"second-title-text"},[t._v(t._s(t.truckData.SubSeries))]),t._v(" "),n("div",{staticClass:"agian"},[n("text",{staticClass:"no-pass"},[t._v("未通过")]),t._v(" "),n("text",{staticClass:"edit-car"},[t._v("请修改车辆信息")])])]),t._v(" "),n("text",{staticClass:"list-line"})]),t._v(" "),n("div",{staticClass:"item-footer"},[n("text",{staticClass:"delete"},[t._v("删除")]),t._v(" "),n("text",{staticClass:"edit"},[t._v("编辑")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},171:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.topBarShow?n("div",{staticClass:"topBarShow",staticStyle:{height:"40px","background-color":"#fff"}}):t._e(),t._v(" "),n("my-goback",{attrs:{title:"我的车辆"}}),t._v(" "),n("div",{staticClass:"nav"},[n("text",{class:["prev",t.firstClass],on:{click:t.firstNav}},[t._v("审核中（0）")]),t._v(" "),n("text"),t._v(" "),n("text",{class:["now",t.secondClass],on:{click:t.secondNav}},[t._v("在售（0）")]),t._v(" "),n("text",{class:["next",t.thirdClass],on:{click:t.thirdNav}},[t._v("已售（0）")])]),t._v(" "),n("scroller",{staticClass:"scroll",attrs:{loadmoreoffset:"10"},on:{loadmore:t.loadMore}},[null===t.listData?n("div",{staticClass:"no-info"},[n("text",{staticClass:"no-car",style:{fontFamily:"icon",fontSize:"100px"}},[t._v("")]),t._v(" "),n("text",{staticClass:"tip-text"},[t._v("没有任何车辆信息")])]):t._l(t.listData,function(t,e){return[n("verify",{key:e,attrs:{truckData:t}})]}),t._v(" "),t.showText?n("loading",{staticClass:"loading",attrs:{display:t.showLoading},on:{loading:t.onLoading}},[n("text",{staticClass:"indicator"},[t._v("正在加载 ...")])]):t._e()],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},183:function(t,e,n){var o=n(107);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("322c6dc0",o,!1)},2:function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(a(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(a(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:r}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(x){var a=p++;o=u||(u=i()),e=r.bind(null,o,a,!1),n=r.bind(null,o,a,!0)}else o=i(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function r(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function s(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(4),l={},f=d&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,h=!1,v=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return o(i),function(e){for(var n=[],a=0;a<i.length;a++){var r=i[a],s=l[r.id];s.refs--,n.push(s)}e?(i=c(t,e),o(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete l[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},201:function(t,e,n){var o=n(125);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("1f8111a5",o,!1)},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("modal"),i=weex.requireModule("dom"),a=weex.requireModule("THAW"),r=weex.requireModule("navigator"),s=weex.requireModule("stream"),d=(weex.requireModule("animation"),weex.requireModule("storage")),c=weex.requireModule("picker"),l=weex.requireModule("globalEvent");e.default={methods:{alert:function(t){o.alert({message:JSON.stringify(t)})},topBarShow:function(){if("iOS"==weex.config.env.platform)return!0},showConfirm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),o.confirm({message:e,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(e){t(e)})},goUrl:function(t){a&&a.goUrl(t)},goWeexUrl:function(t){r.push({url:"http://192.168.1.241:8080/dist/"+t+".js",animated:"true"},function(){})},goBack:function(){r.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(t,e){return s.fetch({method:"GET",type:"json",url:this.ajaxUrl()+t},e)},postData:function(t,e,n){return s.fetch({method:"POST",url:this.ajaxUrl()+t,type:"json",body:e},n)},loadingShow:function(){a&&a.onShowLoading()},loadingHide:function(){a&&a.onHideLoading()},goTop:function(){var t=this.$refs.goTop;i.scrollToElement(t,{offset:0})},getToKen:function(){var t=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(e){t.alert(e,"eleeleele"),e.ok&&0==e.data.status&&d.setItem("toKen",e.data.data.token)})},goCall:function(t){a&&a.onGoCall(t)},pickLocation:function(){var t=this;c.pick({index:2,items:[1,2,3,4],height:"500px"},function(e){"success"==e.result&&t.alert(e.data)})},goLogin:function(t){a&&a.onGoLogin(),l&&l.addEvenetListener("onLoginCallback",function(e){this.alert(2),this.alert(e),t(e)})}},created:function(){}}},4:function(t,e){t.exports=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var a=e[i],r=a[0],s=a[1],d=a[2],c=a[3],l={id:t+":"+i,css:s,media:d,sourceMap:c};o[r]?o[r].parts.push(l):n.push(o[r]={id:r,parts:[l]})}return n}},47:function(t,e,n){n(201);var o=n(1)(n(79),n(171),"data-v-d6fb8172",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/myCar.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] myCar.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},6:function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.go-back[data-v-562db9ea]{\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 90px;\n  flex-direction: row;\n  align-items: center;\n  background-color:#fff;\n  border-bottom-width: 1px;\n  border-bottom-color: #eee;\n  border-bottom-style: solid;\n}\n.back-btn[data-v-562db9ea]{\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 90px;\n}\n.back-arrow[data-v-562db9ea]{\n  margin-right: 8px;\n  font-family: 'icon';\n  font-size: 32px;\n  color: #cbd6ec;\n}\n.back[data-v-562db9ea]{\n  font-size: 28px;\n  color: #666;\n}\n.view-name[data-v-562db9ea]{\n  font-size: 32px;\n  font-weight: 500;\n  width: 450px;\n  text-align: center;\n  text-overflow:ellipsis;\n  -webkit-line-clamp:1;\n  overflow:hidden;\n  lines:1;\n}\n.clear[data-v-562db9ea]{\n  width: 120px;\n  height: 90px;\n  line-height: 90px;\n  font-size: 28px;\n  text-align: right;\n}\n",""])},7:function(t,e,n){n(9);var o=n(1)(n(5),n(8),"data-v-562db9ea",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] MyGoback.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},70:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["truckData"]}},79:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=o(i),r=n(7),s=o(r),d=n(144),c=o(d);Vue.mixin(a.default);var l=weex.requireModule("storage"),f=!1;e.default={data:function(){return{first:!1,second:!0,third:!1,truckStatus:2,page:1,showLoading:"hide",listData:[],token:"",showText:!1}},created:function(){var t=this;l.getItem("toKen",function(e){"success"==e.result&&(t.token=e.data,t.fetch())})},components:{MyGoback:s.default,Verify:c.default},computed:{firstClass:function(){return this.first?"selected":""},secondClass:function(){return this.second?"selected":""},thirdClass:function(){return this.third?"selected":""}},methods:{fetch:function(){var t=this;this.getData("/truck/my-truck?access-token="+this.accessToken+"&s="+this.truckStatus+"&page="+this.page+"&ajax="+!0,function(e){1===t.page?t.listData=e.data.data:(null!==e.data.data&&(t.listData=t.listData.concat(e.data.data),f=!1),t.showLoading="hide",t.showText=!1,t.resetLoadmore())})},firstNav:function(){this.first||(this.first=!0,this.second=!1,this.third=!1,this.truckStatus=1,this.page=1,f=!1,this.showText=!1,this.fetch())},secondNav:function(){this.second||(this.first=!1,this.second=!0,this.third=!1,this.truckStatus=2,this.page=1,f=!1,this.showText=!1,this.fetch())},thirdNav:function(){this.third||(this.first=!1,this.second=!1,this.third=!0,this.truckStatus=3,this.page=1,f=!1,this.showText=!1,this.fetch())},loadMore:function(){this.showText=!0},onLoading:function(){f||(this.page++,f=!0,this.showLoading="show",this.fetch())}}}},8:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"go-back"},[n("div",{staticClass:"back-btn",on:{click:function(e){t.goBack()}}},[n("text",{staticClass:"back-arrow",style:{fontFamily:"icon",fontSize:"32px"}},[t._v("")]),t._v(" "),n("text",{staticClass:"back"},[t._v("返回")])]),t._v(" "),n("text",{staticClass:"view-name"},[t._v(t._s(t.title))]),t._v(" "),t.history?n("text",{staticClass:"clear",on:{click:t.clearItem}},[t._v("清除")]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},9:function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("6f3f4229",o,!1)},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(47);o.el="#root",e.default=new Vue(o)}});