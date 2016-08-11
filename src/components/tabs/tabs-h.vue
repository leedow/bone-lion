<template>
  <tabs-horizon>
    <tabs-item-horizon v-for="item in tabsData" :current="item.current" :id="item.id" :path="item.path"  :tag="item.tag">
        <i v-if="item.icon" class="icon iconfont icon-{{item.icon}}"></i> {{item.title}}
    </tabs-item-horizon>  
  </tabs-horizon> 
</template>

<script>
import TabsHorizon from './tabs-horizon.vue'
import TabsItemHorizon from './item-horizon.vue'

export default {
  components: {
    TabsHorizon,
    TabsItemHorizon
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

