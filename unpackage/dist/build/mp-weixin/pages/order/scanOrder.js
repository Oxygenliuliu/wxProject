(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/scanOrder"],{2838:function(t,e,n){},"44bd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795")),a=o(n("6748")),i=o(n("f9ff"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){s(i,r,a,o,u,"next",t)}function u(t){s(i,r,a,o,u,"throw",t)}o(void 0)}))}}var c={components:{},data:function(){return{params:{},scrollHeight:"",dailyList:[],zMask:!1,temporaryData:{order_id:"",order_code:""},isPay:!1,tipShow:!1,optionsDataA:{},paymoney:0,scanParamsData:[]}},onLoad:function(e){var n=this;t.getSystemInfo({success:function(t){n.scrollHeight=t.windowHeight-50-40-31+"px"}});var r=e.data;this.scanParamsData=r.replace(/\"/g,"").split(","),this.loginThenJquery(r)},methods:{previewImage:function(e,n){var r=[];e.forEach((function(t){r.push(t.img)})),console.log(r,n,66),t.previewImage({urls:r,current:n,indicator:"number"})},defaultImg:function(t,e){this.dailyList.some((function(n,r){var a=!1;if(r==t)return a=n.child.some((function(t,n){if(n==e)return t.img="111.67.204.75/l_img/unExist.png",!0})),a}))},setNetInfo:function(t){var e={dbname:t.params.dbname||"",url:t.params.url||"",port:t.params.port||7798};this.$store.commit("changeDbname",e.dbname),this.$store.commit("changePort",e.port),this.$store.commit("changeUrl",e.url)},loginThenJquery:function(e){var n=this.scanParamsData[1],r=JSON.parse(t.getStorageSync("userInfo")).personId||-1;if(console.log(this.scanParamsData),n==r){var a={type:4,params:{QUERY_ID:2,MODE:0,BILL_ID:this.scanParamsData[0],PartnerId:this.scanParamsData[1]}};this.someInit(a),this.queryData()}else t.showToast({title:"不是您的单子二维码",icon:"none"})},displayMore:function(t){var e=this;this.dailyList.some((function(n,r){if(n.BILL_ID==t)return n.isShow=!n.isShow,e.$set(e.dailyList,r,n),!0}))},someInit:function(t){this.params=t.params},wrquest:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params;return t.showLoading({title:"加载中..."}),new Promise((function(r,a){t.request({url:e.transitUrl+"/transit_server",method:"POST",data:{interface_add:"http://"+e.url+":"+e.port+"/public/query",token:e.token,params:JSON.stringify(n)},success:function(e){0==e.data.status?r(e.data.data):a(t.showToast({title:"异常"+e.message,icon:"none"}))},fail:function(e){t.showToast({title:"网络异常",icon:"none"})},complete:function(e){t.hideLoading()}})}))},queryData:function(){var t=arguments,e=this;return u(r.default.mark((function n(){var a,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:e.params,n.next=3,e.wrquest(a);case 3:i=n.sent,e.dailyList=e.createDoubleArr(i),e.appendCheckBox();case 6:case"end":return n.stop()}}),n)})))()},contactDoubleArr:function(t){var e=this.createDoubleArr(t);e.forEach((function(t){t.child.length}));var n=this.dailyList;return n.forEach((function(t){t.child.length})),e.forEach((function(t,e){var r=n.some((function(e,n){if(t.BILL_ID==e.BILL_ID)return e.child=e.child.concat(t.child),!0}));r||n.push(t)})),n.forEach((function(t){t.child.length})),n},createDoubleArr:function(t){var e=this,n=[];return t.filter((function(t){var e={};e["BILL_CODE"]=t.BILL_CODE,e["BILL_DATE_STR"]=t.BILL_DATE_STR,e["BILL_ID"]=t.BILL_ID,e["BILL_LEFTMONEY"]=t.BILL_LEFTMONEY,e["BILL_PAIDMONEY"]=Math.abs(Number(t.BILL_TOTALMONEY))-Math.abs(Number(t.BILL_LEFTMONEY)),e["child"]=[],n.push(e)})),n=n.filter((function(t,e,n){return n.findIndex((function(e){return e.BILL_CODE==t.BILL_CODE}))===e})),n.forEach((function(n,r){t.forEach((function(t,r){var a=!1,i={};n.BILL_ID==t.BILL_ID&&(a=!0,i["BILLDETAIL_GOODSNAME"]=t.BILLDETAIL_GOODSNAME,i["BILL_LEFTMONEY"]=t.BILL_LEFTMONEY,i["BILLDETAIL_W"]=t.BILLDETAIL_W,i["BILLDETAIL_PRICE"]=t.BILLDETAIL_PRICE,i["BILLDETAIL_H"]=t.BILLDETAIL_H,i["BILLDETAIL_TOTALQTY"]=t.BILLDETAIL_QTY,i["BILLDETAIL_TOTALMONEY"]=t.BILLDETAIL_TOTALMONEY,i["img"]=e.wpublic.getImgUrl(t.BILLDETAIL_ID)),a&&n.child.push(i)}))})),n},appendCheckBox:function(){var t=this;0!=this.dailyList.length?(this.tipShow=!1,this.dailyList.forEach((function(e,n){t.$set(t.dailyList[n],"isTrue",!0),e.child.length>0&&e.child.forEach((function(n,r){e.img=t.wpublic.getImgUrl(e.BILLDETAIL_ID)}))}))):this.tipShow=!0},canle:function(){t.showModal({title:"提示",content:"是否放弃付款,狠心离开",success:function(e){e.confirm&&t.switchTab({url:"../../pages/index/index"})}})},package:function(){var t=[];this.dailyList.forEach((function(e){e.isTrue&&e.child.some((function(n,r){var a={id:0};return a.LpTotal=n.BILL_LEFTMONEY,a.total=n.BILL_LEFTMONEY,a.refbillid=e.BILL_ID,t.push(a),!0}))}));var e={MODE:1,order:{id:0,type:2,Date:this.wpublic.getDay(0),partnerid:this.partnerid,paymenttypeid:258,paymoney:this.sales,total:this.sales,remark:"微信小程序临时收款"},OrderDetail:t};return e},payStatus:function(){var t=!1;return t=this.dailyList.some((function(t){if(t.isTrue)return!0})),t},complete:function(e){var n=this;return new Promise((function(r,a){t.request({url:n.transitUrl+"/transit_server",method:"POST",data:{interface_add:"http://"+n.url+":"+n.port+"/public/common",token:n.token,params:JSON.stringify(e)},success:function(e){var n=i.default.loginJudge(e.data.status);if(0==n)return!1;0==e.data.status?r(e.data):a(t.showToast({title:"订单修改失败"+e.data.message,icon:"none"}))},fail:function(e){a(t.showToast({title:"网络繁忙,稍后重试"+e.message,icon:"none"}))}})}))},pay:function(){var e=this;return u(r.default.mark((function n(){var a,i,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.payStatus()){n.next=3;break}return t.showToast({title:"请选择单子",icon:"none"}),n.abrupt("return");case 3:if(""==e.partnerid){n.next=11;break}return a=e.package(),n.next=7,e.complete(a).catch((function(){return"wrong"}));case 7:i=n.sent,"wrong"!=i?0==i.status?(o=i.PAYSERVER_URL,e.paymoney=a.order.paymoney,e.temporaryData.order_id=i.order_id,e.temporaryData.order_code=i.order_code_long,e.taskPay(e.temporaryData.order_code,o)):t.showToast({title:i.message,icon:"none"}):t.showToast({title:"异常",icon:"none"}),n.next=12;break;case 11:t.showToast({title:"客户ID获取异常",icon:"none"});case 12:case"end":return n.stop()}}),n)})))()},beforeWXpay:function(e,n,r){t.showLoading({title:"发起支付中..."});var i=JSON.parse(t.getStorageSync("userInfo")),o=t.getStorageSync("personName"),s=t.getStorageSync("token"),u={trade_no:n||"",customer_id:i.personId,customer_name:o,erp_ip:this.url+":"+this.port,receipt_id:this.temporaryData.order_id,token:s,total_fee:this.paymoney};return new Promise((function(n,i){wx.login({success:function(o){var s=o.code;t.request({url:e+"/unifiedorder",method:"POST",data:{Request_url:r+"/unifiedorder",token:(0,a.default)(s+"FYDL"),code:s,params:JSON.stringify(u)},success:function(t){n(t)},fail:function(e){t.showToast({title:"请求失败错误码201",icon:"none"}),i()}})}})}))},taskPay:function(t,e){var n=this;return u(r.default.mark((function a(){var i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.beforeWXpay(n.payUrl,t,e).catch((function(){return{state:500}}));case 2:i=r.sent,200==i.statusCode&&200==i.data.status?n.WXpay(i.data):n.taskPayWrong(i);case 4:case"end":return r.stop()}}),a)})))()},taskPayWrong:function(e){t.showToast({title:e.data.RETURN_MSG,icon:"none"})},WXpay:function(e){var n=this;t.requestPayment({provider:"wxpay",timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(e){e.errMsg,t.navigateTo({url:"../../pages/order/payresult?order_id="+n.temporaryData.order_code})},fail:function(e){t.showToast({title:"支付已取消",icon:"none"})},complete:function(){t.hideLoading()}})}},onPullDownRefresh:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.queryData();case 2:t.stopPullDownRefresh();case 3:case"end":return n.stop()}}),n)})))()},computed:{url:{get:function(){return this.$store.state.loginParams.url},set:function(){return""}},port:{get:function(){return this.$store.state.loginParams.port},set:function(){return 7798}},dbname:{get:function(){return this.$store.state.loginParams.dbname},set:function(){return""}},token:{get:function(){return this.$store.state.token},set:function(){return""}},num:{set:function(){return 0},get:function(){var t=0;return this.dailyList.forEach((function(e){e.isTrue&&t++})),t}},partnerid:{set:function(){return 0},get:function(){return this.$store.state.loginParams.personId}},sales:{set:function(){return 0},get:function(){var t=0;return this.dailyList.forEach((function(e){e.isTrue&&(t+=Math.abs(parseFloat(e.BILL_LEFTMONEY)))})),t}},optionsData:{set:function(){return 0},get:function(){return this.$store.state.params}},transitUrl:{set:function(){return 0},get:function(){return this.$store.state.transitUrl}},payUrl:{set:function(){return 0},get:function(){return this.$store.state.payUrl}}}};e.default=c}).call(this,n("543d")["default"])},"4d47":function(t,e,n){"use strict";(function(t){n("8424");r(n("66fd"));var e=r(n("9e08"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},7606:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.dailyList,(function(e,n){var r=t._f("priceFormat")(e.BILL_PAIDMONEY,2,"￥",!0),a=t._f("priceFormat")(e.BILL_LEFTMONEY,2,"￥",!0),i=t._f("priceFormat")(e.BILL_LEFTMONEY,2,"￥",!0),o=t.__map(e.child,(function(e,n){var r=t._f("priceFormat")(e.BILLDETAIL_PRICE,2,"￥",!0),a=t._f("priceFormat")(e.BILLDETAIL_TOTALMONEY,2,"￥",!0);return{$orig:t.__get_orig(e),f3:r,f4:a}}));return{$orig:t.__get_orig(e),f0:r,f1:a,f2:i,l0:o}}))),r=t._f("priceFormat")(t.sales,2,"￥",!0);t.$mp.data=Object.assign({},{$root:{l1:n,f5:r}})},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"7bf5":function(t,e,n){"use strict";n.r(e);var r=n("44bd"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"9e08":function(t,e,n){"use strict";n.r(e);var r=n("7606"),a=n("7bf5");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("c6fb");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"ce386a90",null,!1,r["a"],o);e["default"]=u.exports},c6fb:function(t,e,n){"use strict";var r=n("2838"),a=n.n(r);a.a}},[["4d47","common/runtime","common/vendor"]]]);