<template>
<div class="bo-col-sidebar bo-sidebar-fixed" >
	<h1 class="bo-logo bo-ovf">
		Bone Lion
	</h1>
	<h1 class="bo-logo-mini">
		B
	</h1>
	<div id="sidemenu"> 
        <ul class="bo-sidebar-menu">
            <li class="menu-item" data-page="home">
                <a href="<?php echo site_url('/home'); ?>">
                    <i class="iconfont">&#xe621;</i>
                系统首页
                </a>
            </li>
            <li class="menu-item menu-item-current" data-page="department">
                <a href="<?php echo site_url('department'); ?>">
                    <i class="iconfont">&#xe635;</i>
                部门管理
                </a>
            </li>
            <li class="menu-item" data-page="address">
                <a href="<?php echo site_url('address'); ?>">
                    <i class="iconfont">&#xe607;</i>
                地址管理
                </a>
            </li>                           
            <li class="menu-item" data-page="notice">
                <a href="<?php echo site_url('notice'); ?>">
                    <i class="iconfont">&#xe62f;</i>
                公告管理
                </a>
            </li>
        </ul>
    </div>
</div>	 
</template>

<script>


export default {
  components: {
    
  }
}
</script>
