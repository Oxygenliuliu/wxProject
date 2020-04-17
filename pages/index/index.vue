<template>
	<view class="container">
		<view class="header" v-if="pageSettlement != -1">
			<view class="title">客户:{{'张三'}}</view>
		</view>
		<view v-if="pageSettlement == -1">{{data}}</view>
		<view v-if="pageSettlement != -1">
			<often-query :items='topItems' @dataChange='childQuery' v-if="pageSettlement != 0"></often-query>
		</view>
		<uni-order @getCompanyName='getCompanyName' :dbname='dbname' @changeScrollHeight='changeScrollHeight' :orderId='orderId' :fparams='params' :scrollHeight="scrollHeight" ref='uniOrder' v-if="pageSettlement != -1"></uni-order>
	</view> 
</template>
<script>
	import uniOrder from '@/components/uni-order/uniOrder.vue'
	import oftenQuery from '@/components/uni-often/uni-often.vue'
	export default {
		components: {
			uniOrder,
			oftenQuery
		},
		data() {
			return {
				searchData:'',//搜索值
				scrollHeight: 0,//滚动区域高度
				typeList:[ //传入侧栏内容typeId唯一标识
					{typeId: 105,name: '客户'},
					{typeId: 106,name: '经手人'},
				],
				topItems:[ //顶部筛选传入值typeId唯一标识
					{
						name:'综合排序',
						typeId:101
					},
					{
						name:'日期',
						typeId:102
					},
				],
				chooseData:{data1:[],data2:[]},//传入子组件的筛选条件
				orderId: '',
				data: '',
				params: {},
				pageSettlement: 0,//0收款 1兑账 2扫码
				companyName: '',
				costScrollHeight:'',
				dbname: ''
			}
		},
		onLoad(options){
			if(options.q != undefined){
				let q = decodeURIComponent(options.q);
				let index = q.indexOf('=');
				let str = q.substr(index + 1,q.length);
				let obj = JSON.parse(decodeURIComponent(str));
				if(typeof obj == 'object'){
					this.companyName = obj.params.KEYWORDS || '未定义'
					this.pageSettlement = obj.type;
					this.dbname = obj.params.dbname || '演示账套';
					this.params = {//搜索条件
						QUERY_ID: 1,
						BEGINDATE: obj.params.BEGINDATE || '1900-01-01',
						ENDDATE: obj.params.ENDDATE || this.wpublic.getDay(1),//日期引用公共方法
						PARTNER_ID: obj.params.PARTNER_ID || '',
						BILL_ID: obj.params.ORDERID || '',
						MODE: obj.params.KEYWORDS || 0,
						PAGE_SIZE: 8,
						PAGE_INDEX: 0,
					}
					this.$nextTick(function(){
							this.$refs.uniOrder.jqueyForCustomer(obj);
					})
				}else{
					this.pageSettlement = -1;
					this.data = '参数错误201'
				}
			}else{
				//let obj = {type: 2,params:{ORDERID:'1836934'}}
				
				// let obj = {type: 2,params:{PARTNER_ID:'1757112'}}//客户:龙行天下
				// this.pageSettlement = obj.type
				// this.dbname = obj.params.dbname || '演示账套';
				// this.params = {//搜索条件
				// 	QUERY_ID: 1,
				// 	BEGINDATE: obj.params.BEGINDATE || '1900-01-01',
				// 	ENDDATE: obj.params.ENDDATE || this.wpublic.getDay(1),//日期引用公共方法
				// 	PARTNER_ID: obj.params.PARTNER_ID || '',
				// 	BILL_ID: obj.params.ORDERID || '',
				// 	MODE: obj.params.KEYWORDS || 0,
				// 	PAGE_SIZE: 8,
				// 	PAGE_INDEX: 0,
				// }
				// this.$nextTick(function(){
				// 		this.$refs.uniOrder.jqueyForCustomer(obj);
				// })
				// this.companyName = obj.params.KEYWORDS || '未定义'
				this.pageSettlement = -1
				this.data = '参数错误201'
			}
			uni.getSystemInfo({
				success:(res)=>{
					/* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
					// #ifdef APP-PLUS
					if(this.pageSettlement != 0){//没有筛选条件
						this.scrollHeight = res.windowHeight - 50 - 70  - res.statusBarHeight + 'px';
					}else if(this.pageSettlement != 0&&this.pageSettlement != -1){
						this.scrollHeight = res.windowHeight - 50 - 70 - 40 - 31 - res.statusBarHeight + 'px';
					}
					else{
						this.scrollHeight = res.windowHeight - 50 - 70 - 31 - res.statusBarHeight + 'px';
					}
					// #endif
					// #ifndef APP-PLUS
					this.scrollHeight = res.windowHeight - 50 - 50 - 31 + 'px';
					// #endif
				}
			});
			this.costScrollHeight = this.scrollHeight;
		},
		methods: {
			changeScrollHeight(obj){//更改滚动条长度
				let num = this.scrollHeight.replace('px','');
				this.scrollHeight = obj.type?parseInt(num) - obj.height + 'px': this.costScrollHeight;
			},
			showDrawer(){ //侧栏展示
				this.$refs.morequery.show()
			},
			clickSure(data){ // 传入订单组件侧栏筛选数据
				let arr = [];
				data.forEach(i=>{
					if(Object.keys(i.cont).length != 0){
						arr.push(i)
					}
				})
				this.chooseData.data2 = arr;
				this.$refs.uniOrder.changeScreen(this.chooseData)
			},
			childQuery(data){ //传入订单组件的顶部筛选条件
				let arr = [];
				data.forEach((i,j)=>{
					if(j != 1){
						if(i.cont != ''){
							arr.push(i)
						}
					}else{
						if(Object.keys(i.times).length!= 0 || i.cont != ''){//对本周一个月进行日期转换
							let numDay = 0;
							let statrTime = '';
							if(i.cont != ''){
								if(i.cont == '本周'){//当选择本周时进行周几判断并且拿回日期
									var str= '0123456'.charAt(new Date().getDay());
									statrTime = this.wpublic.getDayFor(str);
								}
								else{
									switch (i.cont){
										case '今天':
											numDay = 0;
											break;
										case '7天':
											numDay = -7;
											break;
										case '30天':
											numDay = -30;
											break;
										default:
											break;
									}
								statrTime = this.wpublic.getDay(numDay);
								}
								i.times['statrTime'] =  statrTime;
								i.times['endTime'] =new Date().toISOString().slice(0, 10);
							}
							arr.push(i)
						}
					}
				})
				this.chooseData.data1 = arr;
				this.$refs.uniOrder.changeScreen(this.chooseData)
			},
			autoScreen(e){ //自动查询模糊查询关键字
				if(this.timer)clearTimeout(this.timer);
				this.timer = setTimeout(()=>{
					this.$refs.uniOrder.fuzzyQuery(this.searchData)
				},1000)
			},
			clickScreen(){//点击查询
				this.$refs.uniOrder.fuzzyQuery(this.searchData)
			},
		},
		async onPullDownRefresh() {
			await this.$refs.uniOrder.pullRefresh();
			uni.stopPullDownRefresh()
		},
		created() {
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/iconfont.css";
	@import  "../../common/css/common.scss";
	
	.header{
		display: flex;
		justify-content: space-between;
		line-height: 100rpx;
		height: 100rpx;
		padding: 0 2.5%;
		background: rgb(60, 179, 113);
		color: $white;
		.num{}
		.sale{color: $font-red;}
	}
</style>