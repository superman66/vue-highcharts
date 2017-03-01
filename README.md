# vue-highcharts

> The component of Vue 2.0 for highcharts

Check the [DEMO](http://www.iamsuperman.cn/vue-highcharts/demo/)

## Installation

#### Manual
Just Download `dist/vue-highcharts.js` and include in your HTML file
```html
<script type="text/javascript" src="path/to/vue-highcharts/dist/vue-highcharts.js"></script>
```
#### npm

```
npm install vue2-highcharts --save
```

## Usage

## Using ES6 Module in the component with load async data
```javascript
<template>
  <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
  <button @click="load">load</button>
</template>
import VueHighcharts from 'vue-highcharts'
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
        };
      }
    },
    methods{
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
```
## Properties
* `options` the data of Charts


you can get the chart instance by `this.$refs.lineCharts`.
And using the methods of Highchart with `delegateMethod()`


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
