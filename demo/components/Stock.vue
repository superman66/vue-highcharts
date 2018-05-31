<template>
    <section class="charts">
        <h3>Stock Chart</h3>
        <vue-highcharts :highcharts="Highcharts" :options="options" ref="drilldownChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from '../../src/VueHighcharts.vue'
import Highcharts from 'highcharts/highstock'
import Drilldown from '../../node_modules/highcharts/modules/drilldown.js'
import { data } from '../../data/stockData.js'

const stockData = data.map(d => d.slice(0.2))
console.log(stockData)
export default {
  components: {
    VueHighcharts,
  },
  data() {
    return {
      Highcharts: Highcharts,
      options: {
        rangeSelector: {
          selected: 2,
        },
        title: {
          text: '平安银行历史股价',
        },
        plotOptions: {
          series: {
            showInLegend: true,
          },
        },
        tooltip: {
          split: false,
          shared: true,
        },
        series: [
          {
            // type: 'line',
            id: '000001',
            name: '平安银行',
            data: stockData,
          },
        ],
      },
    }
  },
}
</script>
