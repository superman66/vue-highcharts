export let basicData = {
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

export let asyncData = {
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


// area chart data
export const AreaData = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
        text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
        'thebulletin.metapress.com</a>'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000]
    }]
}

// pie chart data
export const PieData = {
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

export const DrilldownData = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Basic drilldown'
    },
    xAxis: {
        type: 'category'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Things',
        colorByPoint: true,
        data: [{
            name: 'Animals',
            y: 5,
            drilldown: 'animals'
        }, {
            name: 'Fruits',
            y: 2,
            drilldown: 'fruits'
        }, {
            name: 'Cars',
            y: 4,
            drilldown: 'cars'
        }]
    }],
    drilldown: {
        series: [{
            id: 'animals',
            data: [
                ['Cats', 4],
                ['Dogs', 2],
                ['Cows', 1],
                ['Sheep', 2],
                ['Pigs', 1]
            ]
        }, {
            id: 'fruits',
            data: [{
                name: 'Apples',
                y: 4
            }, {
                name: 'Oranges',
                y: 2,
                drilldown: 'third-leves'
            }]
        }, {
            id: 'cars',
            data: [
                ['Toyota', 4],
                ['Opel', 2],
                ['Volkswagen', 2]
            ]
        }, {
            id: 'third-leves',
            data: [
                ['Toyota', 4],
                ['Opel', 2],
                ['Volkswagen', 2]
            ]
        }]
    }
};
