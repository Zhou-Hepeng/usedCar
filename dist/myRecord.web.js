// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=96)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},1:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:r,exports:i,options:a}}},102:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.container[data-v-12ca45ae]{\n  flex: 1;\n  height: 100%;\n}\n.no-info[data-v-12ca45ae]{\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-left: 30px;\n  padding-right: 30px;\n  flex: 1;\n  align-items: center;\n  background-color:#f5f5f5;\n}\n.no-car[data-v-12ca45ae]{\n  font-family:'icon';\n  font-size:100px;\n  color: #d8d8d8;\n}\n.tip-text[data-v-12ca45ae]{\n  margin-top: 20px;\n  font-size: 28px;\n  color: #999;\n}\n",""])},127:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.active{\n  transform: translateX(-90px)\n}\n.flex{\n    flex-direction: row;\n}\n.box-flex{\n    flex: 1;\n}\n.align-center{\n    align-items: center;\n}\n.ml{\n    margin-left: 10px;\n}\n.truck-item{\n    position:relative;\n    width: 750px;\n    padding: 20px;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #eee;\n    transform: translateX(0)\n}\n.image,\n.truck-img{\n    width: 204px;\n    height: 136px;\n}\n.truck-info{\n    padding-left: 20px;\n}\n.truck-title,\n.second-title{\n    margin-bottom: 10px;\n}\n.truck-title-text{\n    lines: 1;\n    text-overflow: ellipsis;\n    font-size: 32px;\n    color: #333333;\n}\n.second-title-text{\n    font-size: 24px;\n    color: #999999;\n}\n.truck-price-text{\n    font-size: 32px;\n    color: #ee6e47;\n}\n.price-small-text{\n    font-size: 30px;\n    color: #ee6e47;\n}\n.user-tips{\n    padding: 4px 8px;\n    background-color: #ffdd62;\n}\n.tips-text{\n    font-size: 24px;\n    color: #904208;\n}\n.price-reduce{\n    width: 36px;\n    height: 26px;\n}\n.tips-vip{\n    width: 32px;\n    height: 28px;\n}\n.tips-bao{\n    width: 32px;\n    height: 34px;\n}\n.cancle-collection{\n  position: absolute;\n  top: 0;\n  right: -90px;\n  width: 90px;\n  height: 175px;\n  justify-content: center;\n  align-items: center;\n  background-color: #ff9041;\n  transition: all .15s linear;\n}\n.collection{\n  width: 60px;\n}\n.cancle{\n  font-size: 28px;\n  color: #fff;\n  line-height: 40px;\n}\n",""])},143:function(e,t,n){n(203);var o=n(1)(n(69),n(173),null,null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/myRecord/record.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] record.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},148:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("my-goback",{attrs:{title:"浏览历史",history:e.clearButton},on:{clearItem:e.clearItem}}),e._v(" "),n("scroller",{staticStyle:{flex:"1","background-color":"#f5f5f5"}},[e.notRecordList?n("div",{staticClass:"no-info"},[n("text",{staticClass:"no-car",style:{fontFamily:"icon",fontSize:"100px"}},[e._v("")]),e._v(" "),n("text",{staticClass:"tip-text"},[e._v("没有任何车辆信息啊")])]):e._e(),e._v(" "),e._l(e.recordList,function(t,o){return[n("record",{attrs:{item:t,index:o},on:{clearRecord:e.clearRecord}})]})],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},173:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["truck-item","flex",e.touchActive?"active":""],on:{touchstart:e.touchstart,touchmove:e.touchmove,touchend:e.touchend}},[n("div",{staticClass:"truck-img"},[n("image",{staticClass:"image",attrs:{src:e.item.cover}})]),e._v(" "),n("div",{staticClass:"truck-info box-flex"},[n("div",{staticClass:"truck-title"},[n("text",{staticClass:"truck-title-text"},[e._v(e._s(e.item.mainTitle))])]),e._v(" "),n("div",{staticClass:"second-title box-flex"},[n("text",{staticClass:"second-title-text"},[e._v(e._s(e.item.secondTitle))])]),e._v(" "),n("div",{staticClass:"other-info flex align-center"},[n("div",{staticClass:"truck-price flex align-center"},[n("text",{staticClass:"truck-price-text"},[e._v(e._s(e.item.price))]),e._v(" "),n("text",{staticClass:"price-small-text"},[e._v("万")])]),e._v(" "),"yes"==e.item.price_reduce?n("image",{staticClass:"price-reduce ml",attrs:{src:e.imageUrl+"m/images/price_reduce.png"}}):e._e(),e._v(" "),2==e.item.publisher||3==e.item.publisher?n("div",{staticClass:"user-tips ml"},[2==e.item.publisher?n("text",{staticClass:"tips-text"},[e._v("经纪人")]):e._e(),e._v(" "),3==e.item.publisher?n("text",{staticClass:"tips-text"},[e._v("商家")]):e._e()]):e._e(),e._v(" "),-1!==e.item.groups.indexOf(2)?n("image",{staticClass:"tips-vip ml",attrs:{src:e.imageUrl+"m/images/vip.png"}}):e._e(),e._v(" "),-1!==e.item.groups.indexOf(1)?n("image",{staticClass:"tips-bao ml",attrs:{src:e.imageUrl+"m/images/bao.png"}}):e._e()])]),e._v(" "),n("div",{staticClass:"cancle-collection",on:{click:function(t){e.clearRecord(e.item.id)}}},[n("div",{staticClass:"collection"},[n("text",{staticClass:"cancle"},[e._v("删除")])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},178:function(e,t,n){var o=n(102);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("2d543a70",o,!1)},2:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return m;o.parentNode.removeChild(o)}if(v){var i=f++;o=p||(p=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(4),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=l(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],a=u[s.id];a.refs--,n.push(a)}t?(r=l(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},203:function(e,t,n){var o=n(127);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("798d6439",o,!1)},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("modal"),r=weex.requireModule("dom"),i=weex.requireModule("THAW"),s=weex.requireModule("navigator"),a=weex.requireModule("stream"),c=(weex.requireModule("animation"),weex.requireModule("storage")),l=weex.requireModule("picker");t.default={methods:{alert:function(e){o.alert({message:JSON.stringify(e)})},showConfirm:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),o.confirm({message:t,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(t){e(t)})},goUrl:function(e){i&&i.goUrl(e)},goWeexUrl:function(e){s.push({url:"http://192.168.1.186:8080/dist/"+e+".js",animated:"true"},function(){})},goBack:function(){s.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(e,t){return a.fetch({method:"GET",type:"json",url:this.ajaxUrl()+e},t)},postData:function(e,t,n){return a.fetch({method:"POST",url:this.ajaxUrl()+e,type:"json",body:t},n)},loadingShow:function(){i&&i.onShowLoading()},loadingHide:function(){i&&i.onHideLoading()},goTop:function(){var e=this.$refs.goTop;r.scrollToElement(e,{offset:0})},getToKen:function(){var e=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(t){e.alert(t,"eleeleele"),t.ok&&0==t.data.status&&c.setItem("toKen",t.data.data.token)})},goCall:function(e){i&&i.onGoCall(e)},pickLocation:function(){var e=this;l.pick({index:2,items:[1,2,3,4],height:"500px"},function(t){"success"==t.result&&e.alert(t.data)})}},created:function(){}}},4:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],c=i[2],l=i[3],u={id:e+":"+r,css:a,media:c,sourceMap:l};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},50:function(e,t,n){n(178);var o=n(1)(n(82),n(148),"data-v-12ca45ae",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/myRecord.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] myRecord.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},6:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.go-back[data-v-562db9ea]{\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 90px;\n  flex-direction: row;\n  align-items: center;\n  background-color:#fff;\n  border-bottom-width: 1px;\n  border-bottom-color: #eee;\n  border-bottom-style: solid;\n}\n.back-btn[data-v-562db9ea]{\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 90px;\n}\n.back-arrow[data-v-562db9ea]{\n  margin-right: 8px;\n  font-family: 'icon';\n  font-size: 32px;\n  color: #cbd6ec;\n}\n.back[data-v-562db9ea]{\n  font-size: 28px;\n  color: #666;\n}\n.view-name[data-v-562db9ea]{\n  font-size: 32px;\n  font-weight: 500;\n  width: 450px;\n  text-align: center;\n  text-overflow:ellipsis;\n  -webkit-line-clamp:1;\n  overflow:hidden;\n  lines:1;\n}\n.clear[data-v-562db9ea]{\n  width: 120px;\n  height: 90px;\n  line-height: 90px;\n  font-size: 28px;\n  text-align: right;\n}\n",""])},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["item","index"],data:function(){return{touchActive:!1,imageUrl:"https://tao.m.360che.com/"}},methods:{touchstart:function(e){this.startPageX=e.changedTouches[0].pageX},touchmove:function(e){this.endPageX=e.changedTouches[0].pageX},touchend:function(e){this.startPageX-this.endPageX>20&&(this.touchActive=!0),this.endPageX-this.startPageX>20&&(this.touchActive=!1)},clearRecord:function(e){this.touchActive=!1,this.$emit("clearRecord",e,this.index)}}}},7:function(e,t,n){n(9);var o=n(1)(n(5),n(8),"data-v-562db9ea",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] MyGoback.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},8:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"go-back"},[n("div",{staticClass:"back-btn",on:{click:function(t){e.goBack()}}},[n("text",{staticClass:"back-arrow",style:{fontFamily:"icon",fontSize:"32px"}},[e._v("")]),e._v(" "),n("text",{staticClass:"back"},[e._v("返回")])]),e._v(" "),n("text",{staticClass:"view-name"},[e._v(e._s(e.title))]),e._v(" "),e.history?n("text",{staticClass:"clear",on:{click:e.clearItem}},[e._v("清除")]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},82:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=o(r),s=n(7),a=o(s),c=n(143),l=o(c);Vue.mixin(i.default);var u=weex.requireModule("storage");t.default={components:{MyGoback:a.default,record:l.default},data:function(){return{page:1,recordList:[],notRecordList:!1,token:{},clearButton:!1}},created:function(){var e=this;u.getItem("toKen",function(t){"success"==t.result&&(e.token=t.data,e.getRecord())})},methods:{getRecord:function(){var e=this;this.getData("/member/history?page="+this.page+"&access-token="+this.token,function(t){e.recordList=t.data.data,e.recordList.length?e.clearButton=!0:e.notRecordList=!0})},clearRecord:function(e,t){var n=this;this.showConfirm(function(o){"确定"==o&&n.getData("/member/historyd?access-token="+n.token+"&id="+e,function(e){e.ok&&0==e.data.status&&(n.recordList.splice(t,1),n.recordList.length||(n.clearButton=!1,n.notRecordList=!0))})})},clearItem:function(){var e=this;this.showConfirm(function(t){"确定"==t&&e.getData("/member/historyds?access-token="+e.token,function(t){t.ok&&0==t.data.status&&(e.recordList=[],e.clearButton=!1,e.notRecordList=!0)})})}}}},9:function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("6f3f4229",o,!1)},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(50);o.el="#root",t.default=new Vue(o)}});