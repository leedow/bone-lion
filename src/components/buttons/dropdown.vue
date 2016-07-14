<template>
	<div class="bo-dropdown-right-bottom" @mouseover="dropdown(e, true)" @mouseleave="dropdown(e, false)">
		<slot name="btn"></slot>
        <div class="bo-dropdown-menu" style="display:block" v-show="show" >
            <slot name="dropdown"></slot>
        </div> 
    </div>
</template>

<script>
export default {
	props: {
		
	},
	created: function(){
		
	},
	methods: {
		dropdown: function(e, state){

			this.show = state;
			
		}
	},
	data () {
		return {
			show: false
		}
	}
}
</script>
