<template>
	<view class="container">
		<scroll-view class="scroll-container" scroll-x scroll-with-animation v-if="items.length > 1">
			<block v-for="(item,index) in items" :key='index'>
				<view class="scroll-item" @tap='change(item.typeId)'>
					<view class="item" :class="{'yellow':item.typeId == indexs}">
						{{item.name}}
					</view>
				</view>
			</block>
		</scroll-view>
		<view class="all-mask" @tap="close()" v-show="maskShow"></view>
			<view class="mask">
				<view class="cont" :animation='animationData'>
					<view class="show-cont"  v-show="isTrue[0].isTrue">
						<view class="title">
							综合排序:
						</view>
						<view class="cont-box martop">
							<block v-for="(item,index) in checkboxZH" :key='index'>
								<view class="flex-box" @tap='changeType(0,checkboxZH,item.id)'>
									<view class="left" :class="{'yellow':item.isTrue}">{{item.name}}</view>
									<view class="right">
										<span class='iconfont icongou' v-show='item.isTrue'></span>
									</view>
								</view>
							</block>
						</view>
					</view>
					<view class="show-cont"  v-show="isTrue[1].isTrue">
						<view class="title">
							请选择日期:
						</view>
						<view class="cont-box martop">
							<view class="time">
								<view class="time-cont" @tap="toggleTab('dateTime')">
									{{time.statrTime}}
									<view class="line"></view>
								</view>
								<view class="time-cont" @tap="toggleTab('dateTime1')">
									{{time.endTime}}
								</view>
							</view>
							<block v-for="(item,index) in checkboxTimes" :key='index'>
								<view class="flex-box" @tap='changeType(1,checkboxTimes,item.id)'>
									<view class="left" :class="{'yellow':item.isTrue}">{{item.name}}</view>
									<view class="right">
										<span class='iconfont icongou' v-show='item.isTrue'></span>
									</view>
								</view>
							</block>
						</view>
					</view>
					<view class="show-cont"  v-show="isTrue[2].isTrue">
						<view class="title">
							<view>是否外协:</view>
						</view>
						<view class="cont-box martop">
							<block v-for="(item,index) in checkboxWX" :key='index'>
								<view class="flex-box" @tap='changeType(2,checkboxWX,item.id)'>
									<view class="left" :class="{'yellow':item.isTrue}">{{item.name}}</view>
									<view class="right">
										<span class='iconfont icongou' v-show='item.isTrue'></span>
									</view>
								</view>
							</block>
						</view>
					</view>
					<view class="show-cont"  v-show="isTrue[3].isTrue">
						<view class="title">
							<view>是否登账:</view>
						</view>
						<view class="cont-box martop">
							<block v-for="(item,index) in checkboxDZ" :key='index'>
								<view class="flex-box" @tap='changeType(3,checkboxDZ,item.id)'>
									<view class="left" :class="{'yellow':item.isTrue}">{{item.name}}</view>
									<view class="right">
										<span class='iconfont icongou' v-show='item.isTrue'></span>
									</view>
								</view>
							</block>
						</view>
					</view>
					<view class="title martop">
						筛选条件:
						<span class='iconfont iconcontextdelete' @tap='moveAllChooseData()'></span>
					</view>
					<view class="has-choose">
						<block v-for="(item,index) in chooseData" :key='index'>
							<view v-if="Object.keys(item.times).length == 0" class="inline-block">
								<span class='tag' :class="{'display-none': item.cont ==''}">{{item.cont}}
								<i class='iconfont iconchacha' @tap='moveChoose(item.id)'></i>
								</span>
							</view>
							<view v-else class="inline-block">
								<span  :class="{'display-none': item.cont ==''||Object.keys(item.times).length != 0}" class='tag'>{{item.cont}}
								<i class='iconfont iconchacha' @tap='moveChoose(item.id)'></i></span>
								<span class='tag' :class="{'display-none': Object.keys(item.times).length == 0}">{{item.times.statrTime||''}}, {{item.times.endTime||''}}
								<i class='iconfont iconchacha' @tap='moveChoose(item.id)'></i>
								</span>
							</view>
						</block>
					</view>
					<view class="btns">
						<view class="btn close" @tap='close()'>取消</view>
						<view class="btn sure" @tap='close()'>确定</view>
					</view>
					<w-picker
						mode="date" 
						:startYear="startYear" 
						:endYear="endYear"
						step="1"
						:defaultVal="defaultVal"
						:current="false" 
						@confirm="onConfirm" 
						ref="dateTime" 
						themeColor="#f00"
					></w-picker>
					<w-picker
						mode="date" 
						:startYear="startYear" 
						:endYear="endYear"
						step="1"
						:defaultVal="defaultVal"
						:current="false" 
						@confirm="onConfirm1" 
						ref="dateTime1" 
						themeColor="#f00"
					></w-picker>
				</view>
			</view>
		</view>
</template>

<script>
	import wPicker from '@/components/customize/w-picker/w-picker.vue';
	export default {
		components:{
			wPicker
		},
		props:{
			items:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		data(){
			return{
				// 时间参数
				startYear: "",
				endYear: "",
				defaultVal: "",
				time:{statrTime: '',endTime: ''},
				//end
				indexs: -1,
				isTrue:[
					{id: 101,isTrue: false},
					{id: 102,isTrue: false},
					{id: 103,isTrue: false},
					{id: 104,isTrue: false},
				],
				checkboxZH:[ //综合
					{id: 0,name: '价格升序',isTrue: false},
					{id: 1,name: '价格降序',isTrue: false},
					{id: 4,name: '时间升序',isTrue: false},
					{id: 5,name: '时间降序',isTrue: false},
				],
				checkboxDZ:[ //登账
					{id: 2,name: '待登账',isTrue: false},
					{id: 3,name: '已登账',isTrue: false},
				],
				checkboxWX:[ //外协
					{id: 0,name: '外协',isTrue: false},
					{id: 1,name: '非外协',isTrue: false},
				],
				checkboxTimes:[ //时间段
					{id: 0,name: '今天',isTrue: false},
					{id: 1,name: '7天',isTrue: false},
					{id: 2,name: '本周',isTrue: false},
					{id: 3,name: '30天',isTrue: false},
				],
				chooseData:[
					{id: 101,name: '综合排序',cont: '',times: {},typeId: -1},
					{id: 102,name: '日期',cont:'',times: {},typeId: -1},
					{id: 103,name: '是否外协',cont: '',times: {},typeId: -1},
					{id: 104,name: '是否登账',cont: '',times: {},typeId: -1}
				],
				animationData:{},//动画对象
			}
		},
		methods:{
			//start时间组件
			toggleTab(str){
				// 对时间选择器初始化
				let newDate = new Date();
				let year = newDate.getFullYear();
				this.startYear = "1997";
				this.endYear = year;
				this.defaultVal = this.wpublic.getDay(0);
				this.$refs[str].show();
			},
			onConfirm(val){
				this.time.statrTime = val.result;
				this.chooseData[1].cont = '';
				this.chooseData[1].times.statrTime = val.result;
				if(this.chooseData[1].times.statrTime!=''&&this.chooseData[1].times.statrTime!=null&&this.chooseData[1].times.endTime!=''&&this.chooseData[1].times.endTime!=null){
					this.$emit('dataChange',this.chooseData)
				}
			},
			onConfirm1(val){
				this.time.endTime = val.result;
				this.chooseData[1].cont = '';
				this.chooseData[1].times.endTime = val.result;
				if(this.chooseData[1].times.statrTime!=''&&this.chooseData[1].times.statrTime!=null&&this.chooseData[1].times.endTime!=''&&this.chooseData[1].times.endTime!=null){
					this.$emit('dataChange',this.chooseData)
				}
			},
			//end 时间组件
			change(id){ //切换筛选类别
				this.indexs = id;
				this.isTrue.forEach(i=>{
					if(i.id == id){
						i.isTrue = !i.isTrue
					}else{
						i.isTrue = false
					}
				})
			
			},
			moveChoose(id){ //去除标签
				this.chooseData.forEach((i,j)=>{
					if(i.id == id){
						i.cont = '';
						i.typeId = -1;
						if(j==1)i.times={};
					}
				})
				this.$emit('dataChange',this.chooseData)
			},
			changeType(num,name,id){
				let index = num;
				if(index == 1)this.chooseData[index].times = {};
				name.forEach(i=>{
					if(i.id == id){
						this.chooseData[index].cont = i.name;
						this.chooseData[index].typeId = i.id;
						i.isTrue = true;
					}else{
						i.isTrue = false;
					}
				})
				this.$emit('dataChange',this.chooseData)
			},
			//动画开始
			startAnimate(){
				this.animation.height('400px').step();
				this.animationData = this.animation.export()
			},
			endAnimate(){
				this.animation.height('0').step();
				this.animationData = this.animation.export()
			},
			//动画结束
			//顶部按钮逻辑
			close(){
				this.isTrue.forEach(i=>{
					i.isTrue = false;
				})
			},
			moveAllChooseData(){
				uni.showModal({
					title: '提示',
					content: '是否删除全部',
					success:(res)=> {
						if(res.confirm){
							this.chooseData = [
								{id: 101,name: '综合排序',cont: '',times: {},typeId: -1},
								{id: 102,name: '日期',cont:'',times: {},typeId: -1},
								{id: 103,name: '是否外协',cont: '',times: {},typeId: -1},
								{id: 104,name: '是否登账',cont: '',times: {},typeId: -1}
							]
						}
					}
				})
			}
		},
		computed:{
			maskShow:{
				set(){
					return false;
				},
				get(){
					let flag = false;
					flag = this.isTrue.some(i=>{
						return i.isTrue == true
					})
					if(flag){	this.startAnimate()}else{this.endAnimate();this.indexs = -1}
					return flag
				}
			}
		},
		created() {
			var animation = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease',
			})
			this.animation = animation;
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/iconfont.css";
	page{font-size: 28rpx;color: #2C405A;}
	/* 滚动导航条 */
	.container{
		display: block;
		height: 80upx;
		.scroll-container {
			box-sizing: border-box;
			white-space: nowrap;
			height: 80upx;
			background: #fff;
			position: relative;
			z-index: 1;
			.scroll-item {
				text-align: center;
				display: inline-block;
				padding: 0 0.7rem;
				line-height: 70upx;
				font-size: 28rpx;
				color: rgba(0,0,0,1);
			.item{
				position: relative;
				.cont-box{
					position: absolute;
				}
			}
			}
		}
		.all-mask{
			top:160rpx;
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 99;
			background: rgba(0,0,0,0.3);
		}
		.mask{
			top:160rpx;
			width: 100%;
			position: absolute;
			z-index: 100;
			.cont{
				background: #fff;
				height: 0;
				overflow: hidden;
				position: relative;
				.title{
					font-size: 32rpx;
					font-weight: 500;
					color: $gray2;
					padding: 0 2.5%;
				}
				.cont-box{
					padding: 0 2.5%;
					.time{
						display: flex;
						width: 100%;
						justify-content: center;
						.time-cont{
							height: 60rpx;
							line-height: 60rpx;
							width: 200rpx;
							border-radius: 30rpx;
							background: #C8C7CC;
							text-align: center;
							position: relative;
							margin: 0 40rpx;
							color: #fff;
							.line{
								position: absolute;
								top: 28rpx;
								left: 210rpx;
								content: '';
								background: #DCDFE6;
								width: 60rpx;
								height: 2rpx;
							}
						}
					}
					.check-box{
						margin-right: 20rpx;
					}
					.flex-box{
						display: flex;
						justify-content: space-between;
						height: 60rpx;
						align-items: center;
						.left{}
						.right{
							.icongou{
								color: #FFCD42;
							}
						}
					}
				}
				.martop{
					margin-top: 30rpx;
					position: relative;
					.iconcontextdelete{
						position: absolute;
						right: 2.5%;
						top: -4rpx;
						padding: 10rpx;
						color: $black;
					}
				}
				.has-choose{
					padding: 0 2.5%;
					.tag{
						display: inline-block;
						height: 32px;
						padding: 0 10px;
						line-height: 30px;
						font-size: 12px;
						border-radius: 4px;
						box-sizing: border-box;
						white-space: nowrap;
						background-color: #fdf6ec;
						border-color: #faecd8;
						color: #e6a23c;
						margin:20rpx;
						i{
							display: inline-block;
							border-radius: 50%;
							text-align: center;
							position: relative;
							font-size: 12px;
							height: 16px;
							width: 16px;
							line-height: 16px;
							vertical-align: middle;
							top: -1px;
							right: -5px;
						}
					}
				}
				.btns{
					display: flex;
					align-items: center;
					height: 80rpx;
					justify-content: space-between;
					width: 100%;
					position: absolute;
					bottom: 0;
					.btn{
						flex: 1;
						display: flex;
						justify-content: center;
						line-height: 1;
						white-space: nowrap;
						background: #fff;
						border: 1px solid #dcdfe6;
						color: #606266;
						text-align: center;
						box-sizing: border-box;
						outline: none;
						margin: 0;
						transition: .1s;
						font-weight: 500;
						padding: 12px 20px;
						font-size: 14px;
						border-radius: 4px;
					}
					.sure{
						color: #fff;
						background-color: #f56c6c;
						border-color: #f56c6c;
					}
					.close{}
				}
			}
		}
		.yellow{
			color: #FFCD42 !important;
		}
		.inline-block{
			display: inline-block;
		}
		.display-none{display: none !important;}
	}
</style>