export const options = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Price']
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
            name: 'Price',
            type: 'line',
            data: []
        }
    ]
};