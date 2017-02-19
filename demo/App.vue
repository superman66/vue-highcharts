<template>
    <div id="app">
        <section class="charts">
            <h3>折线图</h3>
            <vue-highcharts :options="options" ref="charts"></vue-highcharts>
            <button @click="load">load</button>
        </section>

        <section class="charts">
            <h3>环形图</h3>
            <vue-highcharts :options="circleOptions" ref="circleChart"></vue-highcharts>
        </section>


    </div>
</template>
<script>
    import VueHighcharts from '../src/index'
    import {initial, async_data} from '../data/data'

    export default{
        components: {
            VueHighcharts
        },
        data(){
            return {
                options: initial,
                circleOptions: {
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: true,
                            alpha: 45
                        }
                    },
                    title: {
                        text: 'Contents of Highsoft\'s weekly fruit delivery'
                    },
                    subtitle: {
                        text: '3D donut in Highcharts'
                    },
                    plotOptions: {
                        pie: {
                            innerSize: 100,
                            depth: 45
                        }
                    },
                    series: [{
                        name: 'Delivered amount',
                        data: [
                            ['Bananas', 8],
                            ['Kiwi', 3],
                            ['Mixed nuts', 1],
                            ['Oranges', 6],
                            ['Apples', 8],
                            ['Pears', 4],
                            ['Clementines', 4],
                            ['Reddish (bag)', 1],
                            ['Grapes (bunch)', 1]
                        ]
                    }]
                }
            }
        },
        mounted(){

        },
        methods: {
            load(){
                let charts = this.$refs.charts;
                charts.showLoading('loading');
                setTimeout(()=> {
                    charts.addSeries(async_data);
                    charts.hideLoading();
                }, 2000)
            }
        }
    };
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
    #app{
    }
    .charts {
        width: 600px;
        margin: 0 auto;
        text-align: center;
        h3 {
            text-align: center;
        }
        button {
            padding: 5px 20px;
            background: #fff;
            -webkit-appearance: none;
            border: 1px solid #c5c5c5;
            border-radius: 5px;
            outline: none;
            &:hover{
                background: lightgray;
                color: #333;
            }
        }
    }
</style>
