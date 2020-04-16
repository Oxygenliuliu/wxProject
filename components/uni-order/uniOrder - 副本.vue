<template>
	<view class="con-conent">
		<view class="type" v-if="!pageSettlement">
			<block v-for="(item,index) in tabBars" :key='index'>
				<view class="type-box" :data-current="index" @tap='ontabtap' :class="{'active-box':item.isTrue}">{{item.name}}</view>
			</block>
		</view>
		<swiper class="swiper-box" :current='tabIndex' :duration="300"  :style="{ 'height':scrollHeight }" @change="ontabchange">
			<swiper-item v-for="(tab,index1) in newsList" :key='index1'>
				<view class="dailycashlist" v-if="dailyList.length != 0">
					<scroll-view  scroll-y="true" @scrolltolower='refresh()' :style="{ 'height':scrollHeight }" scroll-with-animation="true">
						<view class="daily-list" v-for="(item,index) in dailyList" :key="index">
							<view class="daily-head">
								<view class="daily-time">开单日期: {{item.BILL_DATE_STR}}</view>
								<view class="daily-name">单号: {{item.BILL_CODE}}</view>
								<label class="chekc-btn" v-if="pageSettlement" @tap='changeCheckStatu(item.BILL_CODE,item.BILL_PARTNER_NAME)'>
									<!-- #ifdef H5 -->
									<checkbox :checked="item.isTrue" :disabled="item.BILL_PARTNER_NAME != orderName"></checkbox>
									<!-- #endif -->
									<!-- #ifndef H5 -->
									<checkbox :checked="item.isTrue" :disabled="(item.BILL_PARTNER_NAME != orderName)&&(orderName!='')"></checkbox>
									<!-- #endif -->
								</label>
							</view>
							<view class="detail-content">
								<view class="daily-customer">
									<view>{{item.BILL_PARTNER_NAME}}</view>
								</view>
								<view class="daily-sale">
									<view class="all-sale">
										<span class='sale-title'>单子金额: </span><span class='money'>{{item.BILL_TOTALMONEY|priceFormat(2,'￥',true)}}</span>
									</view>
									<view class="not-sale">
										<span class='sale-title'>未结金额:</span><span class='money warning'>{{item.BILL_LEFTMONEY|priceFormat(2,'￥',true)}}</span>
									</view>
									<view class="not-sale" v-if="pageSettlement">
										<span class='sale-title'>收款金额:</span><span class='money' style='color: #999;'>{{item.PAY_MONEY|priceFormat(2,'￥',true)}}</span>
									</view>
								</view>
								<view class="daily-status">
									<view  v-if="!pageSettlement">
										<span class='text over' v-show='item.BILL_STATUS == 0'>待登账</span>
										<span class='text over' v-show='item.BILL_STATUS == 1'>已登账</span>
										<span class='text warning' v-show='item.BILL_STATUS == 2'>已红冲</span>
									</view>
									<view class="form-where">
										<view class="tag" v-show="item.BILL_PLATFORM==0"><span class='iconfont iconpc'></span></view>
										<view class="tag"  v-show="item.BILL_PLATFORM==1"><span class='iconfont iconapp'></span></view>
										<view class="tag"  v-show="item.BILL_PLATFORM==2"><span class='iconfont iconshouji'></span></view>
									</view>
								</view>
								</view><!--  -->
								<view class="btns" v-if="!pageSettlement">
									<view v-if="tabIndex==2" class="btn goPayPage" @tap="goReceivables(item.BILL_CODE,item.BILL_PARTNER_NAME)">
										<span class='goPay'>去结账</span>
									</view>
									<view class="btn goPayPage" @tap='goDetailed(item)'>
										<span class='goPay'>明 细</span>
									</view>
									<view class="btn goPayPage" @tap='editOrder(item)' v-if='item.BILL_STATUS != 1'>
										<span class='goPay'>修改订单</span>
									</view>
								</view>
						</view>
					</scroll-view>
				</view>
				<view class="not-data" v-show="dailyList.length == 0">没有数据</view>
			</swiper-item>
		</swiper>
		<view class="recfooter" v-if="pageSettlement">
			<view class="recprice">
				<view class="rececheckbox">
					<label class="uni-list-cell uni-list-cell-pd" @tap='chooseAll()'>
						<view><checkbox :disabled="orderName==''" :checked="allCheck==true" style="transform: scale(0.8);"/><text>全选</text></view>
					</label>
				</view>
			</view>
			<view class="pricebtn"><text>数量: {{orderNums}}<text class="left">{{totalMoney|priceFormat(2,'￥',true)}}</text></text><text class="right" @tap="goReceivableInfo()">去结算</text></view>
		</view>
	</view>
</template>

<script>
	import judge from '@/common/js/loginPublic.js'
	import lLoading from '@/components/uni-lloading/l_loading.vue'
	export default {
		components: {
			lLoading
		},
		props: {
			scrollHeight: {
				type: [Number,String],
				default:function(){
					return 0
				}
			},
			pageSettlement: { // 来自收款页面为True订单页面为false 样式功能不一致
				type: Boolean,
				default: function(){
					return false
				}
			},
			orderQuerry: {//从订单页面进入收款页面传入订单号和客户名
				type: Object,
				default: function(){
					return {key: false}
				}
			},
			maskTop: { //收款页面弹窗弹出高度
				type: String,
				default: function(){
					return ''
				}
			},
			cs: {
				type: Object,
				default: function(){
					return {name: '无敌'}
				}
			}
		},
		data() {
			return {
				tabBars:[//顶部滑动切换标题
					{id: 0,name: '全部',isTrue: true},
					{id: 1,name: '已结清',isTrue: false},
					{id: 2,name: '未结清',isTrue: false},
				],
				dailyList:[],//页面订单显示数组
				tabIndex: 0,//swiper下标
				orderList:{allData: [],clear: [],notClear: []},//订单页面需要三个数组存储数据全部、未结清、已结清防止已有数据再次请求
				newsList:[],//swiper分多少个页面页占位数组
				params :{//搜索条件
					QUERY_ID: 6,
					BEGINDATE: '1900-01-01',
					ENDDATE: this.wpublic.getDay(1),//日期引用公共方法
					KEYWORDS: '',
					ORDERID: '',
					// PARTNER_ID: '',
					// OPERATOR_ID:'',
					// NEEDSUMMARY:'0',
					BILLTYPE: 1,
					PAGE_SIZE: 8,
					PAGE_INDEX: 0,
					STATUS: '0'
				},
				pageLarge:{nowIndexA: 0,nowIndexB: 0,nowIndexC: 0},//现在处于页数
				pageMaxSize:{pageA: -1,pageB: -1,pageC: -1},//最大页数
				nowInfo:{nowIndex: 0,maxSize: -1},//传入接口页面参数
				allCheck: false,//全选
				orderNums: 0,//订单数
				zMask: false,//查询时的遮罩层
				comName: '', 
			}
		},
		methods: {
			async refresh(){
				if(this.nowInfo.maxSize >= this.nowInfo.nowIndex || this.nowInfo.maxSize == -1){
					this.addPageInfo();
					let data = await this.wrquest(this.params);
					this.setDisplayData(data);
				}else{
					uni.showToast({title:'到底了',icon: 'none'})
					return
				}
				
			},
			setDisplayData(data){
				let arr = this.returnAppendCheckBox(data);
				console.log(arr)
				this.dailyList = this.dailyList.concat(arr);
				switch (this.tabIndex){
					case 0://全部
						this.orderList.allData = this.dailyList.concat(arr);
						break;
					case 1://未结清
						this.orderList.clear = this.dailyList.concat(arr);
						break;
					case 2:// 已结清
						this.orderList.notClear = this.dailyList.concat(arr);
						break;
					default:
						break;
				}
				console.log(this.dailyList)
			},
			addPageInfo(){ // 当前页数+1
				switch (this.tabIndex){
					case 0://全部
					this.nowInfo.nowIndex = this.pageLarge.nowIndexA = this.pageLarge.nowIndexA+1;
					this.nowInfo.maxSize = this.pageMaxSize.pageA;
						break;
					case 1://未结清
					this.nowInfo.nowIndex = this.pageLarge.nowIndexB = this.pageLarge.nowIndexB+1;
					this.nowInfo.maxSize = this.pageMaxSize.pageB;
						break;
					case 2:// 已结清
					this.nowInfo.nowIndex = this.pageLarge.nowIndexC = this.pageLarge.nowIndexC+1;
					this.nowInfo.maxSize = this.pageMaxSize.pageC;
						break;
					default:
						break;
				}
			},
			setPageInfo(){ //赋值切换当前页数和最大页数
				switch (this.tabIndex){
					case 0://全部
					this.nowInfo.nowIndex = this.pageLarge.nowIndexA;
					this.nowInfo.maxSize = this.pageMaxSize.pageA;
						break;
					case 1://未结清
					this.nowInfo.nowIndex = this.pageLarge.nowIndexB;
					this.nowInfo.maxSize = this.pageMaxSize.pageB;
						break;
					case 2:// 已结清
					this.nowInfo.nowIndex = this.pageLarge.nowIndexC;
					this.nowInfo.maxSize = this.pageMaxSize.pageC;
						break;
					default:
						break;
				}
			},
			setMaxPage(max){//设置最大页
				switch (this.tabIndex){
					case 0://全部
					this.nowInfo.maxSize = this.pageMaxSize.pageA = parseInt((max / 8));
						break;
					case 1://未结清
					this.nowInfo.maxSize = this.pageMaxSize.pageB = parseInt((max / 8));
						break;
					case 2:// 已结清
					this.nowInfo.maxSize = this.pageMaxSize.pageC = parseInt((max / 8));
						break;
					default:
						break;
				}
			},
			someInit(){//初始化条件与数据
				this.params = {
					QUERY_ID: 6,
					BEGINDATE: '1900-01-01',
					ENDDATE: this.wpublic.getDay(1),//new Date().toISOString().slice(0, 10),
					KEYWORDS: '',
					ORDERID: '',
					// PARTNER_ID: '',
					// OPERATOR_ID:'',
					// NEEDSUMMARY:'0',
					BILLTYPE: 1,
					PAGE_SIZE: 8,
					PAGE_INDEX: 0,
					STATUS: '0'
				}
				this.pageLarge = {nowIndexA: 0,nowIndexB: 0,nowIndexC: 0};//现在处于页数
				this.pageMaxSize = {pageA: -1,pageB: -1,pageC: -1};//最大页数
				this.nowInfo = {nowIndex: 0,maxSize: 0};//传入接口页面参数
				if(this.pageSettlement)this.params.STATUS = '2'//收款页面只展示未结清单子
				this.changeType(0);//重置swiper位置
				this.tabIndex = 0;//重置swiper位置
				this.dailyList = []
				this.orderList.allData = this.orderList.clear = this.orderList.notClear = [];//重置各个数组
			},
			goDetailed(data){//去订单详情
				let power = uni.getStorageSync("loginData").lookOrder;
				if(power == 1){
					if(this.pageSettlement)return
					uni.navigateTo({
						url: '../../pages/order/orderDetails?orderSub=' + JSON.stringify(data) //url传参无法传递对象，先转成字符串
					})
				}else{
					uni.showToast({title: '没有权限',icon: 'none'})
				}
			},
			changeType(id){ //更换订单类别
				this.tabBars.forEach(i=>{
					i.isTrue = false
					if(i.id == id){
						i.isTrue = true;
					}
				})
			},
			ontabtap(e) {//点击切换类别
				let index = parseInt(e.target.dataset.current || e.currentTarget.dataset.current);
				this.tabIndex = index;
				this.setPageInfo();
				this.changeType(index);
				this.params.STATUS = index;
				this.setOrderList(index,this.params);
			},
			ontabchange(e) {//滑动切换类别
				let index = parseInt(e.target.current || e.detail.current);
				this.tabIndex = index
				this.setPageInfo();
				this.changeType(index);
				this.params.STATUS = index;
				this.setOrderList(index,this.params);
			},
			changeScreen(data){//改变筛选条件 父组件调用
				let data1 = data.data1;
				let data2 = data.data2;
				this.someInit();
				if(data1.length != 0)this.packageData1(data1)
				if(data2.length != 0)this.packageData2(data2)
				this.queryData()
			},
			packageData1(data){ //顶部筛选数据
				data.forEach(i=>{
					if(i.id == 102){
						this.params.BEGINDATE = i.times.statrTime;
						let addOne = i.times.endTime;
						let arr = [];
						arr = addOne.split('-');
						arr[2] = parseInt(arr[2]) + 1;
						this.params.ENDDATE = arr.join('-');
					}
				})
			},
			packageData2(data){ //侧栏筛选数据
				data.forEach(i=>{
					if(i.id == '105'){//客户
						this.params.PARTNER_ID = i.cont.ID;
					}
					if(i.id == '106'){//经手人
						this.params.OPERATOR_ID = i.cont.ID;
					}
				})
			},
			wrquest(params = this.params){//接口调用
				this.params.PAGE_INDEX = this.nowInfo.nowIndex;
				uni.showLoading({title: '加载中...'})
				return new Promise((resolv,reject)=>{
					uni.request({
						url: getApp().globalData.webUrl + '/cs/query',
						method: 'GET',
						data:{
							token: getApp().globalData.token,
							params:params,
						},
						success:res=>{
							let result = judge.loginJudge(res.data.status);
							if (result == false) {
								uni.showToast({title: '验证码过期请重新登录',icon: 'none'})
								return false;
							}
							if(res.data.status == 0){
								this.setMaxPage(res.data.total)
								resolv(res.data.data)
							}else{
								reject(uni.showToast({title: '异常',icon: 'none'}))
							}
							if(res.data.data.length > 0){
								this.comName = res.data.data[0].BILL_PARTNER_NAME;
							}
							uni.$emit('getLocation',params,this.comName);  //向父组件进行数据绑定
						},
						fail:()=> {
							uni.showToast({title: '网络异常',icon: 'none'})
						},
						complete:()=> {
							uni.hideLoading()
						}
					})
				})
			},
			async queryData(params){ //查询数据
				this.dailyList = await this.wrquest(params);
				this.orderList.allData = this.dailyList;
				this.appendCheckBox()
			},
			pullRefresh(){
				this.someInit();
				this.queryData();
			},
			async setOrderList(type = -1,params){//设置类别数据
				switch (type){
					case -1:
						this.orderList.allData = await this.wrquest(params);
						this.dailyList = this.orderList.allData;
						this.appendCheckBox()
						break;
					case 0:
					if(this.orderList.allData.length == 0){
						this.orderList.allData = await this.wrquest(params);
						this.dailyList = this.orderList.allData;
					}else{
						this.dailyList = this.orderList.allData;
					}
						break;
					case 1:
					if(this.orderList.clear.length == 0){
						this.orderList.clear = await this.wrquest(params);
						this.dailyList = this.orderList.clear;
					}else{
						this.dailyList = this.orderList.clear;
					}
						break;
						case 2:
					if(this.orderList.notClear.length == 0){
						this.orderList.notClear = await this.wrquest(params);
						this.dailyList = this.orderList.notClear;
					}else{
						this.dailyList = this.orderList.notClear;
					}
						break;
					default:
						break;
				}
			},
			returnAppendCheckBox(arr){ //分页的时候添加可控属性
				arr.forEach((i,j)=>{
					i.isTrue = false;
					let nums = i.BILL_LEFTMONEY||0
					i.PAY_MONEY = nums;
				})
				return arr;
			},
			appendCheckBox(){//添加可控筛选属性
				if(this.dailyList.length == 0)return
				this.dailyList.forEach((i,j)=>{
					this.$set(this.dailyList[j],'isTrue',false);
					let nums = i.BILL_LEFTMONEY||0
					this.$set(this.dailyList[j],'PAY_MONEY',nums)
				})
			},
			changeCheckStatu(id,name){
				let status = false;
				if(name == this.orderName || this.orderName == ''){
					this.dailyList.forEach(i=>{
						if(i.BILL_CODE == id){
							i.isTrue = !i.isTrue;
							if(i.isTrue)status = true;
						}
					})
				}
				this.allCheck = status?'':false
			},
			editOrder(data){
				let power = uni.getStorageSync("loginData").updataOrder;
				if(power == 1){
					let pushData = data.BILL_ID;
					uni.navigateTo({
						url: '../../pages/order/openOrder?BILL_CODE=' + pushData
					})
				}else{
					uni.showToast({title: "没有权限",icon: 'none'})
				}
				
			},
			checkPayMoney(orderId){
				let flag = false;
				let index;
				this.dailyList.forEach((i,j)=>{
					if(i.BILL_CODE == orderId){
						index = j;
						if(parseFloat(i.BILL_LEFTMONEY) < parseFloat(i.PAY_MONEY)){
							flag= true;
						}
					}
				});
				this.dailyList[index].PAY_MONEY = parseFloat(this.dailyList[index].PAY_MONEY).toFixed(2);
				if(flag){
					uni.showToast({title: "结款金额大于未结款金额",icon: "none"})
					this.dailyList[index].PAY_MONEY = 0;
				}
			},
			goReceivables(id,name){//去收款页面
				uni.navigateTo({
					url: '../../pages/progress/receivables?orderId=' + id + '&name=' + name
				})
			},
			chooseAll(){//全选
				if(this.orderName == '')return
				if(this.allCheck == '')this.allCheck = this.allCheck==''?false:true;
				this.allCheck = !this.allCheck;
				this.dailyList.forEach(i=>{
					if(i.BILL_PARTNER_NAME == this.orderName){
						i.isTrue = this.allCheck;
					}
				})
			},
			goReceivableInfo(){ //弹出结算弹框
				if(this.totalMoney == 0)return uni.showToast({title: '请选择单子',icon: 'none'})
				let arr = [];
				arr = this.dailyList.filter(i=>{
					if(i.isTrue)return i;
				})
				this.$emit('getCheckOrderInfo', arr)
			},
			fuzzyQuery(KEYWORDS){//关键字查询
				this.someInit();
				this.params.KEYWORDS = KEYWORDS;
				this.setOrderList();
			}
		},
		created() {
			let boj = {data:''}
			if(this.pageSettlement){
				this.newsList.push(boj);
				this.params.STATUS = 2;
			}else{
				this.tabBars.forEach((tabBar) => {
					this.newsList.push(boj);
				});
			}
			this.$nextTick(function(){
				if(this.orderQuerry.key){
					this.params.KEYWORDS = this.orderQuerry.name;
				}
				this.setOrderList();
			})
		},
		computed:{
			totalMoney:{//收款页面的收款总金额
				set:function(){
					return 0
				},
				get:function(){
					let sale = 0;
					let num = 0;
					this.dailyList.forEach(i=>{
						if(i.isTrue){
							sale += parseFloat(i.BILL_LEFTMONEY);
							num++;
						}
					})
					this.orderNums = num;
					return sale;
				}
			},
			orderName: {
				set: function(){
					return ' '
				},
				get:function(){
					let name = '';
					this.dailyList.some(i=>{
						if(i.isTrue){
							name = i.BILL_PARTNER_NAME;
							return true
						}
					})
					return name;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/iconfont.css";
	@import "../../common/css/order.scss";
</style>