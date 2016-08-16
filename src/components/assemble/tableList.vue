<template>
   <table class="bo-table-border">
    <tr>
      <th v-for="item in config.th" :style="{width: item.width}">
        {{item.title}}
      </th>
      <th v-if="config.hasControl" :style="{width: config.controlWidth + 'px'}">操 作</th>
    </tr>
    <tr v-for="(index, item) in datas">
      <td v-for="item2 in config.th" @click="handleTd(item, item2)">
        {{item2.filter?item2.filter(item[item2.param]):item[item2.param]}}
      </td>
      <td v-if="config.hasControl">
        <button v-for="item in config.control" @click="handleControl(index, item)" class="bo-btn-none">{{item.btnName}}</button>
      </td>
    </tr>
   </table>
</template>

<script>
export default {
  components: {
      
  },
  methods: {
      handleTd: function(item, item2){
        this.$dispatch('table-td-click', {
          data: item,
          td: item2
        });
      },
      handleControl: function(index, btn){
        this.$dispatch('table-control-click', {
          data: this.datas[index],
          btn: btn
        });
      }
  },
  created: function(){
      
  },
  events: {
      
  },
  props: {
    /* @ocnfig.th
     * [{title: 'titleName', param: 'paramName'}]
     * param为当前列要显示的数据的键值
     * 
     * @config.control
     * [{btnName}]
     */
    config: {
      coerce (val) { 
        let config = {
          th: [],
          control: [],
          hasControl: true,
          controlWidth: 180,
          keyName: ''
        }

        for(let key in val){
          config[key] = val[key];
        }

      return config;
    }
    },
    datas: {
      default: []
    } 
  },
  data (){
    return {
          
    }
  }
}
</script>
