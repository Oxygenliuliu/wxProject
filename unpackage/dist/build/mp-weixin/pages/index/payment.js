(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/payment"],{"2b52":function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.dailyList,(function(e,n){var r=t._f("priceFormat")(e.BILL_PAIDMONEY,2,"￥",!0),a=t._f("priceFormat")(e.BILL_LEFTMONEY,2,"￥",!0),o=t._f("priceFormat")(e.BILL_LEFTMONEY,2,"￥",!0),i=t.__map(e.child,(function(e,n){var r=t._f("priceFormat")(e.BILLDETAIL_PRICE,2,"￥",!0),a=t._f("priceFormat")(e.BILLDETAIL_TOTALMONEY,2,"￥",!0);return{$orig:t.__get_orig(e),f3:r,f4:a}}));return{$orig:t.__get_orig(e),f0:r,f1:a,f2:o,l0:i}}))),r=t._f("priceFormat")(t.sales,2,"￥",!0);t.$mp.data=Object.assign({},{$root:{l1:n,f5:r}})},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"2f64":function(t,e,n){},"33cb":function(t,e,n){"use strict";n.r(e);var r=n("2b52"),a=n("f4b9");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("56bb");var i,s=n("f0c5"),u=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"73c1e99d",null,!1,r["a"],i);e["default"]=u.exports},"56bb":function(t,e,n){"use strict";var r=n("2f64"),a=n.n(r);a.a},"8bc3":function(t,e,n){"use strict";(function(t){n("8424");r(n("66fd"));var e=r(n("33cb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f4b9:function(t,e,n){"use strict";n.r(e);var r=n("fd92"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},fd92:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4795")),a=i(n("6748")),o=i(n("f9ff"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,a,o,i){try{var s=t[o](i),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){s(o,r,a,i,u,"next",t)}function u(t){s(o,r,a,i,u,"throw",t)}i(void 0)}))}}var c={components:{},data:function(){return{params:{},scrollHeight:"",dailyList:[],zMask:!1,temporaryData:{order_id:"",order_code:""},isPay:!1,tipShow:!1,optionsDataA:{},paymoney:"0"}},onLoad:function(e){var n=this;t.getSystemInfo({success:function(t){n.scrollHeight=t.windowHeight-50-40-31+"px"}});var r=t.getStorageSync("token");if(this.optionsDataA=e,r)this.loginThenJquery();else try{if(void 0!=e.q){var a=decodeURIComponent(e.q),o=a.indexOf("="),i=decodeURIComponent(a.substr(o+1,a.length));this.$store.commit("setParams",e),this.setNetInfo(i)}else if(void 0==e.q){this.$store.commit("setParams",e);var s=JSON.parse(e.data),u=s.params;this.$store.commit("changeDbname",u.dbname),this.$store.commit("changeUrl",u.url),this.$store.commit("changePort",u.port)}t.navigateTo({url:"../../pages/index/login"})}catch(c){}},methods:{previewImage:function(e,n){var r=[];e.forEach((function(t){r.push(t.img)})),console.log(r,n,66),t.previewImage({urls:r,current:n,indicator:"number"})},defaultImg:function(t,e){this.dailyList.some((function(n,r){var a=!1;if(r==t)return a=n.child.some((function(t,n){if(n==e)return t.img="111.67.204.75/l_img/unExist.png",!0})),a}))},setNetInfo:function(t){var e=t.replace(/\"/g,"").split(","),n=e[3].indexOf(":"),r=e[3].substr(0,n),a=e[3].substr(n+1,e.length);this.$store.commit("changeDbname",e[2]),this.$store.commit("setDbnameCode",e[2]),this.$store.commit("changePort",a),this.$store.commit("changeUrl",r)},loginThenJquery:function(){var e={};e=0!=Object.keys(this.optionsDataA).length?this.optionsDataA:this.optionsData;var n={};if(void 0!=e.q){var r=decodeURIComponent(e.q),a=r.indexOf("="),o=decodeURIComponent(r.substr(a+1,r.length)),i=o.replace(/\"/g,"").split(",");if(4==i.length){var s=JSON.parse(t.getStorageSync("userInfo")).personId||-1,u=i[1];if(u==s){var c={type:4,params:{QUERY_ID:2,MODE:0,BILL_ID:i[0],PartnerId:u}};this.someInit(c),this.queryData()}else t.showToast({title:"不是您的专属分享链接",icon:"none",duration:3e3})}else t.showToast({title:"参数错误",icon:"none"})}else if(void 0!=e){var f=JSON.parse(t.getStorageSync("userInfo")).personId||-1;if(-1!=e.data.indexOf("type")){n=JSON.parse(e.data);var l=n.params.PartnerId||"";f!=l?t.showToast({title:"不是您的专属分享链接",icon:"none",duration:3e3}):(this.someInit(n),this.queryData())}else{var d=e.data.replace(/\"/g,"").split(","),h=d[1];if(f!=h)t.showToast({title:"不是您的专属分享链接",icon:"none",duration:3e3});else{var p={type:4,params:{QUERY_ID:2,MODE:0,BILL_ID:d[0],PartnerId:h}};this.someInit(p),this.queryData()}}}else t.showToast({title:"分享错误，请重新分享",icon:"none"})},displayMore:function(t){var e=this;this.dailyList.some((function(n,r){if(n.BILL_ID==t)return n.isShow=!n.isShow,e.$set(e.dailyList,r,n),!0}))},someInit:function(e){var n=t.getStorageSync("userInfo");if(n){var r=3==e.type?1:0;if(this.params={QUERY_ID:2,MODE:r,BILL_ID:e.params.BILL_ID},n=JSON.parse(n),""==n.userName||""==n.userPassword)t.navigateTo({url:"../../pages/index/login"});else{var a=t.getStorageSync("token")||"",o={userName:n.userName,userPassword:n.userPassword,dbname:n.dbname||"",url:n.url,personName:n.personName,personId:n.personId,port:n.port||7798};this.$store.commit("changeLoginParams",o),this.$store.commit("changeLoginToken",a)}}else t.navigateTo({url:"../../pages/index/login"})},wrquest:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params;return t.showLoading({title:"加载中..."}),new Promise((function(r,a){t.request({url:e.transitUrl+"/transit_server",method:"POST",data:{interface_add:"http://"+e.url+":"+e.port+"/public/query",token:e.token,params:JSON.stringify(n)},success:function(e){0==e.data.status?r(e.data.data):a(t.showToast({title:"异常"+e.message,icon:"none"}))},fail:function(e){t.showToast({title:"网络异常",icon:"none"})},complete:function(e){t.hideLoading()}})}))},queryData:function(){var t=arguments,e=this;return u(r.default.mark((function n(){var a,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:e.params,n.next=3,e.wrquest(a);case 3:o=n.sent,e.dailyList=e.createDoubleArr(o),e.appendCheckBox();case 6:case"end":return n.stop()}}),n)})))()},contactDoubleArr:function(t){var e=this.createDoubleArr(t);e.forEach((function(t){t.child.length}));var n=this.dailyList;return n.forEach((function(t){t.child.length})),e.forEach((function(t,e){var r=n.some((function(e,n){if(t.BILL_ID==e.BILL_ID)return e.child=e.child.concat(t.child),!0}));r||n.push(t)})),n.forEach((function(t){t.child.length})),n},createDoubleArr:function(t){var e=this,n=[];return t.filter((function(t){var e={};e["BILL_CODE"]=t.BILL_CODE,e["BILL_DATE_STR"]=t.BILL_DATE_STR,e["BILL_ID"]=t.BILL_ID,e["BILL_LEFTMONEY"]=t.BILL_LEFTMONEY,e["BILL_PAIDMONEY"]=Math.abs(Number(t.BILL_TOTALMONEY))-Math.abs(Number(t.BILL_LEFTMONEY)),e["child"]=[],n.push(e)})),n=n.filter((function(t,e,n){return n.findIndex((function(e){return e.BILL_CODE==t.BILL_CODE}))===e})),n.forEach((function(n,r){t.forEach((function(t,r){var a=!1,o={};n.BILL_ID==t.BILL_ID&&(a=!0,o["BILLDETAIL_GOODSNAME"]=t.BILLDETAIL_GOODSNAME,o["BILL_LEFTMONEY"]=t.BILL_LEFTMONEY,o["BILLDETAIL_W"]=t.BILLDETAIL_W,o["BILLDETAIL_PRICE"]=t.BILLDETAIL_PRICE,o["BILLDETAIL_H"]=t.BILLDETAIL_H,o["BILLDETAIL_TOTALQTY"]=t.BILLDETAIL_QTY,o["BILLDETAIL_TOTALMONEY"]=t.BILLDETAIL_TOTALMONEY,o["img"]=e.wpublic.getImgUrl(t.BILLDETAIL_ID)),a&&n.child.push(o)}))})),n},appendCheckBox:function(){var t=this;0!=this.dailyList.length?(this.tipShow=!1,this.dailyList.forEach((function(e,n){t.$set(t.dailyList[n],"isTrue",!0),t.$set(t.dailyList[n],"isShow",!0),e.child.length>0&&e.child.forEach((function(n,r){e.img=t.wpublic.getImgUrl(e.BILLDETAIL_ID)}))}))):this.tipShow=!0},canle:function(){t.showModal({title:"提示",content:"是否放弃付款,狠心离开",success:function(e){e.confirm&&t.switchTab({url:"../../pages/index/index"})}})},package:function(){var t=[];this.dailyList.forEach((function(e){e.isTrue&&e.child.some((function(n,r){var a={id:0};return a.LpTotal=n.BILL_LEFTMONEY,a.total=n.BILL_LEFTMONEY,a.refbillid=e.BILL_ID,t.push(a),!0}))}));var e={MODE:1,order:{id:0,type:2,Date:this.wpublic.getDay(0),partnerid:this.partnerid,paymenttypeid:258,paymoney:this.sales,total:this.sales,remark:"微信小程序临时收款"},OrderDetail:t};return e},payStatus:function(){var t=!1;return t=this.dailyList.some((function(t){if(t.isTrue)return!0})),t},complete:function(e){var n=this;return new Promise((function(r,a){t.request({url:n.transitUrl+"/transit_server",method:"POST",data:{interface_add:"http://"+n.url+":"+n.port+"/public/common",token:n.token,params:JSON.stringify(e)},success:function(e){var n=o.default.loginJudge(e.data.status);if(0==n)return!1;0==e.data.status?r(e.data):a(t.showToast({title:"订单修改失败"+e.data.message,icon:"none"}))},fail:function(e){a(t.showToast({title:"网络繁忙,稍后重试"+e.message,icon:"none"}))}})}))},pay:function(){var e=this;return u(r.default.mark((function n(){var a,o,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.payStatus()){n.next=3;break}return t.showToast({title:"请选择单子",icon:"none"}),n.abrupt("return");case 3:if(""==e.partnerid){n.next=11;break}return a=e.package(),n.next=7,e.complete(a).catch((function(){return"wrong"}));case 7:o=n.sent,"wrong"!=o?0==o.status?(i=o.PAYSERVER_URL,e.paymoney=a.order.paymoney,e.temporaryData.order_id=o.order_id,e.temporaryData.order_code=o.order_code_long,e.taskPay(e.temporaryData.order_code,i)):t.showToast({title:o.message,icon:"none"}):t.showToast({title:"异常",icon:"none"}),n.next=12;break;case 11:t.showToast({title:"客户ID获取异常",icon:"none"});case 12:case"end":return n.stop()}}),n)})))()},beforeWXpay:function(e,n,r){t.showLoading({title:"发起支付中..."});var o=JSON.parse(t.getStorageSync("userInfo")),i=t.getStorageSync("personName"),s=t.getStorageSync("token"),u={trade_no:n||"",customer_id:o.personId,customer_name:i,erp_ip:this.url+":"+this.port,receipt_id:this.temporaryData.order_id,token:s,total_fee:this.paymoney};return new Promise((function(n,o){wx.login({success:function(i){var s=i.code;t.request({url:e,method:"POST",data:{Request_url:r+"/unifiedorder",token:(0,a.default)(s+"FYDL"),code:s,params:JSON.stringify(u)},success:function(t){n(t)},fail:function(e){t.showToast({title:"请求失败错误码201",icon:"none"}),o()}})}})}))},taskPay:function(t,e){var n=this;return u(r.default.mark((function a(){var o;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.beforeWXpay(n.payUrl,t,e).catch((function(){return{state:500}}));case 2:o=r.sent,200==o.statusCode&&200==o.data.status?n.WXpay(o.data):n.taskPayWrong(o);case 4:case"end":return r.stop()}}),a)})))()},taskPayWrong:function(e){t.showToast({title:e.data.RETURN_MSG,icon:"none"})},WXpay:function(e){var n=this;t.requestPayment({provider:"wxpay",timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(e){e.errMsg,t.navigateTo({url:"../../pages/order/payresult?order_id="+n.temporaryData.order_code})},fail:function(e){t.showToast({title:"支付已取消",icon:"none"})},complete:function(){t.hideLoading()}})}},onPullDownRefresh:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.queryData();case 2:t.stopPullDownRefresh();case 3:case"end":return n.stop()}}),n)})))()},created:function(){try{var e=t.getStorageSync("userInfo");e=JSON.parse(e);var n=t.getStorageSync("token")||"",r={userName:e.userName,userPassword:e.userPassword,dbname:e.dbname||"",url:e.url,personName:e.personName,personId:e.personId,port:e.port||7798};this.$store.commit("changeLoginParams",r),this.$store.commit("changeLoginToken",n)}catch(a){}},computed:{url:{get:function(){return this.$store.state.loginParams.url},set:function(){return""}},port:{get:function(){return this.$store.state.loginParams.port},set:function(){return 7798}},dbname:{get:function(){return this.$store.state.loginParams.dbname},set:function(){return""}},token:{get:function(){return this.$store.state.token},set:function(){return""}},num:{set:function(){return 0},get:function(){var t=0;return this.dailyList.forEach((function(e){e.isTrue&&t++})),t}},partnerid:{set:function(){return 0},get:function(){return this.$store.state.loginParams.personId}},sales:{set:function(){return 0},get:function(){var t=0;return this.dailyList.forEach((function(e){e.isTrue&&(t+=Math.abs(parseFloat(e.BILL_LEFTMONEY)))})),t}},optionsData:{set:function(){return 0},get:function(){return this.$store.state.params}},transitUrl:{set:function(){return 0},get:function(){return this.$store.state.transitUrl}},payUrl:{set:function(){return 0},get:function(){return this.$store.state.payUrl}}}};e.default=c}).call(this,n("543d")["default"])}},[["8bc3","common/runtime","common/vendor"]]]);