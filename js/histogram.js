class Histogram {
    constructor(inputData, opts) {
        const ctx = document.getElementById(opts.div)
        ctx.width = opts.width
        ctx.height = opts.height

        const data = {
            labels: inputData.map( (v,i) => i/10),
            datasets: [{
                label: 'Reactivation',
                data: inputData,
                borderWidth: 1
            }]
        }
    
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                maintainAspectRatio: true,
                responsive: false,
                scales: {
                    x: {
                        color: 'black'
                    },
                    y: {
                        beginAtZero: true,
                        suggestedMax: opts.max,
                        color: 'black'
                    }
                },
                animation: false
            }
        })
    }

    update(data) {
        this.chart.data.datasets = [{
            label: 'Reactivation',
            data,
            borderWidth: 2,
            borderColor: 'rgb(0, 0, 0)',
            // barThickness: 'flex',
            categoryPercentage: 1.0, // notice here 
            barPercentage: 0.9,  // notice here 
        }]
        this.chart.update()
    }
}





/*
function histogram(div, datas, n) {
    const data = [{
        x: datas,
        type: 'histogram',
    }]

    const layout = {
        width: 400,
        height: 400,
        bargap: 0.05,
        nbins: n,
        bargroupgap: 0.2,
        barmode: "overlay",
        title: "Sampled Results",
        xaxis: { title: "Value" },
        yaxis: { title: "Count" }
    };

    Plotly.newPlot(div, data, layout)
}
*/