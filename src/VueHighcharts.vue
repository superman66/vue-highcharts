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
        console.log('mounted init....');
        this._init();
      }
    },

    methods: {
      addSeries(options){
        this._delegateMethod('addSeries', options);
      },
      mergeOption(options){
        this._delegateMethod('update', options)
      },
      showLoading(txt){
        this.chart.showLoading(txt);
      },
      hideLoading(){
        this.chart.hideLoading();
      },
      _delegateMethod(name, ...args){
        if (!this.chart) {
          warn(`Cannot call [$name] before the chart is initialized. Set prop [options] first.`, this)
          return
        }
        return this.chart[name](...args)
      },

      _init(){
        if (!this.chart && this.options) {
          console.log('init...');
          this.chart = new Highcharts.Chart(this.$el, this.options);
        }
      }
    },

    watch: {
      options: function (options) {
        if (!this.chart && options) {
          console.log('watch option init....');
          this._init()
        } else {
          console.log('watch option update....');
          this.chart.update(this.options);
        }
      }
    },

    beforeDestroy(){
      console.log('destroy....');
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }
</script>

