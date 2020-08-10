<template>
	<view class="container">
		<view class="right-text" v-show="result!=-1"><span @tap='complete()'>完成</span></view>
		<view class="cont">
			<view v-show="result!=-1">
				<view class="icon" v-if="result"><span class='iconfont icon103 sucess'></span></view>
				<view class="icon" v-else><span class='iconfont iconchacha wrong'></span></view>
			</view>
			<view class="tip-text">{{tipText}}</view>
		</view>
		<view class="tip">
			<span>注意: </span>
			<br/>
			<view class="text">返回没有自动刷新，请手动刷新订单状态</view>
			<view class="text">支付过程中可能因为网络波动原因导致支付延迟,请点击完成后查看已支付单子是否未结金额清零。</view>
			<view class="text">如果<text class="import">支付成功</text>但单子未结清且<text class="import">钱未退回</text>您的账号请及时联系<text class="red">商家</text></view>
		</view>
	</view>
</template>
<script>
	import l_md5 from '@/common/js/md5.js'
export default {
	components: {},
	props:{},
	data() {
		return {
			tipText: '支付结果查询中...',
			result: -1,
			order_id: ''
		}
	},
	onLoad(op) {
		this.order_id = op.order_id;
		this.payResult()
	},
	methods: {
		payResult(){ //支付结果查询
			uni.request({
				url: this.payUrl,
				method: 'POST',
				data: {
					Request_url: 'https://proxy.fydlsoft.com/' + "orderquery",
					trade_no: this.order_id,
					token: l_md5( this.order_id + 'FYDL')
				},
				success: (res) => {
					if(res.data.status == 200){
						this.setpPayResult(true,res.data.message);
					}else{
						this.setpPayResult(false,res.data.message);
					}
				},fail: (erro) => {
					this.setpPayResult(false,'网络延迟,请稍后查询');
				}
			})
			
		},
		setpPayResult(flag,text){
			if(flag){
				this.tipText = text;
				this.result = true;
			}else{
				this.tipText = text;
				this.result = false;
			}
		},
		complete(){
			var pages = getCurrentPages();
			if(pages.length > 1){
				var page = pages[pages.length - 2];
				let route = page.route;
				if(route == 'pages/index/payment' || route == 'pages/order/scanOrder' ){
					page.$vm.queryData();
				}else if(route == 'pages/index/index'){
					page.$vm.pullRefresh();
				}
			}
			uni.navigateBack();
		}
	},
	computed:{
		transitUrl: {
			set: function(){
				return 0
			},
			get: function(){
				return this.$store.state.transitUrl;
			}
		},
		payUrl: {
			set: function(){
				return 0
			},
			get: function(){
				return this.$store.state.payUrl;
			}
		}
	}
}
</script>
<style lang="scss" scoped>
	@import '@/common/css/iconfont.css';
	page{background: $page-baground;}
	.container{
		padding: 0 2.5%;
		.cont{
			margin-top: 60rpx;
			.icon{
				display: flex;
				height: 120rpx;
				justify-content: center;
				align-items: center;
				.icon103,.iconchacha{
					font-size: 80rpx;
				}
				.sucess{
					color: $uni-color-success;
				}
				.wrong{
					color: $uni-color-error;
				}
			}
			.tip-text{
				text-align: center;
				line-height: 60rpx;
			}
		}
		
		.right-text{
			line-height: 80rpx;
			text-align: right;
			padding-right: 40rpx;
			span{
				color: $uni-color-primary;
			}
		}
		.tip{
			position: fixed;
			bottom: 20rpx;
			span{
				color: $black;
				padding-right: 10rpx;
			}
			.text{
				font-size: 28rpx;
				color: $gray2;
				text-indent: 2rem;
			}
		}
		.import{
			color: $uni-color-warning !important;
			font-size: 30rpx !important;
		}
		.red{
			color: $uni-color-error !important;
			font-size: 30rpx !important;
		}
	}
</style>