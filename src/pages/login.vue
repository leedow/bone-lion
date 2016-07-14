<template>

<div class="bo-login-box" style="border-radius:4px;overflow:hidden;">
	<div class="reg-banner">
		<img src="../assets/logo.jpg" style="width:100%;" alt="">
		<h1>登录园里</h1>
	</div>
	 
    <div class="bo-form bo-p0222">   
      <form-group type='blank' v-ref:form @form-submit="submit">
		<form-input  name="name" icon="people"  required=true place-holder="请输入名称"   size="lg" ></form-input>
		<form-input  name="name" icon="lock"  required=true place-holder="请输入名称"   size="lg" ></form-input>
		 
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
</template>
<style>
	
</style>
<script>
import {headerTop} from '../components/header'
import {sidebar} from '../components/sidebar'
import {FormGroup, FormInput, FormCode, FormSelect, FormTextarea} from '../components/form'
import {Btn, BtnSubmit} from '../components/buttons'

export default {
  components: {
    headerTop,
    sidebar,
    FormGroup,
    FormInput,
    Btn,
    BtnSubmit
  }
}
</script>
