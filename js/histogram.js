function histogram(div, datas) {
    const data = [{
        x: datas,
        width: 500,
        height: 500,
        type: 'histogram',
    }]
    Plotly.newPlot(div, data)
}