let delay_time = 0
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Triangle)
    basic.pause(delay_time)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Square)
    basic.pause(delay_time)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, () => {
    radio.sendNumber(3)
    basic.showIcon(IconNames.Diamond)
    basic.pause(delay_time)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, () => {
    radio.sendNumber(4)
    basic.showIcon(IconNames.No)
    basic.pause(delay_time)
    basic.clearScreen()
})
radio.setGroup(1)
delay_time = 1000
basic.forever(() => {

})
