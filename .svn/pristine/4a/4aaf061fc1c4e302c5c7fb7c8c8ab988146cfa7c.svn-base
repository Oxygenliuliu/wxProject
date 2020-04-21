import Vue from 'vue'
import App from './App'
import wpublic from './common/js/public.js'
// 挂载vuex
import store from './store'  
Vue.prototype.$store = store

Vue.prototype.wpublic = wpublic

Vue.config.productionTip = false
Vue.filter('priceFormat',(arg,num=0,symbol,spilt=false,isShow = true)=> {//全局金额过滤器
	//全局过滤器arg表示原始参数
	//num表示小数点位,默认保留两位
	//symbol表示符号,可以自定义添加，字符串格式
	//spilt是否进行逗号分隔，可选参数true，false，默认参数false
	arg=Number(arg).toFixed(num);
	let power = uni.getStorageSync("loginData").lookSale;
	if(spilt == true){
		if (arg.indexOf('.') == -1) {
			arg=arg.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}else{
			var parts = arg.split(".");
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			arg = parts.join(".");
		}
	}
	if(symbol){
		arg=symbol+arg;
	}
	if(power == 0&&isShow) arg = '***'
	return arg;
	});
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
