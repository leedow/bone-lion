<template>
	<div class="bo-pagination">
		<a v-for="item in buttons" @click="handle(e, item)" :class="item.current?'current':false" data-page="item.page">{{item.title}}</a>
	</div> 
</template>

<script>
export default {
  components: {
	  
  },
  props: {
  	pageIndex: {
  		default: 0
  	},
  	pageSize: {
  		default: 0
  	},
  	total: {
  		default: 0//总数
  	},
  	pageCount: {//总页数
  		default: 0
  	}
  },
  created: function(){
  	this.display();
  },
  watch: {
  	'pageIndex': function(){
  		this.display();
  	},
  	'pageSize': function(){
  		this.display();
  	},
  	'total': function(){
  		this.display();
  	}
  },
  methods: {
	display: function(){
		this.total = parseInt(this.total);
		this.pageIndex = parseInt(this.pageIndex);
		this.pageSize = parseInt(this.pageSize);
		this.pageCount = parseInt(this.pageCount);
		this.buttons = [];
		if(this.pageCount == 0){
			this.pageCount = Math.ceil(this.total/this.pageSize);
		}

		var tmp = '';

		var n = 4;
		for(var i=0; i<n; i++){
			var current = this.pageIndex-n+i;
			if(current < 0) continue;
			let ifCurrent = false;
			if(this.pageIndex == current){
				ifCurrent = true;
			} else {
				ifCurrent = false;
			}	

			this.buttons.push({
				current: ifCurrent,
				page: current,
				title: current+1
			})

		}

		for(var i=0; i<n; i++){
			var current = this.pageIndex+i;
			if(current >= this.pageCount) break;
			let ifCurrent = false;
			if(this.pageIndex == current){
				ifCurrent = true;
			} else {
				ifCurrent = false;
			}	

			this.buttons.push({
				current: ifCurrent,
				page: current,
				title: current+1
			})

		}
	
		if(this.pageIndex+1 == this.pageCount){
			//var last = ''
		} else {
			let _this = this;
			this.buttons.push({
				current: false,
				page: _this.pageCount-1,
				title: '最后一页'
			})
		}
		if(this.pageIndex == 0){
			 //
		} else {
			this.buttons.unshift({
				current: false,
				page: 0,
				title: '第一页'
			})
		}	
	},
	handle: function(e, item){
		this.$dispatch('pagination-click', item);
		this.pageIndex = item.page;
		this.display();
	}
  },
  events: {
      
  },
  data (){
    return {
    	buttons: []
    }
  }
}
</script>
