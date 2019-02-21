var posX, posY;

function setup() {
    createCanvas(400, 400);
    posX = width / 2;
    posY = height / 2;
}

function draw() {
    background(255);
    for (var i = 100; i > 0; i = i - 3) {
        strokeWeight(i / 100);
        ellipse(posX, posY, i, i);
    }
}