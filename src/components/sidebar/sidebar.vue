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
        clickItem: function(e, key){
            var _data = this.data;

            //更新菜单的选中样式,和判断是否要写入历史
            for(var i=0; i<_data.length; i++){
                var d = _data[i];
                if(_data[i].key == key){
                    
                    //历史记录
                    if(_data[i].history){
                        Linker.add(_data[i].path);
                    }

                    //选中当前点击目标
                    d.select = true;
                    _data.$set(i, d);
                    
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
             /*
                [{
                    key: 0,
                    title: '系统首页',
                    path: '/',
                    icon: 'home',
                    select: true,
                    history: false,//是否留下访问记录
                    show: true
                }]
             */
        }

    }
}
</script>
