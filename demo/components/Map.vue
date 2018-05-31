<template>
    <section class="charts">
        <h3>Map</h3>
        <vue-highcharts :highcharts="Highcharts" :options="options" ref="drilldownChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from '../../src/VueHighcharts.vue'
import Highcharts from 'highcharts/highmaps'
import Drilldown from '../../node_modules/highcharts/modules/drilldown.js'
import { data } from '../../data/mapData.js'

export default {
  components: {
    VueHighcharts,
  },
  data() {
    return {
      Highcharts: Highcharts,
      options: {
        title: {
          text: 'Habitat of the Rusty Blackbird',
        },

        subtitle: {
          text:
            'An example of a distribution map in Highcharts.<br/>' +
            'Source: <a href="http://en.wikipedia.org/wiki/File:Euphagus_carolinus_map.svg">Wikipedia</a>.',
        },

        plotOptions: {
          series: {
            tooltip: {
              headerFormat: '',
              pointFormat: '{series.name} area',
            },
          },
        },

        legend: {
          align: 'left',
          backgroundColor:
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
            'rgba(255, 255, 255, 0.85)',
          floating: true,
          layout: 'vertical',
          verticalAlign: 'bottom',
          reversed: true,
        },
        series: data,
      },
    }
  },
}
</script>
