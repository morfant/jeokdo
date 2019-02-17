var numGridX = 10
var numGridY = 10
var w = 0
var h = 0
var x = 0
var y = 0

function setup() {
  createCanvas(400, 400);
  background(255)

  frameRate(20)
  w = width / numGridX
  h = height / numGridY
}

function draw() {

  strokeWeight(10)
  if (random(1) < 0.5) {
    arc(x, y, w, h, 0, HALF_PI)
    arc(x + w, y + h, w, h, PI, PI + HALF_PI)
  } else {
    arc(x + w, y, w, h, HALF_PI, PI)
    arc(x, y + h, w, h, PI + HALF_PI, TWO_PI)
  }

  x = x + w

  if (x > width) {
    y = y + h
    x = 0
  }

}