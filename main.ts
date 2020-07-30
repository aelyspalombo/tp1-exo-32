let ligne_inversée = 0
let iterations_avant_nelle_comette = 0
basic.forever(function () {
    if (iterations_avant_nelle_comette == 0) {
        led.plot(randint(0, 4), 0)
        iterations_avant_nelle_comette = 2
    }
    iterations_avant_nelle_comette += -1
    basic.pause(500)
    for (let colonne = 0; colonne <= 4; colonne++) {
        for (let ligne = 0; ligne <= 4; ligne++) {
            ligne_inversée = 4 - ligne
            if (led.point(colonne, ligne_inversée) && led.pointBrightness(colonne, ligne_inversée) == 255) {
                led.plotBrightness(colonne, ligne_inversée, 170)
                led.plotBrightness(colonne, ligne_inversée + 1, 255)
            } else if (led.pointBrightness(colonne, ligne_inversée) == 170) {
                led.plotBrightness(colonne, ligne_inversée, 85)
            } else if (led.pointBrightness(colonne, ligne_inversée) == 85) {
                led.plotBrightness(colonne, ligne_inversée, 0)
            }
        }
    }
})
