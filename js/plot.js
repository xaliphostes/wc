function plot(div, x, y, options = {
    title: 'Reactivation as a function of μ',
    width: 400,
    height: 400,
    xaxis: {
        title: 'ϕ',
        range: [0, 1],
    },
    yaxis: {
        title: 'Nb reactivated planes',
        range: [0, 1]
    }
}) {
    var data = [{
        x,
        y,
        type: 'scatter'
    }];

    var layout = {
        title: options.title,
        height: options.height,
        width: options.width,
        xaxis: {
            title: options.xaxis.title,
            range: options.xaxis.range,
            autorange: false
        },
        yaxis: {
            title: options.yaxis.title,
            range: options.yaxis.range,
            autorange: false
        }
    };

    Plotly.newPlot(div, data, layout);
}