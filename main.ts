function moveSouthEast () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    motorSpeed * -1,
    robotbit.Motors.M1B,
    motorSpeed * -1
    )
}
function moveEast () {
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
function moveSouth () {
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
function moveNorthWest () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    motorSpeed,
    robotbit.Motors.M2A,
    motorSpeed
    )
}
radio.onReceivedNumberDeprecated(function (receivedNumberEVT) {
    receivedNumber = receivedNumberEVT
})
function moveNorth () {
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
    robotbit.Motors.M1A,
    motorSpeed * -1,
    robotbit.Motors.M1B,
    motorSpeed * -1
    )
}
function moveSouthWest () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    motorSpeed,
    robotbit.Motors.M1B,
    motorSpeed
    )
}
function displayMovement (buttonState: number, sector: number) {
    if (buttonState == 1) {
        return images.createImage(`
            . . . . .
            # # # . .
            # . # # #
            # # # . .
            . . . . .
            `)
    } else if (buttonState == 2) {
        return images.createImage(`
            . . . . .
            . . # # #
            # # # . #
            . . # # #
            . . . . .
            `)
    } else if (sector == 0) {
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
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (sector == 2) {
        return images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
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
let receivedNumberStern = 0
let motorSpeed = 0
let receivedNumber = 0
radio.setGroup(0)
let moveNESWNWSE = false
receivedNumber = 0
let recievedSector = 0
let receivedAmount = 0
let receivedButtonState = 0
motorSpeed = 0
basic.forever(function () {
    receivedButtonState = Math.idiv(receivedNumber, 65536)
    receivedNumberStern = receivedNumber - receivedButtonState * 65536
    receivedAmount = Math.idiv(receivedNumberStern, 16)
    recievedSector = receivedNumberStern - receivedAmount * 16
    motorSpeed = calcMotorSpeed(receivedAmount)
    if (receivedButtonState > 0) {
        if (receivedButtonState == 1) {
            spinLeft()
        } else if (receivedButtonState == 2) {
            spinRight()
        } else {
            robotbit.MotorStopAll()
        }
    } else {
        if (recievedSector == 0 || receivedAmount == 0) {
            robotbit.MotorStopAll()
        } else if (recievedSector == 1) {
            moveWest()
        } else if (recievedSector == 2) {
            moveEast()
        } else if (recievedSector == 3) {
            moveNorth()
        } else if (recievedSector == 4) {
            moveSouth()
        } else if (recievedSector == 5) {
            if (moveNESWNWSE) {
                moveNorthWest()
            }
        } else if (recievedSector == 6) {
            if (moveNESWNWSE) {
                moveNorthEast()
            }
        } else if (recievedSector == 7) {
            if (moveNESWNWSE) {
                moveSouthEast()
            }
        } else if (recievedSector == 8) {
            if (moveNESWNWSE) {
                moveSouthWest()
            }
        } else {
            robotbit.MotorStopAll()
        }
    }
    displayMovement(receivedButtonState, recievedSector).showImage(0)
})
