radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == "1") {
        平穩1()
    } else if (receivedNumber == "2") {
        L開2()
    }
})
function L開2 () {
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 平穩1 () {
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
radio.setGroup(174)
basic.forever(function () {
    if (true) {
    	
    }
})
