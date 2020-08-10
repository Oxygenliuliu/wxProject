<template> 
	<view class="con-conent">
		<view class="dailycashlist" v-if="dailyList.length != 0">
			<scroll-view  scroll-y="true" @scrolltolower='refresh()' :style="{ 'height':scrollHeight }" scroll-with-animation="true">
				<block v-for="(item,index) in dailyList" :key='index'>
					<view class="daily-list">
						<view class="title-box">
							<view class="person-name">{{item.BILL_PARTNER_NAME}}</view>
							<view class="time">{{item.BILL_DATE_STR}}<span class='iconfont iconcontextdelete' @tap='delect(item.BILL_ID)'></span></view>
						</view>
						<view class="cont">
							<view class="check-box">
								<label @tap="radio(item.BILL_CODE)">
									<checkbox :checked="item.isTrue"/>
								</label>
							</view>
							<view class="pay-way">
								<view class="icon-box">
									<view class="icon">
										<span v-if="item.BILL_PAYMENT_TYPEID == 258" class='iconfont icon1 iconweixin'></span>
										<span v-if="item.BILL_PAYMENT_TYPEID == 257" class='iconfont icon2 iconumidd17'></span>
										<span v-if="item.BILL_PAYMENT_TYPEID == 255995" class='iconfont icon3 iconxianjin'></span>
										<span v-if="item.BILL_PAYMENT_TYPEID == 18112" class='iconfont icon3 iconyinhangka'></span>
										<span v-if="!([18112,258,257,255995].some(i=>i==item.BILL_PAYMENT_TYPEID))" class='iconfont icon3 iconyiwancheng'></span>
									</view>
									<view class="icon-title">{{item.BILL_PAYMENT_NAME}}</view>
								</view>
								<view class="icon-person">
									<view class="status">
										<view class="form-where">
											<view class="tag" v-show="item.BILL_PLATFORM==0"><span class='iconfont iconpc'></span></view>
											<view class="tag"  v-show="item.BILL_PLATFORM==1"><span class='iconfont iconapp'></span></view>
											<view class="tag"  v-show="item.BILL_PLATFORM==2"><span class='iconfont iconshouji'></span></view>
										</view>
									</view>
									<view class="text">{{item.BILL_OPERATOR_NAME}}</view>
								</view>
							</view>
							<view class="daily-status">
								<view class="sale">
									{{item.BILL_TOTALMONEY|priceFormat(2,'￥',true)}}
								</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="not-data" v-show="dailyList.length == 0">没有数据</view>
		<view class="recfooter">
			<view class="recprice">
				<view class="rececheckbox">
					<label class="uni-list-cell uni-list-cell-pd" @tap='chooseAll()'>
						<view><checkbox :checked="allCheck==true" style="transform: scale(0.8);"/><text>全选</text></view>
					</label>
				</view>
			</view>
			<view class="pricebtn"><text>数量: {{orderNums}}</text><text class="right w-btn-danger" @tap="delectAll()">全部删除</text></view>
		</view>
	</view>
</template>

<script>
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
					// PARTNER_ID: '',
					// OPERATOR_ID:'',
					// NEEDSUMMARY:'0',
					BILLTYPE: 2,
					PAGE_SIZE: 8,
					PAGE_INDEX: 0,
					STATUS: '0'
				},
				pageLarge:{nowIndexA: 0,nowIndexB: 0,nowIndexC: 0},//现在处于页数
				pageMaxSize:{pageA: -1,pageB: -1,pageC: -1},//最大页数
				nowInfo:{nowIndex: 0,maxSize: -1},//传入接口页面参数
				allCheck: false,//全选
				zMask: false,//查询时的遮罩层
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
				this.dailyList = this.dailyList.concat(data);
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
				this.params = {
					QUERY_ID: 6,
					BEGINDATE: '1900-01-01',
					ENDDATE: this.wpublic.getDay(1),//new Date().toISOString().slice(0, 10),
					KEYWORDS: '',
					// PARTNER_ID: '',
					// OPERATOR_ID:'',
					// NEEDSUMMARY:'0',
					BILLTYPE: 2,
					PAGE_SIZE: 8,
					PAGE_INDEX: 0,
					STATUS: '0'
				}
				this.pageLarge = {nowIndexA: 0,nowIndexB: 0,nowIndexC: 0};//现在处于页数
				this.pageMaxSize = {pageA: -1,pageB: -1,pageC: -1};//最大页数
				this.nowInfo = {nowIndex: 0,maxSize: 0};//传入接口页面参数
				this.dailyList = []
				this.orderList.allData = [];//重置各个数组
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
			wrquest(params = this.params){//数据接口调用
				this.params.PAGE_INDEX = this.nowInfo.nowIndex;
				uni.showLoading({title: '加载中...'})
				return new Promise((resolv,reject)=>{
					uni.request({
						url: '',
						method: 'GET',
						data:{
							token: getApp().globalData.token,
							params:params,
						},
						success:res=>{
							if(res.data.status == 0){
								this.setMaxPage(res.data.total)
								resolv(res.data.data)
							}else{
								reject(uni.showToast({title: '异常',icon: 'none'}))
							}
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
			appendCheckBox(){//添加可控筛选属性
				if(this.dailyList.length == 0)return
				this.dailyList.forEach((i,j)=>{
					this.$set(this.dailyList[j],'isTrue',false)
					this.$set(this.dailyList[j],'PAY_MONEY',i.BILL_LEFTMONEY)
				})
			},
			radio(orderId){ //单选
				this.dailyList.some(i=>{
					if(i.BILL_CODE == orderId){
						i.isTrue = !i.isTrue;
						return
					}
				})
			},
			chooseAll(){//全选
				this.allCheck = !this.allCheck;
				this.dailyList.forEach(i=>{
					i.isTrue = this.allCheck
				})
			},
			fuzzyQuery(KEYWORDS){//关键字查询
				this.someInit();
				this.params.KEYWORDS = KEYWORDS;
				this.setOrderList();
			},
			drquest(params){//删除接口调用
				uni.showLoading({title: '加载中...'})
				return new Promise((resolv,reject)=>{
					uni.request({
						url: '',
						method: 'GET',
						data:{
							token: getApp().globalData.token,
							data:params,
						},
						success:res=>{
							let result = judge.loginJudge(res.data.status);
							if (result == false) {
								uni.showToast({title: '验证码过期请重新登录',icon: 'none'})
								return false;
							}
							if(res.data.status == 0){
								resolv(res.data)
							}else{
								uni.showToast({title: '异常',icon: 'none'})
								reject('wrong')
							}
						},
						fail:()=> {
							uni.showToast({title: '网络异常',icon: 'none'})
							reject('wrong')
						},
						complete:()=> {
							uni.hideLoading()
						}
					})
				})
			},
			delect(orderId){ //删除单个
				uni.showModal({
					title: '提示',
					content: '确定要删除吗',
					success: (res) => {
						if(res.confirm){
							this.remove(orderId);
						}
					}
				})
			},
			async remove(orderId){
				let params = {
					type: 2,
					idlist:[orderId]
				}
				let data = await this.drquest(params);
				if(data!='wrong'){ //返回成功结果
					this.dailyList.forEach((i,j)=>{
						if(i.BILL_ID == orderId){
							this.dailyList.splice(j,1);
						}
					})
					uni.showToast({title: '删除成功',icon: 'none'})
				}
			},
			delectAll(){ //批量删除
				let flag = this.dailyList.some(i=>{
					if(i.isTrue)return true;
				})
				if(flag){
					uni.showModal({
						title: '提示',
						content: '确定要删除吗',
						success: (res) => {
							if(res.confirm){
								this.removeAll();
							}
						}
					})
				}else{uni.showToast({title: '至少选择一个',icon: 'none'})}
			},
			async removeAll(){
				let arr = [];
				this.dailyList.forEach(i=>{
					if(i.isTrue){
						arr.push(i.BILL_ID)
					}
				})
				let params = {
					type: 2,
					idlist:arr
				}
				let data = await this.drquest(params);
				if(data!='wrong'){ //返回成功结果
					let arr1 = [];
					this.dailyList.forEach((i,j)=>{
						let flag = false;
						flag = arr.some((k,l)=>{
							if(i.BILL_ID == k){
								return true;
							}
						})
						if(!flag)arr1.push(i)
					})
					this.dailyList = arr1;
				}
			}
		},
		created() {
			let boj = {data:''}
			this.tabBars.forEach((tabBar) => {
				this.newsList.push(boj);
			});
			this.$nextTick(function(){
				if(this.orderQuerry.key){
					this.params.KEYWORDS = this.orderQuerry.name;
				}
				this.setOrderList();
			})
		},
		computed:{
			orderNums: {
				set:function(){
					return 0
				},
				get:function(){
					let num = 0;
					this.dailyList.forEach(i=>{
						if(i.isTrue)num++
					})
					return num
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/iconfont.css";
	@import "../../common/css/order.scss";
	@import "../../common/css/common.scss";
	.con-conent{
		.dailycashlist{
			.daily-list{
				.title-box{
					padding: 0 2.5%;
					display: flex;
					justify-content: space-between;
					height: 60rpx;
					line-height: 60rpx;
					border-bottom: 2rpx solid #EBEBEB;
					.person-name{
						flex: 1;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						font-size: 32rpx;
						font-weight: 600;
						color: $black;
					}
					.time{
						flex: 1;
						text-align: right;
						color: $gray2;
						.iconcontextdelete{
							color: $font-red;
							padding-left: 20rpx;
						}
					}
				}
				.cont{
					display: flex;
					.check-box{
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.pay-way{
						flex: 5;
						.icon-box{
							display: flex;
							line-height: 60rpx;
							.icon{
								.icon1,.icon5{
									font-size: 40rpx;
									color: $green;
								}
								.icon2{
									font-size: 40rpx;
									color: #1296DB;
								}
								.icon3{
									font-size: 40rpx;
									color: #16C2C2;
								}
							}
							.icon-title{
								margin-left: 20rpx;
							}
						}
						.icon-person{
							display: flex;
							width: 400rpx;
							.text{
								width: 100%;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								margin-left: 26rpx;
								color: $gray2;
							}
						}
					}
					.daily-status{
						flex: 2;
						display: flex;
						justify-content: center;
						align-items: center;
						height: 120rpx;
						.sale{
							color: $sale-red;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							width: 180rpx;
						}
					}
				}
			}
		}
	}
</style>