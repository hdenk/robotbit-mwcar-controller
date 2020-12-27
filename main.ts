function moveSouthEast () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    motorSpeed * -1,
    robotbit.Motors.M2A,
    motorSpeed * -1
    )
}
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    receivedAmount = Math.idiv(receivedNumber, 1000)
    recievedSector = receivedNumber - receivedAmount * 1000
})
function moveEast () {
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
}
function spinLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    motorSpeed * -1,
    robotbit.Motors.M2A,
    motorSpeed * -1
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    motorSpeed,
    robotbit.Motors.M1B,
    motorSpeed
    )
}
function moveWest () {
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
}
function moveSouth () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
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
}
function moveNorthWest () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    motorSpeed * -1,
    robotbit.Motors.M1B,
    motorSpeed * -1
    )
}
function moveNorth () {
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
}
function calcMotorSpeed (amount: number) {
    return Math.map(Math.constrain(amount, 0, 1024), 0, 1024, 0, 256)
}
function spinRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    motorSpeed,
    robotbit.Motors.M2A,
    motorSpeed
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    motorSpeed * -1,
    robotbit.Motors.M1B,
    motorSpeed * -1
    )
}
function moveNorthEast () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    motorSpeed,
    robotbit.Motors.M1B,
    motorSpeed
    )
}
function moveSouthWest () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    motorSpeed,
    robotbit.Motors.M2A,
    motorSpeed
    )
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
let motorSpeed = 0
let receivedAmount = 0
let recievedSector = 0
radio.setGroup(0)
recievedSector = 0
receivedAmount = 0
motorSpeed = 0
basic.forever(function () {
    motorSpeed = calcMotorSpeed(receivedAmount)
    if (recievedSector == 0 || receivedAmount == 0) {
        robotbit.MotorStopAll()
    } else if (recievedSector == 1) {
        moveNorth()
    } else if (recievedSector == 2) {
        moveSouth()
    } else if (recievedSector == 3) {
        moveWest()
    } else if (recievedSector == 4) {
        moveEast()
    } else if (recievedSector == 5) {
        moveNorthWest()
    } else if (recievedSector == 6) {
        moveNorthEast()
    } else if (recievedSector == 7) {
        moveSouthEast()
    } else if (recievedSector == 8) {
        moveSouthWest()
    } else {
        robotbit.MotorStopAll()
    }
    displayImage(recievedSector).showImage(0)
})
