<template>
    <div id="app">
        <h1>
            <a href="https://github.com/superman66/vue-highcharts" target="_blank">
                Vue-Highcharts
                <p>the component of Vue 2.0 for Highcharts</p>
            </a>
        </h1>
        <section class="chart-list">
            <section class="charts">
                <h3>Line Basic
                    <p>load data with async</p>
                </h3>
                <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
                <button @click="load">load</button>
            </section>
            <section class="charts">
                <h3>Area Basic</h3>
                <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
            </section>

            <section class="charts">
                <h3>pie-basic</h3>
                <vue-highcharts :options="pieOptions" ref="pieChart"></vue-highcharts>
            </section>
        </section>

    </div>
</template>
<script>
    import VueHighcharts from '../src/VueHighcharts.vue'
    import * as data from '../data/data'

    export default{
        components: {
            VueHighcharts
        },
        data(){
            return {
                options: data.initial,
                areaOptions: data.AreaData,
                pieOptions: data.PieData
            }
        },
        mounted(){

        },
        methods: {
            load(){
                let lineCharts = this.$refs.lineCharts;
                //charts.showLoading('loading');

                // you also can use the delegateMethod()
                lineCharts.delegateMethod('showLoading', 'Loading...');
                setTimeout(() => {
                    lineCharts.addSeries(data.asyncData);
                    lineCharts.hideLoading();
                }, 2000)
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
    $chartWidth: 600px;
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        margin: 0;
        padding: 0;
        background: rgba(37, 37, 37, 0.84);
    }

    #app {
    }

    h1 {
        font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        padding: 2em 0 1em;
        text-align: center;
        a {
            text-decoration: none;
            color: #ccc;
        }

    }

    h1, h3 {
        color: #ccc;
        font-weight: 300;
        p {
            font-size: 14px;
            margin: 5px;
        }
    }

    .charts {
        width: $chartWidth;
        margin: 0 auto ;
        padding-bottom: 2em;
        text-align: center;
        h3 {
            text-align: center;
            margin: 0;
        }
        button {
            padding: 5px 20px;
            background: #fff;
            -webkit-appearance: none;
            border: 1px solid #c5c5c5;
            border-radius: 5px;
            outline: none;
            &:hover {
                background: lightgray;
                color: #333;
            }
        }
    }

    .highcharts {
        display: inline-block;
        margin: 2em auto;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
        padding: 1.5em 0em;
        background: #fff;
    }
</style>
