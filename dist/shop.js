// { "framework": "Vue"} 

!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=101)}({0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("modal"),n=weex.requireModule("dom"),s=weex.requireModule("THAW"),r=weex.requireModule("navigator"),a=weex.requireModule("stream"),c=(weex.requireModule("animation"),weex.requireModule("storage")),l=weex.requireModule("picker");e.default={methods:{alert:function(t){o.alert({message:JSON.stringify(t)})},showConfirm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"确定删除吗？";console.log("will show confirm"),o.confirm({message:e,duration:.3,okTitle:"确定",cancelTitle:"取消"},function(e){t(e)})},goUrl:function(t){s&&s.goUrl(t)},goWeexUrl:function(t){r.push({url:"http://192.168.1.186:8080/dist/"+t+".js",animated:"true"},function(){})},goBack:function(){r.pop()},ajaxUrl:function(){return"https://tao-api-test.m.360che.com/v1"},getData:function(t,e){return a.fetch({method:"GET",type:"json",url:this.ajaxUrl()+t},e)},postData:function(t,e,i){return a.fetch({method:"POST",url:this.ajaxUrl()+t,type:"json",body:e},i)},loadingShow:function(){s&&s.onShowLoading()},loadingHide:function(){s&&s.onHideLoading()},goTop:function(){var t=this.$refs.goTop;n.scrollToElement(t,{offset:0})},getToKen:function(){var t=this;this.postData("/weex/token/generate","uid=525895&unique=testunique",function(e){t.alert(e,"eleeleele"),e.ok&&0==e.data.status&&c.setItem("toKen",e.data.data.token)})},goCall:function(t){s&&s.onGoCall(t)},pickLocation:function(){var t=this;l.pick({index:2,items:[1,2,3,4],height:"500px"},function(e){"success"==e.result&&t.alert(e.data)})}},created:function(){}}},1:function(t,e,i){var o,n,s=[];s.push(i(3)),o=i(2);var r=i(4);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/my/MyGoback.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-30d00a51",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o},101:function(t,e,i){var o,n,s=[];s.push(i(50)),o=i(41);var r=i(64);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/src/shop.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-3cebb54d",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o,t.exports.el="true",new Vue(t.exports)},109:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["shopInfo"],data:function(){return{}}}},11:function(t,e,i){var o,n,s=[];s.push(i(20)),o=i(15);var r=i(25);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/details/SailInfo.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-22f20009",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o},126:function(t,e){t.exports={header:{backgroundColor:"#ffffff",flexDirection:"row",alignItems:"center",paddingTop:48,paddingLeft:30,paddingBottom:36,paddingRight:30,borderBottomWidth:20,borderBottomStyle:"solid",borderBottomColor:"#f5f5f5"},"company-img":{width:160,height:160,marginRight:20,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomRightRadius:20,borderBottomLeftRadius:20,boxShadow:"0 0 10px #999"},"header-content":{flex:1,flexDirection:"column"},"shop-title":{height:50,marginBottom:8,flexDirection:"row",alignItems:"center"},"shop-name":{width:240,fontSize:36,fontWeight:"700",textOverflow:"ellipsis",WebkitLineClamp:1,overflow:"hidden",lines:1},"shop-type":{height:32,fontSize:24,lineHeight:24,marginLeft:10,marginRight:8,paddingTop:4,paddingBottom:4,paddingLeft:8,paddingRight:8,color:"#904208",backgroundColor:"#ffdd62"},"shop-vip":{width:32,height:32,marginRight:8},"shop-protect":{width:32,height:32,marginRight:8},"company-name":{flexDirection:"row"},"company-concat":{flexDirection:"row"},gray:{fontSize:28,lineHeight:40,color:"#999999"},name:{flex:1,fontSize:28,lineHeight:40,wordBreak:"break-all"}}},142:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["header"]},[i("image",{staticClass:["company-img"],attrs:{src:"https://i.kcimg.cn/data/avatar/new/58/61c6701364994a3f811c06041d95c19a_big.jpg-80x80.jpg"}}),i("div",{staticClass:["header-content"]},[i("div",{staticClass:["shop-title"]},[i("text",{staticClass:["shop-name"]},[t._v(t._s(t.shopInfo.company_name))]),i("text",{staticClass:["shop-type"]},[t._v("商家")]),i("image",{staticClass:["shop-vip"],attrs:{src:"https://tao.m.360che.com/m/images/vip.png"}}),i("image",{staticClass:["shop-protect"],attrs:{src:"https://tao.m.360che.com/m/images/bao.png"}})]),i("div",{staticClass:["company-name"]},[i("text",{staticClass:["gray"]},[t._v("公司名称：")]),i("text",{staticClass:["name"]},[t._v(t._s(t.shopInfo.licence_company))])]),i("div",{staticClass:["company-concat"]},[i("text",{staticClass:["gray"]},[t._v("联系人：")]),i("text",{staticClass:["name"]},[t._v(t._s(t.shopInfo.realname))])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},15:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("clipboard"),n=weex.requireModule("modal");e.default={props:["seller","publisher","groups"],computed:{identity:function(){var t=void 0;return 1===this.publisher?t="个人":2===this.publisher?t="经纪人":3===this.publisher&&(t="商家"),t},icons:function(){var t=[];return this.groups&&this.groups.forEach(function(e){1===e?t.push("https://tao.m.360che.com/m/images/vip.png"):2===e&&t.push("https://tao.m.360che.com/m/images/bao.png")}),t}},methods:{goShop:function(){},telPhone:function(){},copyInfo:function(){o.setString(this.seller.wechat_id),n.toast({message:"复制成功,请去微信添加好友",duration:1})}}}},2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","history"],data:function(){return{}},methods:{clearItem:function(){this.$emit("clearItem")}}}},20:function(t,e){t.exports={"title-text":{paddingTop:20,paddingBottom:20,paddingLeft:30,paddingRight:30,color:"#96A6C5",fontSize:28},"list-li":{position:"relative",paddingLeft:30,paddingRight:30,paddingTop:24,paddingBottom:24,flexDirection:"row",minHeight:40,alignItems:"center",backgroundColor:"#ffffff"},"list-li-more":{position:"relative",paddingLeft:30,paddingRight:30,paddingTop:24,paddingBottom:24,minHeight:40,backgroundColor:"#ffffff"},company:{marginBottom:10,flexDirection:"row",alignItems:"center"},"user-concat":{flexDirection:"row",alignItems:"center"},"li-front":{flex:1,flexDirection:"row",alignItems:"center"},"user-img":{width:72,height:72,marginRight:10},"user-name":{width:240,fontSize:28,lineHeight:40,marginRight:24,textOverflow:"ellipsis",WebkitLineClamp:1,overflow:"hidden",lines:1},status:{flexDirection:"row"},"user-type":{height:32,fontSize:24,lineHeight:24,marginRight:8,paddingTop:4,paddingBottom:4,paddingLeft:8,paddingRight:8,color:"#904208",backgroundColor:"#ffdd62"},"icon-img":{width:32,height:32,marginRight:8},"list-content":{width:160,maxWidth:160,flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},"li-to-store":{marginRight:8,fontSize:24,color:"#999999"},"li-arrow":{fontFamily:"'icon'",fontSize:24,color:"#999999"},"gray-title":{minWidth:140,fontSize:28,lineHeight:40,color:"#999999"},concat:{fontSize:28,lineHeight:40},"list-line":{position:"absolute",left:30,top:0,width:720,height:2,backgroundColor:"#eeeeee",zIndex:10},"concat-btn":{position:"relative",flexDirection:"row",height:100,alignItems:"center"},btn:{height:98,flex:1,paddingTop:12,paddingBottom:14,alignItems:"center"},"left-btn":{backgroundColor:"#EE6E47"},"right-btn":{backgroundColor:"#ffffff"},"concat-phone":{flexDirection:"row",alignItems:"center"},"wx-concat":{flexDirection:"row",alignItems:"center"},"icon-phone":{fontFamily:"'icon'",fontSize:28,color:"#ffffff",marginRight:10},"icon-wx":{fontFamily:"'icon'",fontSize:28,color:"#17a915",marginRight:10},phone:{height:48,lineHeight:48,fontSize:32,color:"#ffffff"},ascription:{fontSize:24,color:"#ffffff"},"wx-number":{height:48,lineHeight:48,fontSize:28,color:"#17a915"},"wx-copy":{fontSize:24,color:"#17a915"}}},25:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.seller&&t.groups?i("div",[i("text",{staticClass:["title-text"]},[t._v("卖家信息")]),i("div",{staticClass:["list-li"]},[i("div",{staticClass:["li-front"]},[i("image",{staticClass:["user-img"],attrs:{src:t.seller.avatar}}),i("text",{staticClass:["user-name"]},[t._v(t._s(t.seller.name))]),"个人"!==t.identity?i("div",{staticClass:["status"]},[i("text",{staticClass:["user-type"]},[t._v(t._s(t.identity))]),t._l(t.icons,function(t){return[i("image",{staticClass:["icon-img"],attrs:{src:t}})]})],2):t._e()]),"个人"!==t.identity?i("div",{staticClass:["list-content"],on:{click:t.goShop}},[i("text",{staticClass:["li-to-store"]},[t._v("进入店铺")]),i("text",{staticClass:["li-arrow"],style:{fontFamily:"icon",fontSize:"24px"}},[t._v("")])]):t._e()]),i("div",{staticClass:["list-li"]},[i("text",{staticClass:["list-line"]}),i("text",{staticClass:["gray-title"]},[t._v("联系人：")]),i("text",{staticClass:["concat"]},[t._v(t._s(t.seller.name))])]),t.seller.mobile||t.seller.wechat_id?i("div",{staticClass:["concat-btn"]},[i("text",{staticClass:["list-line"]}),t.seller.mobile&&null!==t.seller.mobile?i("div",{staticClass:["btn","left-btn"],on:{click:t.telPhone}},[i("div",{staticClass:["concat-phone"]},[i("text",{staticClass:["icon-phone"],style:{fontFamily:"icon",fontSize:"28px"}},[t._v("")]),i("text",{staticClass:["phone"]},[t._v(t._s(t.seller.mobile))])]),i("text",{staticClass:["ascription"]},[t._v("归属地："+t._s(t.seller.mobile_location))])]):t._e(),t.seller.wechat_id&&null!==t.seller.wechat_id?i("div",{staticClass:["btn","right-btn"],on:{click:t.copyInfo}},[i("div",{staticClass:["wx-concat"]},[i("text",{staticClass:["icon-wx"],style:{fontFamily:"icon",fontSize:"28px"}},[t._v("")]),i("text",{staticClass:["wx-number"]},[t._v(t._s(t.seller.wechat_id))])]),i("text",{staticClass:["wx-copy"]},[t._v("点击复制")])]):t._e()]):t._e()]):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0},3:function(t,e){t.exports={"go-back":{paddingLeft:10,paddingRight:10,height:90,flexDirection:"row",alignItems:"center",backgroundColor:"#ffffff",borderBottomWidth:1,borderBottomColor:"#eeeeee",borderBottomStyle:"solid"},"back-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",width:120,height:90},"back-arrow":{marginRight:8,fontFamily:"'icon'",fontSize:32,color:"#cbd6ec"},back:{fontSize:28,color:"#666666"},"view-name":{fontSize:32,fontWeight:"500",width:450,textAlign:"center",textOverflow:"ellipsis",WebkitLineClamp:1,overflow:"hidden",lines:1},clear:{width:120,height:90,lineHeight:90,fontSize:28,textAlign:"right"}}},4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["go-back"]},[i("div",{staticClass:["back-btn"],on:{click:function(e){t.goBack()}}},[i("text",{staticClass:["back-arrow"],style:{fontFamily:"icon",fontSize:"32px"}},[t._v("")]),i("text",{staticClass:["back"]},[t._v("返回")])]),i("text",{staticClass:["view-name"]},[t._v(t._s(t.title))]),t.history?i("text",{staticClass:["clear"],on:{click:t.clearItem}},[t._v("清除")]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},41:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=o(n),r=i(1),a=o(r),c=i(79),l=o(c),f=i(5),d=o(f),u=i(11),p=o(u);Vue.mixin(s.default);var g=weex.requireModule("storage"),h=weex.requireModule("clipboard"),m=weex.requireModule("modal");e.default={data:function(){return{goodsList:[],page:1,shopInfo:{},data:{id:0,cover:"https://img7.kcimg.cn/uploads/31/60/3160b2ed1115c3a99cd58f5fc51bc46a.jpg",mainTitle:"青岛解放 320马力 自卸车",secondTitle:"2017年9月 / 1万公里 / 8X4",price:"31.00",price_reduce:"yes",publisher:3,groups:[1,2]},ajaxIng:!1}},methods:{getList:function(){var t=this;if(this.ajaxIng)return!1;this.getData("/seller-truck/seller-truck?id="+this.shopInfo.id+"&page="+this.page,function(e){e.ok&&0==e.data.status&&(1==t.page?t.goodsList=e.data.data:t.goodsList=t.goodsList.concat(e.data.data),t.page++,e.data.data.length||(t.ajaxIng=!0))})},copyInfo:function(t){h.setString(t),m.toast({message:"复制成功,请去微信添加好友",duration:1})}},created:function(){var t=this;g.getItem("shopInfo",function(e){"success"==e.result&&(t.shopInfo=JSON.parse(e.data),t.alert(t.shopInfo),t.getList())})},components:{MyGoback:a.default,HeaderInfo:l.default,truckItem:d.default,SailInfo:p.default}}},5:function(t,e,i){var o,n,s=[];s.push(i(7)),o=i(6);var r=i(8);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/truckItem.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-5b336765",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o},50:function(t,e){t.exports={"concat-btn":{position:"relative",flexDirection:"row",minHeight:50,alignItems:"center",borderTopColor:"#eeeeee",borderTopWidth:1,borderTopStyle:"solid"},btn:{flex:1,paddingTop:12,paddingBottom:14,alignItems:"center"},"left-btn":{backgroundColor:"#EE6E47"},"concat-phone":{flexDirection:"row",alignItems:"center"},"wx-concat":{flexDirection:"row",alignItems:"center"},"icon-phone":{fontFamily:"'icon'",fontSize:28,color:"#ffffff",marginRight:10},"icon-wx":{fontFamily:"'icon'",fontSize:28,color:"#17a915",marginRight:10},phone:{height:48,lineHeight:48,fontSize:32,color:"#ffffff"},ascription:{fontSize:24,color:"#ffffff"},"wx-number":{height:48,lineHeight:48,fontSize:28,color:"#17a915"},"wx-copy":{fontSize:24,color:"#17a915"}}},6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(weex.requireModule("navigator"),weex.requireModule("storage"));e.default={data:function(){return{imageUrl:"https://tao.m.360che.com/"}},props:["truckData"],methods:{jump:function(t){var e=this;o.setItem("productId",t,function(t){"success"==t.result&&e.goWeexUrl("detail")})}}}},64:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["shop-item-con"]},[i("my-goback",{attrs:{title:t.shopInfo.company_name}}),i("scroller",{staticClass:["list"],attrs:{loadmoreoffset:"10"},on:{loadmore:t.getList}},[i("header-info",{attrs:{shopInfo:t.shopInfo}}),t._l(t.goodsList,function(t){return i("div",{key:t.id,staticClass:["cell"]},[i("truckItem",{attrs:{truckData:t}})],1)})],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},7:function(t,e){t.exports={flex:{flexDirection:"row"},"box-flex":{flex:1},"align-center":{alignItems:"center"},ml:{marginLeft:10},"truck-item":{width:750,padding:20,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#eeeeee"},image:{width:204,height:136},"truck-img":{width:204,height:136},"truck-info":{paddingLeft:20},"truck-title":{marginBottom:10},"second-title":{marginBottom:10},"truck-title-text":{lines:1,textOverflow:"ellipsis",fontSize:32,color:"#333333"},"second-title-text":{fontSize:24,color:"#999999"},"truck-price-text":{fontSize:32,color:"#ee6e47"},"price-small-text":{fontSize:30,color:"#ee6e47"},"user-tips":{backgroundColor:"#ffdd62"},"tips-text":{fontSize:24,color:"#904208"},"price-reduce":{width:36,height:26},"tips-vip":{width:32,height:28},"tips-bao":{width:32,height:34}}},79:function(t,e,i){var o,n,s=[];s.push(i(126)),o=i(109);var r=i(142);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhouhepeng/Hot/Weex/usedCar/components/index/HeaderInfo.vue",n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-43bbc256",n.style=n.style||{},s.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,s),t.exports=o},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{key:t.truckData.id,staticClass:["truck-item","flex"],on:{click:function(e){t.jump(t.truckData.id)}}},[i("div",{staticClass:["truck-img"]},[i("image",{staticClass:["image"],attrs:{src:t.truckData.cover}})]),i("div",{staticClass:["truck-info","box-flex"]},[i("div",{staticClass:["truck-title"]},[i("text",{staticClass:["truck-title-text"]},[t._v(t._s(t.truckData.mainTitle))])]),i("div",{staticClass:["second-title","box-flex"]},[i("text",{staticClass:["second-title-text"]},[t._v(t._s(t.truckData.secondTitle))])]),i("div",{staticClass:["other-info","flex","align-center"]},[i("div",{staticClass:["truck-price","flex","align-center"]},[i("text",{staticClass:["truck-price-text"]},[t._v(t._s(t.truckData.price))]),i("text",{staticClass:["price-small-text"]},[t._v("万")])]),"yes"==t.truckData.price_reduce?i("image",{staticClass:["price-reduce","ml"],attrs:{src:t.imageUrl+"m/images/price_reduce.png"}}):t._e(),2==t.truckData.publisher||3==t.truckData.publisher?i("div",{staticClass:["user-tips","ml"]},[2==t.truckData.publisher?i("text",{staticClass:["tips-text"]},[t._v("经纪人")]):t._e(),3==t.truckData.publisher?i("text",{staticClass:["tips-text"]},[t._v("商家")]):t._e()]):t._e(),-1!==t.truckData.groups.indexOf(2)?i("image",{staticClass:["tips-vip","ml"],attrs:{src:t.imageUrl+"m/images/vip.png"}}):t._e(),-1!==t.truckData.groups.indexOf(1)?i("image",{staticClass:["tips-bao","ml"],attrs:{src:t.imageUrl+"m/images/bao.png"}}):t._e()])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});