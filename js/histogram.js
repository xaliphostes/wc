function histogram(div, datas) {
    const data = [{
        x: datas,
        type: 'histogram',
    }]

    const layout = {
        width: 400,
        height: 400,
        bargap: 0.05,
        bargroupgap: 0.2,
        barmode: "overlay",
        title: "Sampled Results",
        xaxis: { title: "Value" },
        yaxis: { title: "Count" }
    };

    Plotly.newPlot(div, data, layout)
}
