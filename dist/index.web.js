// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var i=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];i[e]=function(){return t}})}return{esModule:o,exports:s,options:u}}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(s(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var s=f++;r=p||(p=o()),t=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=o(),t=u.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function u(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(20),l={},d=i&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=c(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var a=o[s],u=l[a.id];u.refs--,n.push(u)}t?(o=c(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var u=n[s];if(0===u.refs){for(var i=0;i<u.parts.length;i++)u.parts[i]();delete l[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){n(19);var r=n(1)(n(7),n(16),"data-v-b4cdaede",null);r.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("modal"),o=weex.requireModule("stream");t.default={methods:{alert:function(e){r.alert({message:e})},ajaxUrl:function(){return"https://tao-api-test.m.360che.com"},getData:function(e,t){return o.fetch({method:"GET",type:"json",url:this.ajaxUrl()+e},t)},postData:function(e,t,n){return o.fetch({method:"POST",url:e,headers:{"Content-Type":"application/json"},type:"json",body:JSON.stringify(t)},n)}},created:function(){}}},function(e,t,n){"use strict"},function(e,t,n){"use strict"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),s=r(o),a=n(13),u=r(a),i=n(12),c=r(i);Vue.mixin(s.default),t.default={components:{carousel:u.default,additional:c.default},data:{carouselData:{}},methods:{},created:function(){this.getData("http://www.atool.org/httptest.php",{},function(e){console.log(e,"ele")})}}},function(e,t,n){"use strict";var r=n(3);r.el="#root",new Vue(r)},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n\n\n\n\n\n",""])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n\n\n\n\n\n\n\n",""])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},function(e,t,n){n(18);var r=n(1)(n(5),n(15),"data-v-a0a138f2",null);r.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/index/additional.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] additional.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){n(17);var r=n(1)(n(6),n(14),null,null);r.options.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/index/carousel.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] carousel.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("text",[e._v("11e")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("text",[e._v("11e")]),e._v(" "),n("carousel",{attrs:{carouselData:e.carouselData}}),e._v(" "),n("additional"),e._v(" "),n("brandList")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("36e79299",r,!1)},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("44a4b1c7",r,!1)},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("48fe3ede",r,!1)},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=s[0],u=s[1],i=s[2],c=s[3],l={id:e+":"+o,css:u,media:i,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}}]);