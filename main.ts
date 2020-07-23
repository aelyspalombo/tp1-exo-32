let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    led.plot(x, y)
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        led.plotBrightness(x, y, led.brightness() - 80)
        y += 1
    }
})
basic.forever(function () {
	
})
