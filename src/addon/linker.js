window.Linker = {
	history: [],
	add: function(href){
		 
		var old = this.history.pop();

		if(old == href || old == undefined){
			this.history.push(href);
		} else {
			this.history.push(old);
			this.history.push(href);
		}
		 
		this._save();
		 
	},
	//keep:是否保留链接地址在历史
	get: function(keep){
		 
		var history =  this.history.pop();

		if(keep){
			this.history.push(history);
		}
		this._save();
		return history?history:''
	},
	init: function(){
		 
		if(window.sessionStorage.linkHistory){
			var storage;
			try{
				storage = JSON.parse(window.sessionStorage.linkHistory);
			} catch(e){
				storage = [];
			} finally {
				storage = []
			}
			this.history = storage;
		} else {
			this.history = [];
		}
		 
	},
	_save: function(){
		if(window.sessionStorage){
			window.sessionStorage.linkHistory = JSON.stringify(this.history);
		} else {
			console.log('sessionStorage unsupported');
		}
	}
}

Linker.init();

export default Linker