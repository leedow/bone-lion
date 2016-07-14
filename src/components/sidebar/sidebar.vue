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

            <li v-for="item in data" v-if="item.show" class="menu-item {{item.select?'menu-item-current':''}}" v-link="{path:item.path}" @click="clickItem(e, item.key)">
                <a>
                    <i class="icon iconfont icon-{{item.icon}}"></i>
                {{item.title}}
                </a>
            </li>
         
         
        </ul>
    </div>
</div>	 
</template>

<script>


export default {
    props: {
        menuData: {
            default: []
        }
    },
    components: {

    },
    methods: {
        clickItem: function(e, key){
            var _data = this.data;

            for(var i=0; i<_data.length; i++){
                var d = _data[i];
                if(_data[i].key == key){
                    
                    d.select = true;
                    _data.$set(i, d)
                    
                } else {
                    d.select = false;
                    _data.$set(i, d);
               
                }
            }

            this.data = _data;
            
        }
    },
    created: function(){
      
        this.data = this.menuData;  

    },
    data (){
        return {
             data: []
        }

    }
}
</script>
