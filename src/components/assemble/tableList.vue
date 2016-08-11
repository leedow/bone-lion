<template>
   <table class="bo-table-border">
    <tr>
      <th v-for="item in config.th">
        {{item.title}}
      </th>
      <th v-if="config.hasControl">操 作</th>
    </tr>
    <tr v-for="(index, item) in datas">
      <td v-for="item2 in config.th">
        {{item[item2.param]}}
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
