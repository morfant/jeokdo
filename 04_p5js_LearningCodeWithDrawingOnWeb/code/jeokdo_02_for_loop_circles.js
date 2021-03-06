var numGridX = 10
var numGridY = 10
var w = 0
var h = 0
var x = 0
var y = 0

function setup() {
    createCanvas(400, 400);
    background(255)
    rectMode(CENTER)
    colorMode(HSB)
    // background(226, 100, 91, 0.1)

    frameRate(12)
    w = width / numGridX
    h = height / numGridY
}

function draw() {
    // background(255);

    stroke(0)
    if (random(1) < 0.5) {
        // fill(208, 87, 50, 1)
        circles(x + w / 2, y + h / 2, w, h, 70)

    } else {
        // fill(58, 59, 72, 1)
        circles(x + w / 2, y + h / 2, w, h, 30)
    }

    x = x + w

    if (x > width) {
        y = y + h
        x = 0
    }

}

function circles(_x, _y, _w, _h, n) {
    noFill()
    stroke(0)
    for (var i = n; i > 0; i -= 1) {
        strokeWeight(i / n)
        ellipse(_x, _y, i, i)
    }
}