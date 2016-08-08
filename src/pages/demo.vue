<template>

	
	<div class="bo-col-content bo-p2222">
 
		<div class="bo-box content-box" style="height: 400px">
			<tabs-side>
				<tabs-item-side tag="可以添加标注" path="/demo/steps">
						 步骤条
				</tabs-item-side>
				<tabs-item-side tag="" path="/demo/table">
						表单列表
				</tabs-item-side>
				 
			</tabs-side>

			 

			 <router-view></router-view>
			 
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

		this.$dispatch('toggle-back', true);

		
	},
  components: {
    headerTop,
    sidebar,
    TabsSide,
    TabsItemSide
  },
  methods: {
  	test: function(){
  		this.$router.save('/test');
  		this.$router.save('/test2');

  	}
  }
}
</script>
