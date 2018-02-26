<template>
  <div
    :class="classname"
    :style="styles"
  >
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import { warn } from './debug'

export default {
  props: {
    classname: {
      type: String,
      default: 'vue-highcharts',
    },
    styles: {
      type: Object,
      default: function(){
        return {}
      }
    },
    options: Object,
    Highcharts: Object,
  },
  name: 'VueHighcharts',
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    if (!this.getChart() && this.options) {
      this.init()
    }
  },

  methods: {
    getChart() {
      return this.chart
    },
    addSeries(options) {
      this.delegateMethod('addSeries', options)
    },
    removeSeries() {
      while (this.getChart().series.length !== 0) {
        this.getChart().series[0].remove()
      }
    },
    mergeOption(options) {
      this.delegateMethod('update', options)
    },
    showLoading(txt) {
      this.getChart().showLoading(txt)
    },
    hideLoading() {
      this.getChart().hideLoading()
    },
    delegateMethod(name, ...args) {
      if (!this.getChart()) {
        warn(
          `Cannot call [$name] before the chart is initialized. Set prop [options] first.`,
          this,
        )
        return
      }
      return this.getChart()[name](...args)
    },

    init() {
      if (!this.getChart() && this.options) {
        let _Highcharts = this.Highcharts || Highcharts
        if (_Highcharts.product == 'Highstock') {
          this.chart = new _Highcharts.stockChart(this.$el, this.options)
        } else {
          this.chart = new _Highcharts.Chart(this.$el, this.options)
        }
      }
    },
  },

  watch: {
    options: function(options) {
      if (!this.getChart() && options) {
        this.init()
      } else {
        this.getChart().update(this.options)
      }
    },
  },

  beforeDestroy() {
    if (this.getChart()) {
      this.getChart().destroy()
    }
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
.vue-highcharts {
  width: 100%;
  display: inline-block;
  margin: 2em auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
  padding: 1.5em 0em;
  background: #fff;
}
</style>
