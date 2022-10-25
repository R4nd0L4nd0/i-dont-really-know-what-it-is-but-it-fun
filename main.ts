input.onButtonPressed(Button.A, function () {
    chicken.move(1)
    chicken.ifOnEdgeBounce()
    if (car.get(LedSpriteProperty.X) == chicken.get(LedSpriteProperty.X)) {
        game.gameOver()
    } else {
        game.addScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (game.isRunning()) {
        game.pause()
    } else {
        game.resume()
    }
})
let chicken: game.LedSprite = null
let car: game.LedSprite = null
car = game.createSprite(2, 2)
chicken = game.createSprite(2, 0)
chicken.turn(Direction.Right, 90)
basic.forever(function () {
	
})
basic.forever(function () {
    if (game.score() < 10) {
        car.move(1)
        car.ifOnEdgeBounce()
        basic.pause(1000)
    }
    if (game.score() > 10) {
        car.move(1)
        car.ifOnEdgeBounce()
        basic.pause(500)
    }
    if (game.score() > 15) {
        car.move(1)
        car.ifOnEdgeBounce()
        basic.pause(200)
    }
    if (game.score() > 20) {
        car.move(1)
        car.ifOnEdgeBounce()
        basic.pause(100)
    }
    if (game.score() > 25) {
        car.move(1)
        car.ifOnEdgeBounce()
        basic.pause(50)
    }
    if (game.score() > 50) {
        car.move(1)
        car.ifOnEdgeBounce()
        basic.pause(1)
    }
    if (game.score() == 75) {
        basic.showString("WOW UR PREEEEETTTTYYYY GGGOOOOODDDD")
    }
})
