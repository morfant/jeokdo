let delay_time = 0
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber == 1) {
        serial.writeNumber(1)
        basic.showIcon(IconNames.Triangle)
        basic.pause(delay_time)
        basic.clearScreen()
    }
    if (receivedNumber == 2) {
        serial.writeNumber(2)
        basic.showIcon(IconNames.Square)
        basic.pause(delay_time)
        basic.clearScreen()
    }
    if (receivedNumber == 3) {
        serial.writeNumber(3)
        basic.showIcon(IconNames.Diamond)
        basic.pause(delay_time)
        basic.clearScreen()
    }
    if (receivedNumber == 4) {
        serial.writeNumber(4)
        basic.showIcon(IconNames.No)
        basic.pause(delay_time)
        basic.clearScreen()
    }
})
radio.setGroup(1)
delay_time = 100
basic.forever(() => {
	
})