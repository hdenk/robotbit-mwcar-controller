radio.onReceivedNumberDeprecated(function (receivedNumber) {
    receivedAmount = Math.idiv(receivedNumber, 1000)
    recievedSector = receivedNumber - receivedAmount * 1000
})
function calcMotorSpeed (amount: number) {
    return Math.map(Math.constrain(amount, 0, 1024), 0, 1024, 0, 256)
}
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
receivedAmount = 0
let motorSpeed = 0
basic.forever(function () {
    motorSpeed = calcMotorSpeed(receivedAmount)
    if (recievedSector == 0 || receivedAmount == 0) {
        robotbit.MotorStopAll()
    } else if (recievedSector == 1) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2B,
        motorSpeed,
        robotbit.Motors.M2A,
        motorSpeed
        )
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        motorSpeed,
        robotbit.Motors.M1B,
        motorSpeed
        )
    } else if (recievedSector == 2) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1B,
        motorSpeed * -1,
        robotbit.Motors.M2A,
        motorSpeed * -1
        )
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        motorSpeed * -1,
        robotbit.Motors.M1B,
        motorSpeed * -1
        )
    } else if (recievedSector == 3) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2B,
        motorSpeed * -1,
        robotbit.Motors.M2A,
        motorSpeed
        )
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        motorSpeed,
        robotbit.Motors.M1B,
        motorSpeed * -1
        )
    } else if (recievedSector == 4) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2B,
        motorSpeed,
        robotbit.Motors.M2A,
        motorSpeed * -1
        )
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        motorSpeed * -1,
        robotbit.Motors.M1B,
        motorSpeed
        )
    } else if (recievedSector == 5) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2B,
        motorSpeed,
        robotbit.Motors.M1B,
        motorSpeed
        )
    } else if (recievedSector == 6) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        motorSpeed,
        robotbit.Motors.M2A,
        motorSpeed
        )
    } else if (recievedSector == 7) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2B,
        motorSpeed * -1,
        robotbit.Motors.M1B,
        motorSpeed * -1
        )
    } else if (recievedSector == 8) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        motorSpeed * -1,
        robotbit.Motors.M2A,
        motorSpeed * -1
        )
    } else {
        robotbit.MotorStopAll()
    }
    displayImage(recievedSector).showImage(0)
})
