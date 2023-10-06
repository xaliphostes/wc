function splom(div, datas, labels, action='newPlot') {
    const colors = new Array(datas.length).fill(0).map( i => i/(datas.length-1) )

    const colorscale = [
        [0.0, '#19d3f3'],
        [0.333, '#19d3f3'],
        [0.333, '#e763fa'],
        [0.666, '#e763fa'],
        [0.666, '#636efa'],
        [1, '#636efa']
    ]

    const axis = () => ({
        showline: false,
        zeroline: false,
        gridcolor: '#ffff',
        ticklen: 4
    })

    const data = [{
        type: 'splom',
        dimensions: datas.map( (data,i) => {
            return {
                label: labels[i],
                values: data
            }
        }),
        marker: {
            color: colors,
            colorscale: colorscale,
            size: datas.length
        }
    }]

    const layout = {
        title: 'Data',
        height: 400,
        width: 400,
        autosize: false,
        plot_bgcolor: 'rgba(240,240,240, 0.95)',
        xaxis: axis(),
        yaxis: axis()
    }

    for (let i=0; i<datas.length-1; ++i) {
        layout['xaxis2'] = axis()
        layout['yaxis2'] = axis()
    }

    Plotly[action](div, data, layout)
}
