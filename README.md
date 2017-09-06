[![Travis](https://img.shields.io/travis/superman66/vue-highcharts.svg)](https://travis-ci.org/superman66/vue-highcharts) [![npm](https://img.shields.io/npm/v/vue2-highcharts.svg?style=plastic)](https://www.npmjs.com/package/vue2-highcharts) [![npm](https://img.shields.io/npm/dt/vue2-highcharts.svg?style=plastic)](https://www.npmjs.com/package/vue2-highcharts) [![npm](https://img.shields.io/npm/l/vue2-highcharts.svg)](https://www.npmjs.com/package/vue2-highcharts)
# vue-highcharts

> The component of Vue 2.0 for highcharts

[中文 README](./README_zh.md)

Check the [DEMO](http://chenhuichao.com/vue-highcharts/demo/)

## Installation
#### npm

```
npm install vue2-highcharts --save
```

## Usage

## Using ES6 Module in the component with load async data
```es6
<template>
  <div>
    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
    <button @click="load">load</button>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
const asyncData = {
  name: 'Tokyo',
  marker: {
    symbol: 'square'
  },
  data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
    y: 26.5,
    marker: {
      symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
    }
  }, 23.3, 18.3, 13.9, 9.6]
}
export default{
    components: {
        VueHighcharts
    },
    data(){
      return{
        options: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Monthly Average Temperature'
          },
          subtitle: {
            text: 'Source: WorldClimate.com'
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            title: {
              text: 'Temperature'
            },
            labels: {
              formatter: function () {
                return this.value + '°';
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: []
        }
      }
    },
    methods: {
      load(){
          let lineCharts = this.$refs.lineCharts;
          lineCharts.delegateMethod('showLoading', 'Loading...');
          setTimeout(() => {
              lineCharts.addSeries(asyncData);
              lineCharts.hideLoading();
          }, 2000)
      }
    }
}
</script>
```
you can get the chart instance by `this.$refs.lineCharts`

And using the methods of Highchart with `delegateMethod()`

If you want to use Highstock, Highmaps or any other add-ons, you should pass in the Highcharts object which included the corresponding modules. And pass the Highcharts to the VueHighcharts instance.
```javascript
// import add-ons and pass in the Highcharts
import Drilldown from '../node_modules/highcharts/modules/Drilldown.js'
import Highcharts from 'highcharts'
Drilldown(Highcharts);

// pass Highcharts to the VueHicharts instance(if you needn't to use other feature modules, you don't have to pass it.)
<vue-highcharts :Highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
```
[See the code for more details](https://github.com/superman66/vue-highcharts/blob/master/demo/App.vue#L35-L40)
## Properties
* `options`: the data of Charts
* `Highcharts`: Highcharts object, it is option.


## Build Setup

``` bash
# install dependencies
npm install

# open "localhost:8080/demo" in browers
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, [superman66](github.com/superman66)
