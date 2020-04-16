<template> 
	<view class="container"><!-- height: 500px;top: 20px; -->
		<view class="z-mask" :style="'height:'+maskHeight+';top:'+maskTop" v-show="isShow" v-if="type == 0">
			<view class="mask-text">
				<view class="animation">
					<view class="animation-cont cont1">
						<view class="circle1"></view>
						<view class="circle2"></view>
						<view class="circle3"></view>
						<view class="circle4"></view>
					</view>
					<view class="animation-cont cont2">
						<view class="circle1"></view>
						<view class="circle2"></view>
						<view class="circle3"></view>
						<view class="circle4"></view>
					</view>
					<view class="animation-cont cont3">
						<view class="circle1"></view>
						<view class="circle2"></view>
						<view class="circle3"></view>
						<view class="circle4"></view>
					</view>
				</view>
				<text>加载中...</text>
			</view>
		</view>
		<view class="z-mask bottom" v-show="isShow" v-if="type == 1">
			<view class="mask-text">
				<view class="animation">
					<view class="animation-cont cont1">
						<view class="circle1"></view>
						<view class="circle2"></view>
						<view class="circle3"></view>
						<view class="circle4"></view>
					</view>
					<view class="animation-cont cont2">
						<view class="circle1"></view>
						<view class="circle2"></view>
						<view class="circle3"></view>
						<view class="circle4"></view>
					</view>
					<view class="animation-cont cont3">
						<view class="circle1"></view>
						<view class="circle2"></view>
						<view class="circle3"></view>
						<view class="circle4"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		props: {
			type:{
				type: [String,Number],
				default: function(){
					return 0
				}
			},
			maskTop:{
				type: [String],
				default: function(){
					return 0
				}
			},
			maskHeight:{
				type: [String],
				default: function(){
					return '100vh'
				}
			},
			isShow: {
				type: Boolean,
				default: function(){
					return false
				}
			}
		},
		data(){
			return{
			}
		},
	}
</script>

<style lang="scss" scoped>
	.container{
		.z-mask{
			position: absolute;
			width: 100vw;
			background: rgba(255,255,255,1);
			z-index: 2;
			text-align: center;
			.mask-text{
				margin-top: 50%;
				text{color: $blue;}
				.animation{
					margin: 20rpx auto;
					width: 40rpx;
					height: 40rpx;
					position: relative;
					.cont1,.cont2,.cont3{
						view{
							width: 12rpx;
							height: 12rpx;
							background-color: #FFC749;
							border-radius: 100%;
							position: absolute;
							animation: bouncedelay 1.2s infinite ease-in-out;
							animation-fill-mode: both;
						}
						.circle1{top: 0;left: 0;}
						.circle2{top: 0;right: 0;}
						.circle3{right: 0;bottom: 0;}
						.circle4{left: 0;bottom: 0;}
					}
					.cont1{
						.circle2{animation-delay: -0.9s;}
						.circle3{animation-delay: -0.6s;}
						.circle4{animation-delay: -0.3s;}
					}
					.cont2{
						.circle1{animation-delay: -1.1s;}
						.circle2{animation-delay: -0.8s;}
						.circle3{animation-delay: -0.5s;}
						.circle4{animation-delay: -0.2s;}
					}
					.cont3{
						.circle1{animation-delay: -1.0s;}
						.circle2{animation-delay: -0.7s;}
						.circle3{animation-delay: -0.4s;}
						.circle4{animation-delay: -0.1s;}
					}
					.animation-cont{
						position: absolute;
						width: 100%;
						height: 100%;
					}
					.cont2{
						transform: rotate(45deg);
					}
					.cont3{
						transform: rotate(90deg);
					}
				}
			}
		}
		.bottom{
			position: relative;
			height: 80rpx;
		}
	}
	@keyframes bouncedelay {
		0%,100%,80%{transform: scale(0.0);}
		40%{transform: scale(1.0);}
	}
</style>
