<template>
 
<div class="bo-col-content bg bo-p1111">
		<div class="row">
			<div class="col-md-8">
				<div class="row bo-p1111 bo-p0020"> 
 				<div class="bo-box user-box">
 					<div class="avatar bo-p2222">
 						<img class="photo" src="" alt="">
 						<h3 class="name">Leedow</h3>
 						<p class="edit-info"><a href="">个人信息</a></p>
 					</div>
 					<ul class="account-data bo-p3333">
 						<li>
 							<h3 class="title">园区数</h3>
 							<p class="count">32 <span class="unit">/ 2</span>	</p>
 							 
 						</li>
 						<li>
 							<h3 class="title">企业数</h3>
 							<p class="count">322 <span class="unit">/ 400</span></p>
 							 
 						</li>
 						<li>
 							<h3 class="title">短信数</h3>
 							<p class="count">200 <span class="unit">/ 200</span></p>
 						 
 						</li>
 						<li>
 							<h3 class="title">服务数</h3>
 							<p class="count">3 <span class="unit">/ 18</span></p>
 						 
 						</li> 						 
 					</ul>
 					<div class="user-bar bo-m0002 bo-m0200 ">
 						<button class="bo-btn-primary bo-btn-sm">续 费</button>
 						<button class="bo-btn-warm bo-btn-sm">升级套餐</button>
 						<span class="limit" style="padding-left:20px">到期时间 2018-8-8</span>
 					</div>
 				</div>
				</div>
			<div class="row">
 				<div class="col-md-4 bo-p0111">
 					<div class="bo-box server-box">
 						<div class="server-logo">
 							<img src="" alt="">	
 						</div>
 						<div class="server-title">
 							<a href="">快 递</a>
 						</div>
 						<div class="server-content">
 							企业集体预订外卖，价格更加优惠，资质企业供应，品质有保证
 						</div>
 						<div class="server-bar">
 							<button class="bo-btn-primary bo-btn-sm">续 费</button>
 							<span>到期</span>
 						</div>
 						
 					</div>
 				</div>
 				<div class="col-md-4 bo-p0101">
 					<div class="bo-box server-box">
 						<div class="server-logo">
 							<img src="" alt="">	
 						</div>
 						<div class="server-title">
 							<a href="">外 卖</a>
 						</div>
 						<div class="server-content">
 							企业集体预订外卖，价格更加优惠，资质企业供应，品质有保证
 						</div>
 						<div class="server-bar">
 							<button class="bo-btn-primary bo-btn-sm">续 费</button>
 							<span>到期</span>
 						</div>
 						
 					</div>
 				</div>
 				<div class="col-md-4 bo-p0111">
 					<div class="bo-box server-add">
 						 <i class="icon iconfont">&#xe628;</i>
 						 <p>添加新服务</p>
 					</div>
 				</div>
				</div>
			</div>
			<div class="col-md-4  bo-p1111">
				<div class="bo-box bo-p0222">
					<div class="wis-box-title">
					<h2>通知公告</h2>
				</div>
				<ul class="bo-article-list bo-p1000">
					 
					<li><a>智慧园区上线内测</a><span>3-8</span></li>
					<li><a>如何做到园区的高效运转？</a><span>8-8</span></li>
					<li><a>优秀园区所需要具备的几大特征</a><span>5-3</span></li>
					<li><a>新园区如何吸引更多企业入驻</a><span>2-2</span></li>
				</ul>
				</div>
			</div>
		</div>
</div>
 
</template>

<script>
 

export default {
	ready: function(){
		var _this = this;
		setTimeout(function(){
			_this.$dispatch('toggle-sidebar', false);		
		}, 100)
	},
  components: {
    
  }
}
</script>
