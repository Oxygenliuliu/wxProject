let loginJudge = function(data){
	if (data == 2){
		// uni.showToast({title:"登录身份已过期，正在重新登录中",icon:'none',duration:1000});
		// let token = uni.getStorageSync('token');
		let loginData = uni.getStorageSync('loginData');
		setTimeout(function(){
			uni.request({
				url: getApp().globalData.webUrl+'/cs/login',
				// url: 'http://192.168.199.194/pc/cds/testLogin',
				method: 'GET',
				data: {
					username: loginData.username,
					password: loginData.password,
					dbname:	loginData.dbname,
					// id:2
				},
				success: (res) => {
					if(res.data.status == 0){
						let token = res.data.token;
						// loginData = {
						// 	username: loginData.username,
						// 	password: loginData.password,
						// 	dbname: loginData.dbname
						// }
						// loginData = loginData;
						uni.setStorageSync('token',token)
						// uni.setStorageSync('loginData',loginData);
						// uni.showToast({title:'登录成功',icon:'none',});
					}else if(res.data.status == 4){
						// uni.showToast({title:'密码错误',icon:'none',});
						setTimeout(function(){
							uni.navigateTo({
								url: '../../pages/index/login?page=0'
							})
						},1000);
					}else{
						// uni.showToast({title:res.data.message,icon:'none',});
						setTimeout(function(){
							uni.navigateTo({
								url: '../../pages/index/login?page=0'
							})
						},1000);
					}
				},
				fail: (res) => {
					// uni.showToast({title:'登录失败',icon:'none',});
					setTimeout(function(){
						uni.navigateTo({
							url: '../../pages/index/login?page=0'
						})
					},1000);
				}
			});
		},1000);
		return false;
	}
}

export default{
	loginJudge: loginJudge
}