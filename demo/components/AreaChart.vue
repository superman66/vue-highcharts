<template>
    <section class="charts">
        <h3>Area Basic</h3>
        <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
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
      areaOptions: data.AreaData,
    }
  },
  mounted() {},
  methods: {},
}
</script>
