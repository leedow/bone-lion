<template>
	<tabs-side>
		<tabs-item-side v-for="item in tabsData" :current="item.current" :id="item.id"  :tag="item.tag">
				<i v-if="item.icon" class="icon iconfont icon-{{item.icon}}"></i> {{item.title}}
		</tabs-item-side>	 
	</tabs-side> 
</template>

<script>
import TabsSide from './tabs-side.vue'
import TabsItemSide from './item-side.vue'

export default {
  components: {
    TabsSide,
    TabsItemSide
  },
  ready: function(){
  	this.data = this.tabsData;
  },
  methods: {
      
  },
  events: {
      
  },
  props: {
  	tabsData: {
  		default: []
  	}
  },
   
  data (){
    return {
         data: []
    }
  }
}
</script>
