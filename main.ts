input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
    led.plot(0, 0)
basic.forever(function () {
    basic.showNumber(0)
    basic.showIcon(IconNames.Heart)
})
