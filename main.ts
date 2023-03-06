radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        平穩1()
    } else if (receivedNumber == 2) {
        L開2()
    }
})
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
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    200
    )
}
radio.setGroup(174)
basic.forever(function () {
	
})
