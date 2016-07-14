<template>
<root>
	<div class="bo-col-header bo-header-fixed">
		 <header-top></header-top>
	</div>

	<sidebar :menu-data="menu"></sidebar>
	
	<router-view></router-view>
	 
</root>
</template>

<script>
import {headerTop} from '../components/header'
import {sidebar} from '../components/sidebar'
import Root from '../components/root.vue'

export default {
	created: function(){
		
	},
	data () {
		return {
			menu: [{
	            key: 0,
	            title: '系统首页',
	            path: '/',
	            icon: 'home',
	            select: true,
	            show: true
	        },{
	            key: 1,
	            title: 'DEMO组件',
	            path: '/demo',
	            icon: 'sort',
	            select: false,
	            show: true
	        }]
		}
	},
	components: {
		Root,
		headerTop,
		sidebar
	}
}
</script>
