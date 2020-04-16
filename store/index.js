import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
		select:false,
		Orderdetail: {detailID: '', goodsInfo: {NAME:'',ID:''},projname: '哈哈哈',w:'',h: '',qty: 0,price: '',LpTotal: '',
			total: '',remark: '',LpNameList: [],
		},
		material:{detailID: '',goodsInfo: {NAME: '',ID: '',HEIGHT: '',WIDTH: ''},WholeQty: '',price: 0,qty: '',LpTotal: 0,remark: ''}
    },
    getters:{
       
    },
    mutations:{
		openStatusSelect(state){
			state.select = true;
		},
		closeStatusSelect(state){
			state.select = false;
		},
		changeOrderDetail(state,data){//点击弹出层更改值
			state.Orderdetail = {...data};
		},
		orderDetailGoods(state,obj){
			let name = obj.name;
			let arr = obj.data;
			if(name == 'LpNameList'){
				let flag = true;
				state.Orderdetail[name].forEach((i,j)=>{
					if(i.ID == arr.ID){
						flag = false;
					}
				})
				if(flag)state.Orderdetail[name].push(arr);
			}else{
				state.Orderdetail[name] = arr;
			}
		},
		initOrderDetail(state){//订单重置
			state.Orderdetail = {goodsInfo: {NAME:'',ID:''},projname: '哈哈哈',w:'',h: '',qty: '',price: '',LpTotal: '',
				total: '',remark: '',LpNameList: [],
			}
		},
		initMaterial(state){ //材料重置
			state.material = {detailID: '',goodsInfo: {NAME: '',ID: '',HEIGHT: '',WIDTH: ''},WholeQty: '',price: 0,qty: '',LpTotal: 0,remark: ''};
		},
		changeMaterailDetail(state,data){ //点击弹出层更改值
			state.material = {...data};
		},
		orderMaterialGoods(state,obj){
			let name = obj.name;
			let arr = obj.data;
			if(name == 'LpNameList'){
				let flag = true;
				state.material[name].forEach((i,j)=>{
					if(i.ID == arr.ID){
						flag = false;
					}
				})
				if(flag)state.material[name].push(arr);
			}else{
				state.material[name] = arr;
			}
		},
	},
    actions:{
		
    }
})
export default store
