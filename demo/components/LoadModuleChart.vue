<template>
    <section class="charts">
        <h3>Load Modules(Drilldown)</h3>
        <vue-highcharts :highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from '../../src/VueHighcharts.vue'
import Drilldown from '../../node_modules/highcharts/modules/drilldown.js'
import * as data from '../../data/data'
import Highcharts from 'highcharts'

Drilldown(Highcharts)
Highcharts.setOptions({
  lang: {
    drillUpText: 'back',
  },
})
export default {
  components: {
    VueHighcharts,
  },
  data() {
    return {
      Highcharts: Highcharts,
      drilldownOptions: data.DrilldownData,
    }
  },
}
</script>
