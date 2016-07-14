/*
 * 原生DOM辅助操作
 */

module.exports = {
	//return Array
	getClass: function(obj){
		
		return this._transStringToArray(obj.className);
	},
	addClass: function(obj, cla){
		var classArr = this.getClass(obj);
		classArr.push(cla);
		obj.className = this._transArrayToString(classArr);
	},
	removeClass: function(obj, cla){
		var classArr = this.getClass(obj);
		var result = [];
		for(var i=0; i<classArr.length; i++){
			if(classArr[i] == cla)
				continue;
			result.push(classArr[i]);
		}
		obj.className = this._transArrayToString(result);
	},
	hasClass: function(obj, str){
		var classStr = obj.className;
		if(classStr.indexOf(str) >= 0){
			return true;
		} else {
			return false;
		}
	},
	//将字符串class转换为数组
	_transStringToArray: function(str){
		
		var result = [],
			strArray = str.split(' ');

		for(var i=0; i<strArray.length; i++){
			if( !this._ifIn(strArray[i], result) ){
				result.push(strArray[i]);
			}
		}
		return result;
	},
	//将数组转化为字符串 
	_transArrayToString: function(arr){
		var str = '';
		for(var i=0; i<arr.length; i++){
			var divi = ' ';
			
			if(i+1 == arr.length)
				divi = ''
			
			if( str.indexOf(arr[i])>=0 ){
				continue;
			}
			str = str + divi + arr[i]; 
		}
		return str;
	},
	//判断字符串是否在数组中
	_ifIn: function(str, arr){
		var flag = false;
		for(var i=0; i<arr.length; i++){
			 if(arr[i] == str)
			 	flag = true;
		}
		return flag;
	}
}