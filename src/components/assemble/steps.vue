<template>
  <div class="bo-stepline-box">
    <div class="bo-stepline">
      <div class="stepline-done" v-bind:style="{marginRight:(100-(currentStep-1)*stepLength) + '%'}"></div>
      <div v-for="(index, item) in stepData" class="dock {{item.done?'dock-done':''}}" v-bind:style="{left:index*stepLength+'%'}">

        <i class="icon iconfont icon-{{item.icon}}"></i>
        <span></span>
        <p>{{item.title}}</p>
      </div>
       
       
      </div>
    </div>
   </div>
</template>

<script>

export default {
  components: {
      
  },
  methods: {
    update: function(){
      this.steps = this.data.length;
      this.stepData = this.data;

      if(this.steps == 1){
        this.stepLength = 100;
      } else {
        this.stepLength = Math.floor(1/(this.steps-1)*100);
      }

      for(var i=0; i<this.stepData.length; i++){
        if(this.currentStep >= i+1){

          this.stepData[i].done = true;
        } else {
          this.stepData[i].done = false;
        }
         
         
      }
    }
  },
  created: function(){
     this.update();
  
  },
  events: {
      
  },
  watch: {
    "currentStep": function(newVal, oldVal){
      this.update();
    }
  },
  props: {
    data: {
      default: []
    },
    currentStep: {//默认所在进度位置
      default: 1
    }
  },
  data (){
    return {
        steps: 0,//步骤数
        stepLength: 0,//每步长度,总长为100
        stepData: []
    }
  }
}
</script>
