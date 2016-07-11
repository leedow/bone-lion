<template>
<header class="bo-header-light">
    <div class="bo-header-dock-left">             
        <a style="border-right:1px #eee solid" href="<?php echo site_url('/home'); ?>"><i class="iconfont">&#xe62f;</i></a>
    </div>
    <ul class="bo-header-nav">
        <li class="nav-item"><a class="bo-btn-primary bo-nav-button" href="">消息 <i class="icon iconfont">&#xe63e;</i></a></li>
        <li class="nav-item">
            <div class="bo-dropdown-right-bottom">
                <button class="bo-btn-primary bo-nav-button" style="margin:0;">下拉按钮 <i class="icon iconfont"></i></button>
                <!--  <ul class="bo-dropdown-menu">
                    <li>菜单</li>
                </ul> -->
            </div>
        </li>
    </ul>
</header> 
</template>

<script>


export default {
  components: {
    
  }
}
</script>
