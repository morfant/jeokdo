var n = 10
var w = 0,
    h = 0
var posX = 0,
    posY = 0

function setup() {
    createCanvas(400, 400);
    background(255)
    // frameRate(30)

    w = width / n
    h = height / n
    posX = w / 2
    posY = h / 2
}

function draw() {

    if (random(1) < 0.5) {
        push()
        translate(posX, posY)
        // colorRect(0, 0, w)
        // gradientRect(0, 0, w)
        randomPointRect(0, 0, w, 2, 0)
        pop()
    } else if (random(1) < 0.7) {
        push()
        translate(posX, posY)
        // colorRect(0, 0, w)
        // gradientRect(0, 0, w)
        randomPointRect(0, 0, w, 10, 2)
        pop()
    } else {
        push()
        translate(posX, posY)
        // rotate(HALF_PI)
        // colorRect(0, 0, w)
        // gradientRect(0, 0, w)
        randomPointRect(0, 0, w, random(5), 1)
        pop()
    }

    posX = posX + w

    if (posX > width) {
        posX = w / 2
        posY = posY + h
    }

}


function colorRect(x, y, s) {
    strokeCap(SQUARE)
    strokeWeight(s / 4)

    var yOff = y + s / 4 / 2
    stroke(37, 75, 135)
    line(x - s / 2, yOff - s / 4 * 2, x + s / 2, yOff - s / 4 * 2);

    stroke("lemonchiffon")
    line(x - s / 2, yOff - s / 4 * 1, x + s / 2, yOff - s / 4 * 1);

    stroke("lightcoral")
    line(x - s / 2, yOff, x + s / 2, yOff);

    stroke(37, 123, 135)
    line(x - s / 2, yOff + s / 4 * 1, x + s / 2, yOff + s / 4 * 1);
}


function gradientRect(x, y, s) {
    for (var i = 0; i < s; i += 1) {
        for (var j = 0; j < s; j += 1) {
            stroke(
                map(i, 0, s, 10, random(255)),
                random(100),
                random(100),
                // map(j, 0, s, 100, 255)
                255
            )
            point(i, j)
        }
    }
}


function randomPointRect(x, y, s, n, ss) {
    rectMode(CENTER)
    stroke(0)

    fill(255)
    rect(x, y, s, s)

    if (ss == 1) {
        fill("red")
    } else if (ss == 2) {
        fill("coral")
    } else {
        fill("grey")
    }

    for (var i = 0; i < n; i++) {
        ellipse(
            random(x - s / 2, x + s / 2) / 2,
            random(y - s / 2, y + s / 2) / 2,
            s / 8
        )
    }

}