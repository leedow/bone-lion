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
		var _this = this;
		setTimeout(function(){
			//_this.menu.group1.show = false;
			//_this.menu.group1.data[0].show = false;
		}, 2000)
	},
	data () {
		return {
			menu: {
				'group1': {
					show: true,
					data: [{
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
				} ,
				'group2': {
					show: true,
					data: [{
			            key: 2,
			            title: '系统首页',
			            path: '/',
			            icon: 'home',
			            select: false,
			            show: true
			        },{
			            key: 3,
			            title: 'DEMO组件',
			            path: '/demo',
			            icon: 'sort',
			            select: false,
			            show: true
			        }]
				} 
			} 

			 
		}
	},
	components: {
		Root,
		headerTop,
		sidebar
	}
}
</script>
