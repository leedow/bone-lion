<template>
<dropdown>        
	<button slot="btn" class="bo-btn-blank" v-bind:style="{
	width: btnWidth + 'px'
	}">{{title}} <i class="icon iconfont"></i></button>
	<ul class="bo-dropdown-menu" slot="dropdown" v-bind:style="{
	width: itemWidth + 'px'
	}">         
	    <li class="bo-tab-item-icon">     
	        <button  v-for="item in data"  @click="selectItem(e, item)"   data-val="{{item.val}}">{{item.text}}</button>                          
	    </li>                                      
	 </ul>               
</dropdown>
</template>

<script>
import {Btn, Dropdown} from '../buttons'

export default {
  components: {
      Btn,
      Dropdown
  },
  methods: {
	selectItem: function(e, item){
		this.val = item.val;

		this.$dispatch('selecter-change', this);
		this.title = item.text;
	}
  },
  props: {
  	title: {
  		default: '请选择'
  	},
  	data: {
  		default: []
  	},
  	btnWidth: {
  		default: 100
  	},
  	itemWidth: {
  		default: 100
  	}
  },
  created: function(){
      
  },

  events: {
      
  },
  data (){
    return {
        val: '',
    }
  }
}
</script>
