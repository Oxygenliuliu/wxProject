const deepClone = function(obj) { //深拷贝
	const isObject = args => (typeof args === 'object' || typeof args === 'function') && typeof args !== null
	if (!isObject) throw new Error('Not Reference Types')
	let newObj = Array.isArray(obj) ? [...obj] : { ...obj }
	Reflect.ownKeys(newObj).map(key => {
	newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
	})
	return newObj
}
const getDay = function(day){//获取几天前的日期
    var today = new Date();
    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear+"-"+tMonth+"-"+tDate;
}
const getDayFor = function(day){//获取星期日期
	switch (day){
		case '0':
		return getDay(-7)
			break;
		case '1':
		return getDay(-1)
			break;
		case '2':
		return getDay(-2)
			break;
		case '3':
		return getDay(-3)
			break;
		case '4':
		return getDay(-4)
			break;
		case '5':
		return getDay(-5)
			break;
		case '6':
		return getDay(-6)
			break;
		default:
			break;
	}
}
const doHandleMonth = function(month){
    var m = month;
    if(month.toString().length == 1){
     m = "0" + month;
    }
    return m;
}
const computeAverage = function(arr){
	if(arr.length == 0 || !(arr instanceof Array))return
	let arrLenght = arr.length;
	let averageNum = (100 / arrLenght).toFixed(1);
	arr.forEach((i,j)=>{
		if((j+1)!=arrLenght){
			i.CompletedRate = averageNum;
		}else{
			i.CompletedRate = (100 - averageNum*10*(arrLenght-1)/10).toFixed(1);
		}
	})
	return arr;
}
const getRandomNumber = function(obj){
	if(!(Object.prototype.toString.call(obj) === '[object Object]')){ throw(obj + ' is not a Object');return }
	let num = parseInt(obj.num || 32);
	let chars = obj.chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result = '';
	for(var i = 0;i < num;i++){result += chars[Math.floor(Math.random()*chars.length)];}
	return result;
} 
export default{
	deepClone,
	getDay,
	getDayFor,
	computeAverage,
	getRandomNumber
}