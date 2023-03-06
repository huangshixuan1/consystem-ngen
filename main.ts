radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        平穩1()
        basic.pause(50)
        Al_STOP()
    } else if (receivedNumber == 2) {
        L開2()
        basic.pause(50)
        Al_STOP()
    } else if (receivedNumber == 3) {
        Jia_Open()
        basic.pause(100)
    } else if (receivedNumber == 4) {
        Jia_Close()
        basic.pause(100)
    } else if (receivedNumber == 5) {
        Hua_Kai()
        basic.pause(200)
        Al_STOP()
    } else if (receivedNumber == 6) {
        Hua_Guan()
        basic.pause(200)
        Al_STOP()
    } else if (receivedNumber == 7) {
        Qian7()
        basic.pause(100)
        Al_STOP()
    } else if (receivedNumber == 8) {
        Hoo8()
        basic.pause(100)
        Al_STOP()
    } else {
        Al_STOP()
    }
})
function Jia_Open () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
function Jia_Close () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function Qian7 () {
	
}
function Hua_Kai () {
    pins.servoWritePin(AnalogPin.P8, 180)
}
function L開2 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    200
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
function Al_STOP () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P8, 90)
}
function Hoo8 () {
	
}
function Hua_Guan () {
    pins.servoWritePin(AnalogPin.P8, 0)
}
function 平穩1 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    200
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
Al_STOP()
radio.setGroup(174)
basic.forever(function () {
	
})
