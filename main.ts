control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    arrows.scrollImage(1, 800)
})
input.onButtonPressed(Button.AB, function () {
    arrows.showImage(0)
    arrows.scrollImage(1, 1500)
})
input.onButtonPressed(Button.B, function () {
    arrows.showImage(0, 2000)
})
let arrows: Image = null
arrows = images.createBigImage(`
    . . # . . . . # . .
    . # # # . . . # . .
    # . # . # # . # . #
    . . # . . . # # # .
    . . # . . . . # . .
    `)
loops.everyInterval(60000, function () {
    if (true) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
})
