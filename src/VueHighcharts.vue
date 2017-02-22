<template>
  <div class="highcharts">
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  import {warn} from './debug'

  export default {
    props: ['options'],
    name: 'VueHighcharts',
    data () {
      return {
        msg: 1,
        chart: null
      }
    },
    mounted(){
      if (!this.chart && this.options) {
        this._init();
      }
    },

    methods: {
      addSeries(options){
        this.delegateMethod('addSeries', options);
      },
      mergeOption(options){
        this.delegateMethod('update', options)
      },
      showLoading(txt){
        this.chart.showLoading(txt);
      },
      hideLoading(){
        this.chart.hideLoading();
      },
      delegateMethod(name, ...args){
        if (!this.chart) {
          warn(`Cannot call [$name] before the chart is initialized. Set prop [options] first.`, this)
          return
        }
        return this.chart[name](...args)
      },

      _init(){
        if (!this.chart && this.options) {
          this.chart = new Highcharts.Chart(this.$el, this.options);
        }
      }
    },

    watch: {
      options: function (options) {
        if (!this.chart && options) {
          this._init()
        } else {
          this.chart.update(this.options);
        }
      }
    },

    beforeDestroy(){
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }
</script>
<style  lang="scss" rel="stylesheet/scss" type="text/css">
  .highcharts{
    display: inline-block;
    margin: 2em auto;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;
    box-shadow: 0 0 45px rgba(0,0,0,0.2);
    padding: 1.5em 2em;
  }
</style>

