<template>
  <div id="app">
    <div>this is vue-highcharts</div>
    <vue-highcharts :options="options" ref="charts"></vue-highcharts>

    <button @click="load">load</button>
  </div>
</template>
<script>
  import VueHighcharts from './VueHighcharts.vue'
  import {initial , async_data} from '../data/data'

  export default{
    components: {
      VueHighcharts
    },
    data(){
      return {
        options: initial,
      }
    },
    mounted(){

    },
    methods: {
      load(){
        let charts = this.$refs.charts;
        charts.showLoading('loading');
        setTimeout(()=>{
          charts.addSeries(async_data);
          charts.hideLoading();
        }, 2000)
      }
    }
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/css">

</style>
