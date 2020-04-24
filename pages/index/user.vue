<template>
	<view class="userCenter">
		<view class="userCenter_top">
			<view class="mask"></view>
		</view>
		<view class="userCenter_box_bg">
			<view class="userprofily">
				<view class="userbase">
					<view class="userprofily_header"></view>
					<text>{{userName}}</text>
					<span @tap="signOut">注销</span>
				</view>
			</view>
			<view class="blank"></view>
			<view class="usercenter_menu">
				<view class="menu_item" v-for="(item,index) in secondary" :key="index" @tap="employee(item.key)">
					<i :class="item.imgUrl"></i>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				secondary: [
					{key: 1,name: '修改密码',imgUrl: 'iconfont iconmima'},
				]
			};
		},
		methods: {
			// 退出
			signOut(){
				uni.clearStorage();
				this.$store.commit('init');
				uni.reLaunch({
					url:'../index/login'
				});
			},
			employee(id){
				switch (id){
					case 1:
						uni.navigateTo({
							url: '../../pages/index/updataPassword'
						})
						break;
					default:
						break;
				}
			}
		},
		computed: {
			userName: {
				get: function(){
					return this.$store.state.loginParams.userName
				},
				set: function(){
					return '未知用户'
				}
			}
		},
		created() {
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/iconfont.css";
	.userrofily,.userprofily_header {
		border-radius: 8px;
	}

	.userCenter {
		
		.userCenter_box_bg {
			background: #F9F9F9;
			position: relative;
			.userprofily {
				position: absolute;
				width: 90%;
				margin: 0 auto;
				left: 5%;
				background: #FEFEFE;
				padding: 35upx;
				box-sizing: border-box;
				box-shadow: 0px 2px 5px #EDEDED;
			}
		}
	}

	.userbase {
		display: flex;
		align-items: center;
		border-bottom: 2px solid #F6F6F6;
		padding-bottom: 35upx;
		position: relative;
		font-size: 32rpx;
		.userprofily_header {
			height: 120upx;
			width: 120upx;
			background-image: url('../../static/fumou-center-template/header.jpg');
			background-size: 100%;
		}
		text {
			margin-left: 20px;
			font-size: 30upx;
		}
		span{
			position: absolute;
			height: 40upx;
			width: 68upx;
			right: 0px;
			top:0px;
		}
	}

	.userStatus {
		display: flex;
		justify-content: space-between;
		margin-top: 35upx;

		.status {
			width: 140upx;
			font-size: 24upx;
			text-align: center;
			letter-spacing: .5px;
			display: flex;
			flex-direction: column;
			i {
				width: 50upx;
				height: 50upx;
				margin: 0 auto;
				margin-bottom: 5px;
				color: #fb5454;
				font-size: 1rem;
			}
		}
	}

	.blank {
		background: #FEFEFE;
		height: 300upx;
	}

	.usercenter_menu {
		width: 100%;
		display: inline-block;
		margin-top: 30px;
		.menu_item {
			font-size: 28upx;
			letter-spacing: 1px;
			padding: 14px 5%;
			background: #FEFEFE;
			overflow: hidden;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			position: relative;
			border-bottom: 1px solid #EFEFEF;

			// &:hover {
			// 	background: #F6F6F6 !important;
			// }

			&::after {
				content: '';
				width: 30upx;
				height: 30upx;
				position: absolute;
				right: 5%;
				background: url('../../static/fumou-center-template/right.png') no-repeat;
				background-size: 100%;
			}

			text:nth-of-type(1) {
				margin-left: 10px;
			}
			i {
				width: 40upx;
				height: 40upx;
				color: #fb5454;
				font-size: 1rem;
			}

			&:nth-of-type(4) {
				margin-top: 10px;
			}
		}
	}
</style>
