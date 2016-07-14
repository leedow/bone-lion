<template>
<div class="bo-container-sys">
    <slot></slot>
</div>
</template>

<script>


export default {
  components: {
    
  },
  methods: {
   
  },
  events: {
    'toggle-sidebar': function(mode){
        this.$broadcast('toggle-sidebar', mode);
    }
  },
  props (){
    return {

    }
  }
}
</script>
