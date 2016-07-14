<template>

<div class="bo-login-box" style="border-radius:4px;overflow:hidden;">
	<div class="reg-banner">
		<img src="../assets/logo.jpg" style="width:100%;" alt="">
		<h1>注册园里<span>Park In</span></h1>

	</div>
	 <input type="password" style="display: none;">
    <div class="bo-form bo-p0222">   
      <form-group type='blank' v-ref:form @form-submit="submit">
      	<form-input v-ref:phone  name="phone" icon="mobilefill"  required=true  format="phone" place-holder="请输入手机号"   size="lg" ></form-input>
      	<form-code name="verify_code"  v-ref:code @code-send="sendCode" place-holder="请输入验证码" ></form-code >


	 
		<form-input  name="password" icon="lock"  required=true place-holder="请输入密码" type="password"  size="lg" ></form-input>
		 
		<btn-submit type="primary" block=true name="提 交"></btn-submit>
	 
      </form-group>
      
    
      </div>   
      <div class="bo-form-item bo-tl  bo-p0222">
        <a href="http://localhost/IVDS/index.php/passport/resetPassword">忘记密码</a>
        <a style="float:right;" href="http://localhost/IVDS/index.php/passport/register">注册新账号</a>
      </div>  
    
  </div>
  <div class="bo-clear"></div>
  <div class="bo-login-footer">
   
  </div>
	<dialog :show.sync="showDialog" :content="dialogContent"  type="alert"></dialog>
</template>
<style>
	
</style>
<script>
import {headerTop} from '../components/header'
import {sidebar} from '../components/sidebar'
import {FormGroup, FormInput, FormCode, FormSelect, FormTextarea} from '../components/form'
import {Btn, BtnSubmit} from '../components/buttons'
import Dialog from '../components/assemble/dialog.vue'
import rqt from '../helper/rqt'

export default {
  components: {
    headerTop,
    sidebar,
    FormGroup,
    FormInput,
    FormCode,
    Btn,
    BtnSubmit,
    Dialog
  },
  methods: {
  	sendCode: function(){
		var ph = this.$refs.phone;
		var code = this.$refs.code;
		var _this = this;
		ph.verify();
		if(ph.pass){
			ph.enable = true;

			 

			rqt.post('sms/notify', {
				sms_type: 'register',
				phone: ph.val
			}, function(data){
				//_this.showDialog = true;
				//_this.dialogContent = data.message;
			 
				code.sendCode();
				_this.accessToken = data.data.access_token;
				
			}, function(data){
				_this.showDialog = true;
				_this.dialogContent = data.message;
			}, _this)
			 
		}
		 
	},
	submit: function(data){
		var _this = this;
		_this.$broadcast('form-lock');
		data.access_token = this.accessToken;

		rqt.post('user/register', data, function(d){
			window.location.href = '/'; 
			//_this.showDialog = true;
			//_this.dialogContent = d.message;
		}, function(d){
			
			_this.$refs.form.setNotice(d.message);
			_this.$broadcast('form-free');
		}, _this)
	}
  },
  data () {
		return {
	        showDialog: false,
			dialogContent: '',
			accessToken: '',
			verify_code: ''
		}
	}
}
</script>
