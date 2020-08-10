<template>
	<view :style="{height:(height)+'px'}" style="padding-top: 200rpx;">
		<view style="height: 90%;">
        	<view class="form re">
        		<view class="password">
        			<input placeholder="请输入原登录密码" v-model="oldpasswd" password=true placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="password">
        			<input placeholder="请输入新登录密码(至少6位)" v-model="newpasswd" password=true placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="password">
        			<input placeholder="请确认新登录密码(至少6位)" v-model="confirmpasswd" password=true placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="btn" @tap="doChange">修改密码</view>
        	</view>
        </view>
		<copyright></copyright>
	</view>
</template>


<script>
	import copyright from "@/components/customize/copyright.vue";
	export default {
		components: {
		    copyright,
		},
		data() {
			return {
				oldpasswd:'',
				newpasswd:"",
				confirmpasswd:'',
				height:'',
			}
		},
		onLoad() {
		},
		methods: {
			async doChange(){
				uni.hideKeyboard()
				if(this.oldpasswd==''){
					uni.showToast({title: '请输入原登录密码',icon:"none"});
					return false; 
				}
				if(this.newpasswd==''){
					uni.showToast({title: '请输入新登录密码',icon:"none"});
					return false; 
				}
				if(this.confirmpasswd==''){
					uni.showToast({title: '请确认新登录密码',icon:"none"});
					return false; 
				}
				if(this.confirmpasswd!=this.newpasswd){
					uni.showToast({title: '请确认两次输入的新密码一致',icon:"none"});
					return false; 
				}
				if(this.newpasswd==this.oldpasswd){
					uni.showToast({title: '不能和原登录密码一致，请重新输入',icon:"none"});
					return false; 
				}
				if(!RegExp(/^.{6,}$/).test(this.oldpasswd)){
					uni.showToast({title: '原登录密码格式不对，密码至少6位数',icon:"none"});
					return false; 
				}
				if(!RegExp(/^.{6,}$/).test(this.newpasswd)){
					uni.showToast({title: '新密码格式不对，密码至少6位数',icon:"none"});
					return false; 
				}
				let storageData = JSON.parse(uni.getStorageSync('userInfo'));
				if(this.oldpasswd != storageData.userPassword){
					uni.showToast({title: '原始密码不正确',icon:"none"});
					return false; 
				}
				let params = {
					Mode: 0,
					NewPassWord: this.newpasswd
				}
				let data = await this.wrquest(params).catch(()=>{return 'wrong'});
				if(data!='worng'){
					if(data.status == 0){
						this.$store.commit('changeUserPassword',this.newpasswd);
						uni.showToast({title: '修改密码成功,请重新登录',icon: 'success',duration:1000})
						setTimeout(()=>{
							uni.navigateTo({url: '../../pages/index/login'})
						},1000)
					}else{
						uni.showToast({title: data.message,icon: 'none'})
					}
				}
			},
			wrquest(params){
				uni.showLoading({title: '密码修改中...'})
				return new Promise((resolve,reject)=>{
					uni.request({
						//url: this.url + '/public/common',
						url: this.url + '/transit_server',
						//method: 'GET',
						method: 'POST',
						data:{
							interface_add: 'http://122.114.123.189:7798/public/common',
							token: this.token,
							params: JSON.stringify(params)
						},
						success: (res) => {
							resolve(res.data)
						},
						fail: (erro) => {
							reject(erro)
						},
						complete: () => {
							uni.hideLoading()
						}
					})
				})
			}
		},
		computed:{
			url: {
				get: function(){
					return this.$store.state.loginParams.url
				},
				set: function(){
					return ''
				}
			},
			token: {
				get: function(){
					return this.$store.state.token
				},
				set: function(){
					return ''
				}
			}
		},
	}
</script>


<style lang="scss">
	@import "../../common/css/login.scss";
	.uni-bottom {
		position: absolute;
		bottom: 10px;
	}
</style>
