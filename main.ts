radio.onReceivedNumberDeprecated(function (receivedNumber) {
    Recieved = receivedNumber
})
let Recieved = 0
radio.setGroup(0)
Recieved = 0
basic.forever(function () {
    if (Recieved == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    } else if (Recieved == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 100)
        pins.analogWritePin(AnalogPin.P1, 100)
    } else if (Recieved == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 10)
        pins.analogWritePin(AnalogPin.P1, 10)
    } else if (Recieved == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 10)
        pins.analogWritePin(AnalogPin.P1, 100)
    } else if (Recieved == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P0, 100)
        pins.analogWritePin(AnalogPin.P1, 10)
    }
})
