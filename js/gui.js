function gui() {
    const friction = $("#fric")

    friction.on("input", function () {
        const currentValue = friction.val()

        // Update a display element or perform any other action
        console.log(currentValue)
        // or $("#rangeValue").text(currentValue)
    })
}