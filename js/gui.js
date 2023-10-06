function gui() {
    // The four sliders: fric, R, S1, and S3
    // -------------------------------------

    $("#fric").on("input", function (e) {
        $("#fricValue").text(e.target.value)
        wc.friction = parseFloat(e.target.value)
        update()
    })

    $("#cohesion").on("input", function (e) {
        $("#cohesionValue").text(e.target.value)
        wc.cohesion = parseFloat(e.target.value)
        update()
    })

    $("#lambda").on("input", function (e) {
        $("#lambdaValue").text(e.target.value)
        wc.lambda = parseFloat(e.target.value)
        update()
    })

    $("#S1").on("input", function (e) {
        $("#S1Value").text(e.target.value)
        const s3 = parseFloat($("#S3").val())
        const s1 = parseFloat(e.target.value)
        if (s3 > s1) {
            $("#S3Value").text(s1)
            $("#S3").val(s1)
        }
        wc.S1 = parseFloat(e.target.value)
        update()
    })

    $("#S3").on("input", function (e) {
        $("#S3Value").text(e.target.value)
        const s1 = parseFloat($("#S1").val())
        const s3 = parseFloat(e.target.value)
        if (s1 < s3) {
            $("#S1Value").text(s3)
            $("#S1").val(s3)
        }
        wc.S3 = parseFloat(e.target.value)
        update()
    })
}
