<template>
	<!-- 底部 -->
	<view class="uni-bottom">
		<text class="copyright">成都飞扬动力软件有限公司 Copyright ©2011-{{year}}</text>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				year: new Date().getFullYear()
			}
		}
	}
</script>
	
<style>
	.uni-bottom {
		width: 100%;
		position: absolute;
		bottom: 10px;
	}
	.uni-bottom text{
		font-size: 0.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.copyright{
		color: #8f8f94;
		font-size: 0.7rem;
		display: block;
		text-align: center;
	}
</style>
