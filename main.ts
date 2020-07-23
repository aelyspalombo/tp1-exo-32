let x = 0
let y = 0
basic.forever(function () {
	
})
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    led.plot(x, y)
    basic.pause(200)
    for (let index = 0; index < 5; index++) {
        if (led.brightness() == 255) {
            led.plotBrightness(x, y, 170)
            y += 1
            basic.pause(200)
        } else if (led.brightness() == 85) {
            led.plotBrightness(x, y, 90)
            y += 1
            basic.pause(200)
        } else {
            led.unplot(x, y)
            y += 1
            basic.pause(200)
        }
    }
})
