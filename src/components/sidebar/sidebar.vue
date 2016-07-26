<template>
<div class="bo-col-sidebar bo-sidebar-fixed" >
    <h1 class="bo-logo bo-ovf">
        Bone Lion
    </h1>
    <h1 class="bo-logo-mini">
        B
    </h1>
    <div id="sidemenu"> 
        <ul class="bo-sidebar-menu" v-for="group in data" v-if="group.show">
            <li v-for="item in group.data" v-if="item.show" class="menu-item {{item.select?'menu-item-current':''}}" v-link="{path:item.path}" @click="clickItem(e, item.key)">
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
import Linker from '../../addon/linker'

export default {
    props: {
        menuData: {
            default: []
        }
    },
    components: {

    },
    methods: {
        clickItem: function(e, id){
            var _data = this.data;

            //更新菜单的选中样式,和判断是否要写入历史
            var key ;
            for(key in _data){
                  
                for(var i=0; i<_data[key].data.length; i++){
    
                    if(_data[key].data[i].key == id){
                        
                        //历史记录
                        if(_data[key].data[i].history){
                            Linker.add(_data[key].data[i].path);
                        }
                    
                        _data[key].data[i].select = true;
                        
                    } else {
                   
                        _data[key].data[i].select = false;
                   
                    }
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
             data: {}
             /*{
                groupname: {
                    show: true,
                    data: [{
                        key: 0,
                        title: '系统首页',
                        path: '/',
                        icon: 'home',
                        select: true,
                        history: false,//是否留下访问记录
                        show: true
                    }]
                    }
                }
             */
        }

    }
}
</script>
