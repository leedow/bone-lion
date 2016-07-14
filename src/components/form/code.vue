<template>
	<div class="bo-form-item-lg bo-row bo-underline">
		<div style="width:60%;float:left">
			<form-input 
				:size="size" 
				:formControl="formControl" 
				:name="name"
				:type="type"
				:required="required"
				:label="label"
				:place-holder="placeHolder"
				underline=false></form-input>
		</div>
		<div style="width:40%;height:46px;float:left;padding-top:6px;">
			<Btn v-ref:codebtn :name="btnName" :size="size" type="primary" blank=true block=true  @btn-click="sendEvent"></Btn>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
import Format from '../../addon/format'
import FormInput from './input.vue'
import {Btn} from '../buttons'

/*
 * Dispatch events:input-wrong|input-pass
 * On events:input-verify
 */
export default {
	components: {
		FormInput,
		Btn
	},
	props: {
		counter: {
			default: 60
		},
		size: {
			default: 'sm'
		},
		formControl: {
			 default: true
		},
		type: {
			default: 'text'
		},
		name: {
			default: ''
		},
		label: {
			 default: ''
		},
		required: {//是否强制填写
			default: true
		},
		placeHolder: {
			default: ''
		} 
	},
	methods: {
		sendEvent:function(){
			if(this.enable){
				this.$dispatch('code-send', '');
			}
		},
		sendCode: function(){

			if(!this.enable){
				return;
			}

			var _this = this;
			this.enable = false;
			  
			var total = this.counter;
			_this.$refs.codebtn.setName(total + '秒后重试');
			var timer = setInterval(function(){
				if(total==0){
					_this.enable = true;
					_this.$refs.codebtn.setName(_this.btnName);
					clearInterval(timer);
					return;
				}
				total--;
				_this.$refs.codebtn.setName(total + '秒后重试');
			}, 1000);

			 
		}
	},
	data () {
		return {
			 btnstyle: {
			 	paddingLeft:'0px',
			 	paddingRight:'0px'
			 },
			 enable: true,// 按钮是否可以点击
			 btnName: '获取验证码'
		}
	}
}
</script>
