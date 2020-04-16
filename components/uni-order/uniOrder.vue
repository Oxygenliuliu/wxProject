<template>
	<view class="con-conent">
		<view class="type" v-if="pageSettlement != 0">
			<block v-for="(item,index) in tabBars" :key='index'>
				<view class="type-box" :data-current="index" @tap='ontabtap' :class="{'active-box':item.isTrue}">{{item.name}}</view>
			</block>
		</view>
		<swiper class="swiper-box" :current='tabIndex' :duration="300"  :style="{ 'height':scrollHeight }" @change="ontabchange">
			<swiper-item v-for="(tab,index1) in newsList" :key='index1'>
				<view class="dailycashlist" v-if="dailyList.length != 0">
					<scroll-view  scroll-y="true" @scrolltolower='refresh()' :style="{ 'height':scrollHeight }" scroll-with-animation="true">
						<view class="daily-list1" v-for="(it,index) in dailyList" :key="index">
							<view class="daily-head" style="padding: 20rpx 0;">
								<view class="flex-box">
									<view class="is-true" v-show="tabIndex == 2">
										<label @tap='changeCheckStatu(it.BILL_CODE)' v-show="pageSettlement!=0">
											<checkbox :checked="it.isTrue" ></checkbox>
										</label>
									</view>
									<view class="title-box">
										<view class="daily-time">开单日期: {{it.BILL_DATE_STR}}</view>
										<view class="daily-time">单号: {{it.BILL_CODE}}</view>
										<view class="daily-time warning" style="padding-bottom: 20rpx;">未结金额: {{it.BILL_LEFTMONEY|priceFormat(2,'￥',true)}}</view>
									</view>
								</view>
								<view class="chekc-btn">
									<view class="daily-status">
										<view>
											<span class='text over' v-show='it.BILL_STATUS == 0'>待登账</span>
											<span class='text over' v-show='it.BILL_STATUS == 1'>已登账</span>
											<span class='text warning' v-show='it.BILL_STATUS == 2'>已红冲</span>
										</view>
										<view class="form-where">
											<view class="tag" v-show="it.BILL_PLATFORM==0"><span class='iconfont iconpc'></span></view>
											<view class="tag"  v-show="it.BILL_PLATFORM==1"><span class='iconfont iconapp'></span></view>
											<view class="tag"  v-show="it.BILL_PLATFORM==2"><span class='iconfont iconshouji'></span></view>
										</view>
										<view class="display-more" @tap='displayMore(it.BILL_CODE)'>
											<view class="tag" :class="{'icondown':!it.isShow}"><span class='iconfont icontop'></span></view>
										</view>
									</view>
								</view>
							</view>
							<view class="daily-conent" v-if="it.isShow"><!-- 明细详情 -->
								<view class="daily-list" v-for="(item,index) in dailyInfo" :key="index">
									<view class="daily-listinfo">
										<view class="daily-img">
										</view>
										<view class="daily-coninfo">
											<view class="daily-coninfoone">
												<view class="daily-conleft w-text-over">材料：海报海报海报海报海报海报海报</view> <view class="daily-listprice w-text-over">{{400|priceFormat(2,'￥',true)}}</view>
											</view>
											<view class="daily-coninfoone">
												<view class="daily-conleft">尺寸：5*6</view> <view class="daily-conright">数量：10</view>
											</view>
										</view>
									</view>
									<view class="daily-head">
										<view class="daily-time w-text-over">后期工艺: 工艺一工艺二</view>
										<view class="daily-contacts w-text-over warning">明细总价: {{100|priceFormat(2,'￥',true)}}</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="not-data" v-show="dailyList.length == 0">
					没有数据</view>
			</swiper-item>
		</swiper>
	<view class="recfooter" :class="{'t-recfooter':(tabIndex == 2||pageSettlement == 0)}">
		<view class="pricebtn">
			<view style="display: flex;flex-direction: column;"><text>数量: {{num}}</text><text>总金额: <text class='warning'>{{sales|priceFormat(2,'￥',true)}}</text></text></view>
		<text class="right w-btn-danger" @tap="pay()">付 款</text>
		</view>
	</view>
	</view>
</template>

<script>
	import md5 from '@/common/js/md5.js';
	export default {
		components: {
		},
		props: {
			scrollHeight: {
				type: [Number,String],
				default:function(){
					return 0
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
			fparams: {
				type: Object,
				default: function(){
					return {}
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
				dailyInfo: [
					{},
					{},
					{},
				],
				tabIndex: 0,//swiper下标
				orderList:{allData: [],clear: [],notClear: []},//订单页面需要三个数组存储数据全部、未结清、已结清防止已有数据再次请求
				newsList:[],//swiper分多少个页面页占位数组
				pageLarge:{nowIndexA: 0,nowIndexB: 0,nowIndexC: 0},//现在处于页数
				pageMaxSize:{pageA: -1,pageB: -1,pageC: -1},//最大页数
				nowInfo:{nowIndex: 0,maxSize: -1},//传入接口页面参数
				allCheck: false,//全选
				orderNums: 0,//订单数
				zMask: false,//查询时的遮罩层
				prepay_id: '',
				pageSettlement: 0,//0收款(数据不变) 1对账 2扫码
			}
		},
		methods: {
			displayMore(orderId){ //展开更多
				this.dailyList.some(i=>{
					if(i.BILL_CODE == orderId){
						i.isShow = !i.isShow;
						return true;
					}
				})
			},
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
			changeCheckStatu(id){
				this.dailyList = this.dailyList.map(i=>{
					if(i.BILL_CODE == id){
						i.isTrue = !i.isTrue;
					}
					return i
				})
			},
			setDisplayData(data){
				let arr = this.returnAppendCheckBox(data);
				this.dailyList = this.dailyList.concat(arr);
				switch (this.tabIndex){
					case 0://全部
						this.orderList.allData = this.dailyList.concat(data);
						break;
					case 1://未结清
						this.orderList.clear = this.dailyList.concat(data);
						break;
					case 2:// 已结清
						this.orderList.notClear = this.dailyList.concat(data);
						break;
					default:
						break;
				}
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
				this.pageLarge = {nowIndexA: 0,nowIndexB: 0,nowIndexC: 0};//现在处于页数
				this.pageMaxSize = {pageA: -1,pageB: -1,pageC: -1};//最大页数
				this.nowInfo = {nowIndex: 0,maxSize: 0};//传入接口页面参数
				if(this.pageSettlement)this.params.STATUS = '2'//收款页面只展示未结清单子
				this.changeType(0);//重置swiper位置
				this.tabIndex = 0;//重置swiper位置
				this.dailyList = []
				this.orderList.allData = this.orderList.clear = this.orderList.notClear = [];//重置各个数组
			},
			changeType(id){ //更换订单类别
				if(this.tabIndex == 2){
					this.$emit('changeScrollHeight',{type:true,height:70});
				}else{
					this.$emit('changeScrollHeight',{type:false,height:70});
				}
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
			wrquest(params = this.params){//接口调用
				this.params.PAGE_INDEX = this.nowInfo.nowIndex;
				uni.showLoading({title: '加载中...'})
				return new Promise((resolv,reject)=>{
					uni.request({
						url: 'https://cloud.fydlsoft.com/transit_server?interface_add=http://111.67.204.75:7798/cs/query',
						method: 'GET',
						data:{
							token: '3E009AA849C840D187E53EF71A67CDC4',
							params: encodeURIComponent(JSON.stringify(params)),
						},
						success:res=>{
							if(res.data.status == 0){
								this.setMaxPage(res.data.total)
								resolv(res.data.data)
							}else{
								reject(uni.showToast({title: '异常',icon: 'none'}))
							}
						},
						fail:(res)=> {
							uni.showToast({title: '网络异常',icon: 'none'})
						},
						complete:(res)=> {
							uni.hideLoading()
						}
					})
				})
			},
			async queryData(params = this.params){ //查询数据
				this.dailyList = await this.wrquest(params);
				this.orderList.allData = this.dailyList;
				this.appendCheckBox();
			},
			returnAppendCheckBox(arr){ //分页的时候添加可控属性
				arr.forEach((i,j)=>{
					i.isTrue = false;
					i.isShow = false;
				})
				return arr;
			},
			appendCheckBox(){//添加可控筛选属性
				if(this.dailyList.length == 0)return
				this.dailyList.forEach((i,j)=>{
					this.$set(this.dailyList[j],'isTrue',false);
					this.$set(this.dailyList[j],'isShow',false);
				})
			},
			pullRefresh(){
				this.params.PAGE_INDEX = 0;
				this.queryData();
			},
			jqueyForCustomer(obj){
				this.pageSettlement = obj.type;
				if(obj.type == 0){
					[1].forEach(() => {
						this.newsList.push(obj);
					});
				}else{
					[1,2,3].forEach(() => {
						this.newsList.push(obj);
					});
				}
				this.queryData();
			},
			async pay(){
				let data = await this.beforeWXpay('https://proxy.fydlsoft.com').catch(()=>{return {state: 500}});
				if(data.statusCode == 200){
					this.WXpay(data.data);
				}else if(data.statusCode == 404){
					uni.showToast({title: '启用备用域名',icon: 'none'})
					let data1 = await this.beforeWXpay('https://cloud1.fydlsoft.com').catch(()=>{return {state: 500}});
					if(data1.statusCode == 200){
						this.WXpay(data1.data);
					}else{
						uni.showToast({title: "网络异常请稍后重试",icon: 'none'})
					}
				}else{
					uni.showToast({title: "网络异常请稍后重试",icon: 'none'})
				}
			},
			beforeWXpay(url){
				uni.showLoading({title: '发起支付中...'});
				return new Promise((resolve,reject)=>{
					wx.login({
						success: res => {
							var code = res.code;
							//nonceStr->code MD5 
							uni.request({
								url: url + '/unifiedorder',
								method: 'POST',
								data:{total_fee: '0.01',code: code},
								success: (res) => {
									resolve(res)
								},
								fail:(erro)=> {
									uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
									reject();
								}
							})
						}
					})
				})
			},
			WXpay(data){ //调用微信支付
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: data.timeStamp,
					nonceStr: data.nonceStr,
					package: data.package,
					signType: data.signType,
					paySign: data.paySign,
					success: function (res) {
						uni.showLoading({
							title:'支付结果查询中...',
						})
						if (res.errMsg == 'requestPayment:ok'){
							uni.showToast({title: '支付成功',icon: 'success'});
						}
					},
					fail: function (err) {
						uni.showToast({title: '支付已取消',icon: 'none'});
					},
					complete: () => {
						uni.hideLoading();
					}
				})
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
				this.appendCheckBox()
			},
		},
		created() {
		},
		computed:{
			params:{ //筛选条件初始化由父页面传值
				set:function(){
					return {}
				},
				get: function(){
					return this.fparams
				}
			},
			num: {
				set:function(){
					return 0
				},
				get:function(){
					if(this.pageSettlement == 0){
						return this.dailyList.length;
					}else{
						let num = 0;
						this.dailyList.forEach(i=>{
							if(i.isTrue)num++
						})
						return num
					}
					
				}
			},
			sales: {
				set: function(){
					return 0
				},
				get: function(){
					let nums = 0;
					this.dailyList.forEach(i=>{
						if(this.pageSettlement == 0){
							nums += Math.abs(parseFloat(i.BILL_LEFTMONEY));
						}else{
							if(i.isTrue){
								nums += Math.abs(parseFloat(i.BILL_LEFTMONEY));
							}
						}
					})
					return nums;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/iconfont.css";
	@import "../../common/css/order.scss";
	.con-conent{
		.recfooter{
			height: 0;
			transition: all .3s ease-in;
			transform: translateY(70px);
		}
		.t-recfooter{
			height: 120rpx;
			transform: translateY(0);
		}
	}
</style>