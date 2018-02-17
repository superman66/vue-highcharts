<template>
    <section class="charts">
        <h3>Line Basic
            <p>Load data with async</p>
        </h3>
        <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
        <button @click="load">load</button>
        <button @click="update">update xAxis Categories</button>
        <button @click="remove">remove Series</button>
        <button @click="add">add Series</button>
    </section>
</template>
<script>
import VueHighcharts from '../../src/VueHighcharts.vue'
import * as data from '../../data/data'

export default {
  components: {
    VueHighcharts,
  },
  data() {
    return {
      options: data.basicData,
    }
  },
  mounted() {},
  methods: {
    load() {
      let lineCharts = this.$refs.lineCharts
      //charts.showLoading('loading');

      // you also can use the delegateMethod()
      lineCharts.delegateMethod('showLoading', 'Loading...')
      setTimeout(() => {
        lineCharts.addSeries(data.asyncData)
        lineCharts.hideLoading()
      }, 2000)
    },
    update() {
      let lineCharts = this.$refs.lineCharts
      lineCharts
        .getChart()
        .xAxis[0].setCategories([
          'J',
          'F',
          'M',
          'A',
          'M',
          'J',
          'J',
          'A',
          'S',
          'O',
          'N',
          'D',
        ])
    },
    remove() {
      this.$refs.lineCharts.removeSeries()
    },
    add() {
      this.$refs.lineCharts.addSeries({
        data: [
          7.0,
          6.9,
          9.5,
          14.5,
          18.2,
          21.5,
          25.2,
          {
            y: 26.5,
            marker: {
              symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)',
            },
          },
          23.3,
          18.3,
          13.9,
          9.6,
        ],
      })
    },
  },
}
</script>
