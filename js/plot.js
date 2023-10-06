class Plot {
    constructor(inputData, opts) {
        const ctx = document.getElementById(opts.div)
        ctx.width = opts.width
        ctx.height = opts.height

        const data = {
            labels: inputData.map( (v,i) => i/10),
            datasets: [{
                label: 'Energy',
                data: inputData,
            }]
        }
    
        this.chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                maintainAspectRatio: true,
                responsive: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: opts.max
                    }
                },
                animation: false
            }
        })
    }

    update(data) {
        this.chart.data.datasets = [{
            label: 'Energy',
            data,
            borderColor: 'rgb(0, 0, 0)',
        }]
        this.chart.update()
    }
}

/*
function plot(div, data) {
    const ctx = document.getElementById(div)
    ctx.width = 500
    ctx.height = 300

    const data = {
        labels: datas.map( (v,i) => i+1),
        datasets: [{
            data: datas,
            borderWidth: 1
        }]
    }

    const c = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: true,
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 1300
                }
            },
            animation: false
        }
    })

    return c
}
*/

/*
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
*/
