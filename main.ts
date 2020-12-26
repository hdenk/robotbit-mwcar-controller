radio.onReceivedNumberDeprecated(function (receivedNumber) {
    receivedAmount = Math.idiv(receivedNumber, 1000)
    recievedSector = receivedNumber - receivedAmount * 1000
})
function displayImage (sector: number) {
    if (sector == 0) {
        return images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (sector == 1) {
        return images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (sector == 2) {
        return images.createImage(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (sector == 3) {
        return images.createImage(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (sector == 4) {
        return images.createImage(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (sector == 5) {
        return images.createImage(`
            # # # # .
            # # . . .
            # . # . .
            # . # . .
            . . # . .
            `)
    } else if (sector == 6) {
        return images.createImage(`
            . # # # #
            . . . # #
            . . # . #
            . . # . #
            . . # . .
            `)
    } else if (sector == 7) {
        return images.createImage(`
            . . # . .
            . . # . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (sector == 8) {
        return images.createImage(`
            . . # . .
            # . # . .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else {
        return images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
}
let receivedAmount = 0
let recievedSector = 0
radio.setGroup(0)
recievedSector = 0
basic.forever(function () {
    displayImage(recievedSector).showImage(0)
    if (recievedSector == 0 || receivedAmount == 0) {
        robotbit.MotorStopAll()
    } else if (recievedSector == 3) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        128,
        robotbit.Motors.M1B,
        128
        )
    } else if (recievedSector == 4) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        -128,
        robotbit.Motors.M2B,
        -128
        )
    } else if (recievedSector == 6) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        128,
        robotbit.Motors.M2B,
        128
        )
    } else {
        robotbit.MotorStopAll()
    }
})
