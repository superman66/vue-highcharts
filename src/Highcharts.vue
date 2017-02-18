<template>
    <div id="app">

    </div>
</template>

<script>
    import Highcharts from 'highcharts'
    import {warn} from './debug'

    export default {
        props: ['options'],
        name: 'app',
        data () {
            return {
                msg: 1,
                option: {},
                chart: null
            }
        },
        mounted(){

            setTimeout(() => {
                this.option = {
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
                    plotOptions: {
                        spline: {
                            marker: {
                                radius: 4,
                                lineColor: '#666666',
                                lineWidth: 1
                            }
                        }
                    },
                    series: [{
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
                    }, {
                        name: 'London',
                        marker: {
                            symbol: 'diamond'
                        },
                        data: [{
                            y: 3.9,
                            marker: {
                                symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
                            }
                        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    }]
                };
            }, 3000)
        },

        methods: {
            mergeOption(options){
              this._delegateMethod('setOption', options)
            },

            _delegateMethod(name, ...args){
                if(!this.chart){
                  warn(`Cannot call [$name] before the chart is initialized. Set prop [options] first.`, this)
                  return
                }
                return this.chart[name](...args)
            },

            _init(){
              if(!this.chart){
                this.chart = new Highcharts.Chart(this.$el, this.option);
              }
            }
        },

        watch: {
            option: function (val, oldVal) {
                this._init();
            }
        },

        beforeDestroy(){
          if(this.chart){
            this.chart.destroy();
          }
        }
    }
</script>

<style>

</style>
