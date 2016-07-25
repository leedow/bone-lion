<template>
	<div class="bo-p2222">
	 	<steps :data="data"></steps>
	</div>
</template>

<script>
import Steps from '../components/assemble/steps.vue'

export default {
  components: {
 	 Steps
  },
  created: function(){
   
  },
  data (){
  	return {
  		data: [{
  			icon: 'check',
  			title: '步骤一',
  			done: true
  		}, {
  			icon: 'check',
  			title: '步骤二',
  			done: false
  		}, {
  			icon: 'check',
  			title: '步骤三',
  			done: false
  		}]
  	}
  }
}
</script>
