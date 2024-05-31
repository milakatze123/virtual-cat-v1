input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.InBackground)
    basic.pause(1000)
    basic.showString("Meow purrrrrr!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.EighthNote)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
})
pins.setAudioPinEnabled(false)
music.setBuiltInSpeakerEnabled(true)
basic.showString("Meow!")
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Happy)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
loops.everyInterval(6000, function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
})
