radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        讓左右跑的夾子的軌道回家()
        basic.pause(50)
        讓左右跑的那個夾子軌道停止()
    } else if (receivedNumber == 2) {
        讓左右跑的夾子的軌道出門()
        basic.pause(50)
        讓左右跑的那個夾子軌道停止()
    } else if (receivedNumber == 3) {
        伺服馬達P1夾子開()
        basic.pause(100)
    } else if (receivedNumber == 4) {
        伺服馬達P1夾子關()
        basic.pause(100)
    } else if (receivedNumber == 5) {
        整個軌道旋轉逆時鐘()
        basic.pause(200)
        伺服馬達全部停止()
    } else if (receivedNumber == 6) {
        整個軌道旋轉順時鐘()
        basic.pause(200)
        伺服馬達全部停止()
    } else if (receivedNumber == 7) {
        軌道上升()
        basic.pause(50)
        伺服馬達全部停止()
    } else if (receivedNumber == 8) {
        軌道下降()
        basic.pause(50)
        伺服馬達全部停止()
    } else if (receivedNumber == 9) {
    	
    } else if (receivedNumber == 10) {
    	
    } else {
        讓左右跑的那個夾子軌道停止()
    }
})
function 整個軌道旋轉逆時鐘 () {
    pins.servoWritePin(AnalogPin.P8, 180)
}
function 整個軌道旋轉順時鐘 () {
    pins.servoWritePin(AnalogPin.P8, 0)
}
function 軌道上升 () {
    pins.servoWritePin(AnalogPin.P2, 180)
    pins.servoWritePin(AnalogPin.P12, 0)
}
function 讓左右跑的夾子的軌道出門 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    200
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    200
    )
}
function 軌道下降 () {
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.servoWritePin(AnalogPin.P12, 180)
}
function 伺服馬達P1夾子開 () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
function 讓左右跑的夾子的軌道回家 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    200
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    200
    )
}
function 讓左右跑的那個夾子軌道停止 () {
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
}
function 伺服馬達P1夾子關 () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function 伺服馬達全部停止 () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P8, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P12, 90)
}
讓左右跑的那個夾子軌道停止()
radio.setGroup(174)
