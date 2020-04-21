<template>
	<view :style="{height:(height)+'px'}">
		<view class="login">
			<view class="loginImg">
				<view class="login-head">
					<image src="../../static/fumou-center-template/header.jpg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="login-center">
			<view class="login-keys">
				<view style="width: 95%; margin: auto;margin-bottom: 20px;" @tap="chooseDbname()">
					<xfl-select style="border-radius: 20px;background: none;"
					:list="accountList"
					:clearable="false"
					:showItemNum="5" 
					:isCanInput="false"  
					:style_Container="listBoxStyle"
					:placeholder = "'请选择账套'"
					@change="change"
					@clear="clearSelect"
					@blur="blurSelect"
					@setInput="setInput"
					ref='xfl'
					>
					</xfl-select>
				</view>
			</view>
		</view>
		<view class="senior senior-input">
			<view class="password">
				<input placeholder="请输入服务器(IP/域名)" v-model="domain" @blur="blurInput" type="text" placeholder-style="color: #cccccc;" />
			</view>
			<view class="password">
				<input placeholder="请输入端口号" v-model="port" @blur="portInput" type="text" placeholder-style="color: #cccccc;" />
			</view>
			<view class="btn" @tap="doReset">确 定</view>
		</view>
		<view class="tip">
			<view class="tips1">
				<view class="top">请在上面输入框，输入域名例如:</view>
				<view class="bottom">"www.finedoing.com"</view>
				<view class="block"></view>
			</view>
			<view class="tips2">
				<view class="top">请在最后一个输入框，输入端口例如:</view>
				<view class="bottom">"80"</view>
			</view>
		</view>
		<copyright></copyright>
	</view>
</template>

<script>
	import copyright from "@/components/customize/copyright.vue";
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	export default{
		components:{
			copyright,xflSelect
		},
		data(){
			return{
				height: '',
				domain:'',
				port: '7798',
				listBoxStyle: `height: 45px; font-size: 16px;`,
				accountList:[],  //账套列表
				isClick: false,
				loginNumber: '',
				// account: false,  //false选择账套 true设置域名/ip
			}
		},
		onLoad(options){
			uni.getSystemInfo({
			    success:(res)=> {
					this.height = res.windowHeight;
			    }
			});
			let str = uni.getStorageSync('domain');
			if(str){
				let intercept = str.substring(7);
				let division = intercept.split(':');
				this.domain = division[0];
				this.port = division[1];
			}
		},
		methods:{
			chooseDbname(){
				this.isClick = !this.isClick;
				if(this.isClick){
					if(this.url == ''){
						uni.showToast({title: '请先设置服务器地址,才能获取账套',icon: 'none'})
					}else{
						this.getAccountset();
					}
				}
			},
			getAccountset(){// 获取账套
				uni.showLoading({title: '加载中...'})
				uni.request({
					url: this.url + '/cs/serverinfo',
					method: 'GET',
					data: {
						type: 1,
					},
					success: (res) => {
						if(res.data.status == 0){
							this.accountList = res.data.DBNames;
							this.loginNumber = res.data.DBNames[0];
						}
					},
					fail: (res) => {
						uni.showToast({title: '获取账套失败',icon:"none"});
					},complete:()=> {
						uni.hideLoading();
					}
				});
			},
			// 选择账套
			change({newVal, oldVal, index, orignItem}){
				this.loginNumber = newVal;
				this.changeStoreUrl()
			},
			// 叉掉所选账套时执行
			clearSelect(){
				this.loginNumber = '';
			},
			blurInput(e){
				this.domain = e.detail.value;
				this.changeStoreUrl()
			},
			portInput(e){
				this.port = e.detail.value;
				this.changeStoreUrl()
			},
			someInit(){ //数据初始化
				if(this.url){
					let index1 = this.url.indexOf('//');
					let index2 = this.url.lastIndexOf(':');
					this.domain = this.url.substring(index1 + 2,index2);
					this.port = this.url.substring(index2 + 1,this.url.length);
				}
				if(this.dbname){
					this.loginNumber = this.dbname;
					this.$nextTick(function(){
						this.$refs.xfl.setInput(this.loginNumber)
					})
				}
			},
			changeStoreUrl(isUrl){
				let dbname = this.loginNumber.replace(/ /g,'');
				let domin = this.domain.replace(/ /g,'');
				let port = this.port.replace(/ /g,'');
				if(domin!='' &&port!=''){
					let url = 'http://'+domin+':'+port;
					this.$store.commit('changeUrl',url)
				}
				if(dbname!=''){
					this.$store.commit('changeDbname',dbname)
				}
			},
			doReset(){
				uni.hideKeyboard();
				if(this.domain == ''){
					uni.showToast({title: '请输入域名',icon:"none"});
					return
				}else if(this.port == ''){
					uni.showToast({title: '请输入端口',icon:"none"});
					return
				}
				else if(this.loginNumber == ''){
					uni.showToast({title: '请选择账套',icon:"none"});
					return
				}
				let obj = {
					dbname: this.loginNumber,
					url: this.url,
					userName: '',
					userPassword: ''
				};
				uni.setStorageSync('userInfo',JSON.stringify(obj));
				uni.navigateBack();	
			}
		},
		created() {
			this.someInit();
		},
		computed:{
			dbname:{
				get:function(){
					return this.$store.state.loginParams.dbname
				},
				set:function(){
					return ''
				}
			},
			url: {
				get:function(){
					return this.$store.state.loginParams.url
				},
				set:function(){
					return ''
				}
			}
		}
	}		
</script>

<style lang="scss">
	page{
		background: #eee;
	}
	.login{
		width: 100%;
		height: 24%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
		.loginImg{
			width: 100px;
			height: 100px;
			border: 2px solid #b0d3fd;
			border-radius: 50%;
			text-align: center;
			.login-head{
				width: 90px;
				height: 90px;
				border: 1px solid #b0d3fd;
				border-radius: 50%;
				margin-left: 4px;
				margin-top: 4px;
				text-align: center;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
					overflow: hidden;
				}
			}
		}
	}
	.login-center{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 24px;
		.login-keys{
			width: 90%;
			height: 30px;
			display: flex;
		}
	}
	.senior {
		width: 86%;
		padding: 0 7%;
		font-size: 30upx;
		.password{
			width: calc(100% - 90upx);
			height: 90upx;
			display: flex;
			align-items: center;
			border-radius: 45upx;
			background-color: rgba(150, 150, 150, 0.1);
			padding: 0 45upx;
			margin-bottom: 26upx;
			input {
				width: 100%;
				height: 50upx;
				color: rgba($color: #222222, $alpha: 0.8);
				font-weight: 200;
			}
		}
		.btn {
			color: #ffffff;
			width: 100%;
			height: 90upx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 45upx;
			background-color: #4A8DD6;
			font-size: 40upx;
		}
	}
	.tip{
		background: #F7F7F7;
		margin: 0 7%;
		// position: relative;
		margin-top: 30px;
		padding: 20px 0;
		border-radius: 5px;
		.tips1,.tips2{
			padding-left: 10px;
			display: block;
			// margin-top: 3vw;
			font-size: 0.7rem;
			color: #777;
			.bottom,.top{
				text-align: center;
			}
			
		}
		.tips2{
			span{
				color: red;
			}
		}
	}
	.block{
		display: block;
		position: relative;
		content: '';
		height: 1px;
		width: 90%;
		background: #888;
		margin: 10px auto;
	}
</style>
