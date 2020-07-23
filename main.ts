let x = randint(0, 4)
let y = 0
led.plot(x, y)
basic.forever(function () {
    while (y < 7) {
        basic.pause(100)
        y += 1
        led.plot(x, y)
        led.plotBrightness(x, y - 1, 170)
        led.plotBrightness(x, y - 2, 85)
        led.unplot(x, y - 3)
        if (y == 4) {
            x = randint(0, 4)
            led.plot(x, 0)
        }
    }
})
