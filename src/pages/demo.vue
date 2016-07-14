<template>

	
	<div class="bo-col-content bo-p2222">
 
		<div class="bo-box content-box" style="height: 400px">
			<tabs-side>
				<tabs-item-side tag="添加管理员">
						星期一  
				</tabs-item-side>
				<tabs-item-side current=true  tag="添加管理员">
						星期二 
				</tabs-item-side>
				<tabs-item-side  tag="添加管理员">
						星期二 
				</tabs-item-side>
			</tabs-side>

			<div class="bo-p2222"> 

			<table class="bo-table-border-all">
				<tr>
					<th>1111</th>
					<th>2222</th>
				</tr>
				<tr>
					<td>1111</td>
					<td>2222s</td>
				</tr>
			</table>
			</div>
		</div>
	</div>

</template>

<script>
import {headerTop} from '../components/header'
import {sidebar} from '../components/sidebar'
import {TabsSide, TabsItemSide} from '../components/tabs'

export default {
	ready: function(){
		var _this = this;
		setTimeout(function(){
			_this.$dispatch('toggle-sidebar', true);		
		}, 100)
		
	},
  components: {
    headerTop,
    sidebar,
    TabsSide,
    TabsItemSide
  }
}
</script>
