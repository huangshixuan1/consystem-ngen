radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        平穩1()
        basic.pause(100)
        STOP()
    } else if (receivedNumber == 2) {
        L開2()
        basic.pause(100)
        STOP()
    } else if (receivedNumber == 3) {
        Jia_Open()
        basic.pause(100)
        STOP()
    } else if (receivedNumber == 4) {
        Jia_Close()
        basic.pause(100)
        STOP()
    }
})
function Jia_Open () {
    pins.servoWritePin(AnalogPin.P0, 180)
}
function Jia_Close () {
    pins.servoWritePin(AnalogPin.P0, 0)
}
function STOP () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    pins.servoWritePin(AnalogPin.P0, 0)
}
function L開2 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    200
    )
}
function 平穩1 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    200
    )
}
radio.setGroup(174)
basic.forever(function () {
	
})
