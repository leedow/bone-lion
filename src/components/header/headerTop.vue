<template>
<header class="bo-header-light">
    <div class="bo-header-dock-left">             
        <button style="border-right:1px #eee solid" @click="toggleSidebar"><i class="iconfont">&#xe62f;</i></button>
        <button v-show="showBack" transition="slideLeft" transition-mode="out-in" style="border-right:1px #eee solid" @click="goBack"><i class="iconfont">&#xe617;</i></button>
    </div>
    <ul class="bo-header-nav">
        <li class="nav-item"><a class="bo-btn-primary bo-nav-button" href="">消息 <i class="icon iconfont">&#xe63e;</i></a></li>
        <li class="nav-item">
           
            <dropdown>
                <button slot="btn" class="bo-btn-primary bo-nav-button" style="margin:0;">下拉按钮 <i class="icon iconfont"></i></button>

                <ul class="bo-dropdown-menu" slot="dropdown" style="width: 150px;">

                        <li class="bo-tab-item-icon"> 
                          
                            <a href="http://ivds.jishi88.com/index.php/page/addRoute"> 发布行程</a>
                        </li>

                        <li class="bo-tab-item-icon"> 
                          
                            <a href="http://ivds.jishi88.com/index.php/page/editUser"> 编辑个人信息</a>
                        </li>


                    
                        <li class="bo-tab-item-icon"> 
                          
                            <a href="http://ivds.jishi88.com/index.php/passport/logout"> 注销登录</a>
                        </li>
                        
                   
                 </ul>
                
            </dropdown>
        </li>
    </ul>
</header> 
</template>

<script>
import DOM from '../../helper/dom'
import {Dropdown} from '../buttons'


export default {
  components: {
    Dropdown
  },
  methods: {
    toggleSidebar: function(e, mode){//mode=ture||false
        var className = 'bo-container-mini';

        
        if(mode == undefined){
            if( DOM.hasClass(document.body, className) ){
                DOM.removeClass(document.body, className);
            } else {
                DOM.addClass(document.body, className);
            }
             
            
        } else {
            if(mode){
                DOM.addClass(document.body, className);
            } else {
                DOM.removeClass(document.body, className);
            }
        }
        
            
    },
    goBack: function(){
        window.history.go(-1);
        this.showBack = false;
    }
  },
  events: {
    'toggle-sidebar': function(mode){
        this.toggleSidebar(null, mode);
    },
    'toggle-back': function(mode){

        this.showBack = mode;
         
    }
  },
  data (){
    return {
        showBack: false
    }
  }
}
</script>
