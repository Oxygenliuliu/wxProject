import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		payUrl: 'https://proxy.fydlsoft.com/proxy',
		loginParams:{dbname: '',url: '',userName: '',userPassword: '',personName: '',personId: '',port: '7798'},
		token: '',
		params:{},
		personName: '',
		transitUrl:'https://cloud.fydlsoft.com', //
		dbnameCode: '',//账套编码 
	},
	getters:{
	},
	mutations:{
		setDbnameCode(state,data){
			state.dbnameCode = data
		},
		setPersonName(state,data){
			state.personName = data;
		},
		setParams(state,obj){
			state.params = {...obj};
		},
		init(state){
			state.loginParams = {dbname: '',url: '',userName: '',userPassword: '',personName: '',personId: ''}
			state.token = ''
		},
		changeLoginParams(state,obj){
			state.loginParams = obj
		},
		changeDbname(state,dbname){ //更改dbname
			state.loginParams.dbname = dbname || '';
		},
		changeUrl(state,url){//更换地址
			state.loginParams.url = url;
		},
		changePort(state,port){//更换端口
			state.loginParams.port = port || 7798;
		},
		changeLoginToken(state,tok){//更改token
			state.token = tok
		},
		changeUserIfno(state,obj){ //更改用户信息
			state.loginParams.userName = obj.name;
			state.loginParams.userPassword = obj.password;
		},
		changeUserPassword(state,password){
			state.loginParams.userPassword = password;
		},
		changePersonInfo(state,obj){
			state.loginParams.personName = obj.personName;
			state.loginParams.personId = obj.personId;
		}
	},
	actions:{
		
	}
})
export default store
