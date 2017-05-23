<template>
  <div class="highcharts">
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  import {warn} from './debug'

  export default {
    props: ['options', 'Highcharts'],
    name: 'VueHighcharts',
    data () {
      return {
        chart: null
      }
    },
    mounted(){
      if (!this.getChart() && this.options) {
        this._init();
      }
    },

    methods: {
      getChart(){
        return this.chart
      },
      addSeries(options){
        this.delegateMethod('addSeries', options);
      },
      mergeOption(options){
        this.delegateMethod('update', options)
      },
      showLoading(txt){
        this.getChart().showLoading(txt);
      },
      hideLoading(){
        this.getChart().hideLoading();
      },
      delegateMethod(name, ...args){
        if (!this.getChart()) {
          warn(`Cannot call [$name] before the chart is initialized. Set prop [options] first.`, this)
          return
        }
        return this.getChart()[name](...args)
      },

      _init(){
        if (!this.getChart() && this.options) {
         let _Highcharts = this.Highcharts || Highcharts;
          this.chart = new _Highcharts.Chart(this.$el, this.options);
        }
      }
    },

    watch: {
      options: function (options) {
        if (!this.getChart() && options) {
          this._init()
        } else {
          this.getChart().update(this.options);
        }
      }
    },

    beforeDestroy(){
      if (this.getChart()) {
        this.getChart().destroy();
      }
    }
  }
</script>


