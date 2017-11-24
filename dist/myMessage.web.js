// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=79)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(o[s]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},1:function(e,t){e.exports=function(e,t,n,o){var a,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,s=e.default);var i="function"==typeof s?s.options:s;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),o){var c=i.computed||(i.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:a,exports:s,options:i}}},179:function(e,t,n){n(194);var o=n(1)(n(183),n(190),"data-v-72e4ef0c",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/myMessage.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] myMessage.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},183:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),s=o(a),r=n(7),i=o(r),c=n(205),l=o(c);Vue.mixin(s.default);var u=(weex.requireModule("modal"),weex.requireModule("storage"));t.default={data:function(){return{messageData:[],notMessageList:!1,page:1,token:"",clearButton:!1}},components:{MyGoback:i.default,MessageItem:l.default},created:function(){var e=this;u.getItem("toKen",function(t){"success"==t.result&&(e.token=t.data,e.getMessage())})},methods:{getMessage:function(){var e=this;this.getData("/member/notification?page="+this.page+"&access-token="+this.token,function(t){t.ok&&0==t.data.status&&(e.messageData=t.data.data,e.messageData.length?e.clearButton=!0:e.notMessageList=!0)})},clearRecord:function(e,t){var n=this;this.showConfirm(function(o){"确定"==o&&n.getData("/member/delnotif?access-token="+n.token+"&id="+e,function(e){e.ok&&0==e.data.status&&(n.messageData.splice(t,1),n.messageData.length||(n.clearButton=!1,n.notMessageList=!0))})})},clearItem:function(){var e=this;this.showConfirm(function(t){"确定"==t&&e.getData("/member/delnotifs?access-token="+e.token,function(t){t.ok&&0==t.data.status&&(e.messageData=[],e.clearButton=!1,e.notMessageList=!0)})})}}}},186:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.container[data-v-72e4ef0c]{\n  flex: 1;\n  height: 100%;\n  background-color: #f5f5f5;\n}\n.no-info[data-v-72e4ef0c]{\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-left: 30px;\n  padding-right: 30px;\n  flex: 1;\n  align-items: center;\n}\n.no-car[data-v-72e4ef0c]{\n  font-family:'icon';\n  font-size:100px;\n  color: #d8d8d8;\n}\n.tip-text[data-v-72e4ef0c]{\n  margin-top: 20px;\n  font-size: 28px;\n  color: #999;\n}\n",""])},190:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("my-goback",{attrs:{title:"我的消息",history:!0},on:{clearItem:e.clearItem}}),e._v(" "),n("scroller",{staticStyle:{flex:"1"}},[e.notMessageList?n("div",{staticClass:"no-info"},[n("text",{staticClass:"no-car",style:{fontFamily:"icon",fontSize:"100px"}},[e._v("")]),e._v(" "),n("text",{staticClass:"tip-text"},[e._v("没有任何车辆信息")])]):e._e(),e._v(" "),e._l(e.messageData,function(t,o){return[n("message-item",{key:o,attrs:{message:t,index:o},on:{clearRecord:e.clearRecord}})]})],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},194:function(e,t,n){var o=n(186);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("60da50ce",o,!1)},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});weex.requireModule("animation");t.default={props:["message","index"],data:function(){return{touchActive:!1,startPageX:"",endPageX:""}},methods:{zero:function(e){return e<10?"0"+e:e},format:function(e){var t=new Date(1e3*e),n=t.getFullYear(),o=t.getMonth()+1,a=t.getDate(),s=t.getHours(),r=t.getMinutes(),i=t.getSeconds();return n+"-"+this.zero(o)+"-"+this.zero(a)+" "+this.zero(s)+":"+this.zero(r)+":"+this.zero(i)},touchstart:function(e){this.startPageX=e.changedTouches[0].pageX},touchmove:function(e){this.endPageX=e.changedTouches[0].pageX;this.endPageX,this.startPageX,this.startPageX,this.endPageX;this.$refs.nihao},touchend:function(e){},clearRecord:function(e){this.touchActive=!1,this.$emit("clearRecord",e,this.index)}}}},2:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(s(n.parts[a]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(s(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:r}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return g;o.parentNode.removeChild(o)}if(v){var s=p++;o=f||(f=a()),t=r.bind(null,o,s,!1),n=r.bind(null,o,s,!0)}else o=a(),t=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function r(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var s=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function i(e,t){var n=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var a=l(e,t);return o(a),function(t){for(var n=[],s=0;s<a.length;s++){var r=a[s],i=u[r.id];i.refs--,n.push(i)}t?(a=l(e,t),o(a)):a=[];for(var s=0;s<n.length;s++){var i=n[s];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete u[i.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},201:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.active[data-v-34391173]{\n  transform: translateX(-90px)\n}\n.message-item[data-v-34391173]{\n    position: relative;\n    flex-direction: row;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    padding-left: 30px;\n    padding-right: 24px;\n    background-color: #fff;\n    transform: translateX(0)\n}\n.line[data-v-34391173]{\n    position: absolute;\n    left: 30px;\n    bottom: 0;\n    width: 720px;\n    height: 2px;\n    background-color: #eee;\n}\n.icon-message[data-v-34391173]{\n    position: relative;\n    margin-right: 24px;\n    padding-top: 8px;\n    justify-content: flex-start;\n}\n.red-tip[data-v-34391173]{\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: red;\n    z-index: 100;\n}\n.icon-tip[data-v-34391173]{\n    width: 36px;\n    height: 44px;\n    font-family: 'icon';\n    font-size: 32px;\n    color: #999;\n}\n.message-content[data-v-34391173]{\n    flex: 1;\n}\n.message-text[data-v-34391173]{\n    height: 80px;\n    font-size: 28px;\n    line-height: 40px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    lines: 2;\n    color: #333;\n}\n.message-time[data-v-34391173]{\n    margin-top: 16px;\n    font-size: 24px;\n    color: #999;\n}\n.cancle-collection[data-v-34391173]{\n    position: absolute;\n    top: 0;\n    right: -90px;\n    width: 90px;\n    height: 175px;\n    justify-content: center;\n    align-items: center;\n    background-color: #ff9041;\n    transition: all .15s linear;\n}\n.collection[data-v-34391173]{\n    width: 60px;\n}\n.cancle[data-v-34391173]{\n    font-size: 28px;\n    color: #fff;\n    line-height: 40px;\n}\n",""])},205:function(e,t,n){n(210);var o=n(1)(n(199),n(207),"data-v-34391173",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/mymessage/MessageItem.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] MessageItem.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},207:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"nihao",class:["message-item",e.touchActive?"active":""],on:{touchstart:e.touchstart,touchmove:e.touchmove,touchend:e.touchend}},[n("text",{staticClass:"line"}),e._v(" "),n("div",{staticClass:"icon-message"},[n("div",{staticClass:"icon"},["unread"===e.message.readed?n("text",{staticClass:"red-tip"}):e._e(),e._v(" "),n("text",{staticClass:"icon-tip",style:{fontFamily:"icon",fontSize:"32px"}},[e._v("")])])]),e._v(" "),n("div",{staticClass:"message-content"},[n("text",{staticClass:"message-text"},[e._v(e._s(e.message.content))]),e._v(" "),n("text",{staticClass:"message-time"},[e._v(e._s(this.format(e.message.create_at)))])]),e._v(" "),n("div",{staticClass:"cancle-collection",on:{click:function(t){e.clearRecord(e.message.id)}}},[n("div",{staticClass:"collection"},[n("text",{staticClass:"cancle"},[e._v("删除")])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},210:function(e,t,n){var o=n(201);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("1c96a359",o,!1)},3:function(e,t){e.exports=function(e,t){for(var n=[],o={},a=0;a<t.length;a++){var s=t[a],r=s[0],i=s[1],c=s[2],l=s[3],u={id:e+":"+a,css:i,media:c,sourceMap:l};o[r]?o[r].parts.push(u):n.push(o[r]={id:r,parts:[u]})}return n}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("modal"),a=weex.requireModule("dom"),s=weex.requireModule("THAW"),r=weex.requireModule("navigator"),i=weex.requireModule("stream"),c=(weex.requireModule("animation"),weex.requireModule("storage"));t.default={methods:{alert:function(e){o.alert({message:JSON.stringify(e)})},showConfirm:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),o.confirm({message:t,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(t){e(t)})},goUrl:function(e){s&&s.goUrl(e)},goWeexUrl:function(e){r.push({url:"http://192.168.1.227:8080/dist/"+e+".js",animated:"true"},function(){})},goBack:function(){r.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(e,t){return i.fetch({method:"GET",type:"json",url:this.ajaxUrl()+e},t)},postData:function(e,t,n){return i.fetch({method:"POST",url:this.ajaxUrl()+e,type:"json",body:t},n)},loadingShow:function(){s&&s.onShowLoading()},loadingHide:function(){s&&s.onHideLoading()},goTop:function(){var e=this.$refs.goTop;a.scrollToElement(e,{offset:0})},getToKen:function(){var e=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(t){e.alert(t,"eleeleele"),t.ok&&0==t.data.status&&c.setItem("toKen",t.data.data.token)})},goCall:function(e){s&&s.onGoCall(e)}},created:function(){}}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},6:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.go-back[data-v-562db9ea]{\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 90px;\n  flex-direction: row;\n  align-items: center;\n  background-color:#fff;\n  border-bottom-width: 1px;\n  border-bottom-color: #eee;\n  border-bottom-style: solid;\n}\n.back-btn[data-v-562db9ea]{\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 90px;\n}\n.back-arrow[data-v-562db9ea]{\n  margin-right: 8px;\n  font-family: 'icon';\n  font-size: 32px;\n  color: #cbd6ec;\n}\n.back[data-v-562db9ea]{\n  font-size: 28px;\n  color: #666;\n}\n.view-name[data-v-562db9ea]{\n  font-size: 32px;\n  font-weight: 500;\n  width: 450px;\n  text-align: center;\n  text-overflow:ellipsis;\n  -webkit-line-clamp:1;\n  overflow:hidden;\n  lines:1;\n}\n.clear[data-v-562db9ea]{\n  width: 120px;\n  height: 90px;\n  line-height: 90px;\n  font-size: 28px;\n  text-align: right;\n}\n",""])},7:function(e,t,n){n(9);var o=n(1)(n(5),n(8),"data-v-562db9ea",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] MyGoback.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(179);o.el="#root",t.default=new Vue(o)},8:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"go-back"},[n("div",{staticClass:"back-btn",on:{click:function(t){e.goBack()}}},[n("text",{staticClass:"back-arrow",style:{fontFamily:"icon",fontSize:"32px"}},[e._v("")]),e._v(" "),n("text",{staticClass:"back"},[e._v("返回")])]),e._v(" "),n("text",{staticClass:"view-name"},[e._v(e._s(e.title))]),e._v(" "),e.history?n("text",{staticClass:"clear",on:{click:e.clearItem}},[e._v("清除")]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("6f3f4229",o,!1)}});