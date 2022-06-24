export const options = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Min Price', 'Average', "Max Price", 'Volume']
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Average',
            type: 'line',
            data: []
        },
        {
            name: 'Min Price',
            type: 'line',
            data: []
        },
        {
            name: 'Max Price',
            type: 'line',
            data: []
        },
        {
            name: 'Volume',
            type: 'bar',
            data: []
        }
    ]
};