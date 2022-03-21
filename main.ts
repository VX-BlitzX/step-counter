input.onButtonPressed(Button.A, function () {
    basic.showNumber(High_Score)
})
input.onGesture(Gesture.Shake, function () {
    Steps += 1
    if (Steps % 1000 == 0 && Steps != 0) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
    if (Steps % 5000 == 0 && Steps != 0) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (Steps % 10000 == 0 && Steps != 0) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Steps > High_Score) {
        High_Score = 0
    }
})
input.onButtonPressed(Button.B, function () {
    Steps = 0
})
let High_Score = 0
let Steps = 0
Steps = 0
music.setVolume(100)
basic.forever(function () {
    basic.showString("" + (Steps))
    if (Steps > High_Score) {
        High_Score = Steps
    }
})
