<template>
	<div class="bo-p2222">
	 	 <table-list :config="tableConfig" :datas="datas" @table-control-click="handle"></table-list>
	</div>
</template>

<script>
import TableList from '../components/assemble/tableList.vue'

export default {
  components: {
 	 TableList
  },
  created: function(){
   
  },
  methods: {
    handle: function(data){
      alert(data.id)
    }
  },
  data (){
  	return {
  		 tableConfig: {
          th: [{
            title: '标题一',
            param: 'vala'
          },{
            title: '标题二',
            param: 'valb'
          }],
          control: [{
            btnName: '获取ID'
          }]
       },
       datas: [{
          id: 1,

          vala: '111111',
          valb: '222222'
       }, {
          id: 2,
          vala: '333333',
          valb: '444444' 
       }]
  	}
  }
}
</script>
