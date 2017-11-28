// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=87)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},1:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var c=s.computed||(s.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:r,exports:i,options:s}}},128:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.apply-container[data-v-f3ab7fb8]{\n    flex: 1;\n    padding: 20px;\n    background-color: #efeff4;\n}\n.apply-choose[data-v-f3ab7fb8]{\n    margin-bottom: 20px;\n    padding: 20px;\n    background-color: #fff;\n    box-shadow: 0 1px 3px #dcdcdc;\n    flex-direction: row;\n    align-items: center;\n}\n.image[data-v-f3ab7fb8]{\n    width: 100px;\n    height: 84px;\n}\n.content[data-v-f3ab7fb8]{\n    flex: 1;\n    padding-left: 30px;\n}\n.title[data-v-f3ab7fb8]{\n    margin-bottom: 10px;\n    font-size: 28px;\n    color: #333333;\n}\n.info[data-v-f3ab7fb8]{\n    font-size: 24px;\n    color: #999999;\n}\n.icon[data-v-f3ab7fb8]{\n    color:#dfdfdf;\n}\n",""])},174:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.topBarShow?n("div",{staticClass:"topBarShow",staticStyle:{height:"40px","background-color":"#fff"}}):e._e(),e._v(" "),n("MyGoback",{attrs:{title:"商家申请-类型选择"}}),e._v(" "),n("div",{staticClass:"apply-container"},[n("div",{staticClass:"apply-choose",on:{click:function(t){e.goWeexUrl("intermediaryApply")}}},[n("image",{staticClass:"image",attrs:{src:e.imageUrl+"m/images/geti.png"}}),e._v(" "),n("div",{staticClass:"content"},[n("text",{staticClass:"title"},[e._v("个体性质")]),e._v(" "),n("text",{staticClass:"info"},[e._v("我是二手车经纪人，没有实体公司")])]),e._v(" "),n("text",{staticClass:"icon",style:{fontFamily:"icon",fontSize:"28px"}},[e._v("")])]),e._v(" "),n("div",{staticClass:"apply-choose",on:{click:function(t){e.goWeexUrl("sellerApply")}}},[n("image",{staticClass:"image",attrs:{src:e.imageUrl+"m/images/gongsi.png"}}),e._v(" "),n("div",{staticClass:"content"},[n("text",{staticClass:"title"},[e._v("公司性质")]),e._v(" "),n("text",{staticClass:"info"},[e._v("我是二手车车商，有实体公司")])]),e._v(" "),n("text",{staticClass:"icon",style:{fontFamily:"icon",fontSize:"28px"}},[e._v("")])])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},2:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(g){var i=p++;o=f||(f=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(4),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var r=l(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],s=u[a.id];s.refs--,n.push(s)}t?(r=l(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},204:function(e,t,n){var o=n(128);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("12ed45d9",o,!1)},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("modal"),r=weex.requireModule("dom"),i=weex.requireModule("THAW"),a=weex.requireModule("navigator"),s=weex.requireModule("stream"),c=(weex.requireModule("animation"),weex.requireModule("storage")),l=weex.requireModule("picker"),u=weex.requireModule("globalEvent");t.default={methods:{alert:function(e){o.alert({message:JSON.stringify(e)})},topBarShow:function(){if("iOS"==weex.config.env.platform)return!0},showConfirm:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),o.confirm({message:t,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(t){e(t)})},goUrl:function(e){i&&i.goUrl(e)},goWeexUrl:function(e){a.push({url:"http://192.168.1.241:8080/dist/"+e+".js",animated:"true"},function(){})},goBack:function(){a.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(e,t){return s.fetch({method:"GET",type:"json",url:this.ajaxUrl()+e},t)},postData:function(e,t,n){return s.fetch({method:"POST",url:this.ajaxUrl()+e,type:"json",body:t},n)},loadingShow:function(){i&&i.onShowLoading()},loadingHide:function(){i&&i.onHideLoading()},goTop:function(){var e=this.$refs.goTop;r.scrollToElement(e,{offset:0})},getToKen:function(){var e=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(t){e.alert(t,"eleeleele"),t.ok&&0==t.data.status&&c.setItem("toKen",t.data.data.token)})},goCall:function(e){i&&i.onGoCall(e)},pickLocation:function(){var e=this;l.pick({index:2,items:[1,2,3,4],height:"500px"},function(t){"success"==t.result&&e.alert(t.data)})},goLogin:function(e){i&&i.onGoLogin(),u&&u.addEvenetListener("onLoginCallback",function(t){this.alert(2),this.alert(t),e(t)})}},created:function(){}}},4:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],c=i[2],l=i[3],u={id:e+":"+r,css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}},41:function(e,t,n){n(204);var o=n(1)(n(73),n(174),"data-v-f3ab7fb8",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/applyChoose.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] applyChoose.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},6:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.go-back[data-v-562db9ea]{\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 90px;\n  flex-direction: row;\n  align-items: center;\n  background-color:#fff;\n  border-bottom-width: 1px;\n  border-bottom-color: #eee;\n  border-bottom-style: solid;\n}\n.back-btn[data-v-562db9ea]{\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  height: 90px;\n}\n.back-arrow[data-v-562db9ea]{\n  margin-right: 8px;\n  font-family: 'icon';\n  font-size: 32px;\n  color: #cbd6ec;\n}\n.back[data-v-562db9ea]{\n  font-size: 28px;\n  color: #666;\n}\n.view-name[data-v-562db9ea]{\n  font-size: 32px;\n  font-weight: 500;\n  width: 450px;\n  text-align: center;\n  text-overflow:ellipsis;\n  -webkit-line-clamp:1;\n  overflow:hidden;\n  lines:1;\n}\n.clear[data-v-562db9ea]{\n  width: 120px;\n  height: 90px;\n  line-height: 90px;\n  font-size: 28px;\n  text-align: right;\n}\n",""])},7:function(e,t,n){n(9);var o=n(1)(n(5),n(8),"data-v-562db9ea",null);o.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] MyGoback.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},73:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=o(r),a=n(7),s=o(a);Vue.mixin(i.default),t.default={components:{MyGoback:s.default},data:function(){return{imageUrl:"https://tao.m.360che.com/"}},methods:{}}},8:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"go-back"},[n("div",{staticClass:"back-btn",on:{click:function(t){e.goBack()}}},[n("text",{staticClass:"back-arrow",style:{fontFamily:"icon",fontSize:"32px"}},[e._v("")]),e._v(" "),n("text",{staticClass:"back"},[e._v("返回")])]),e._v(" "),n("text",{staticClass:"view-name"},[e._v(e._s(e.title))]),e._v(" "),e.history?n("text",{staticClass:"clear",on:{click:e.clearItem}},[e._v("清除")]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(41);o.el="#root",t.default=new Vue(o)},9:function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("6f3f4229",o,!1)}});