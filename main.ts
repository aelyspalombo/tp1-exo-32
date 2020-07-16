let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    led.plot(x, y)
    while (y != 4) {
        basic.pause(100)
        led.plotBrightness(x, y, 175)
        y += 1
        led.unplot(x, y - 3)
        led.plot(x, y)
        led.plotBrightness(x, y - 2, 60)
    }
    basic.pause(100)
    led.unplot(x, y - 2)
    basic.pause(100)
    led.unplot(x, y - 1)
    basic.pause(100)
    led.unplot(x, y)
})
