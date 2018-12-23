var x = 0;
var y = 0;
var w = 30;
var h = 30;
var swMul = 6;
var px, py; 
var spacing = 2;
var dx, dy;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    strokeCap(SQUARE);
    rectMode(CENTER);

    px = width/2 - 200;
    py = height/2;

    if (px <= width/2) {
        dx = width - px;
    } else {
        dx = px;
    }

    if (py <= height/2) {
        dy = height - py;
    } else {
        dy = py;
    }

}

function draw() {

    var d = Math.pow((px - x), 2) + Math.pow((py - y), 2);
    var maxD = Math.pow(dx, 2) + Math.pow(dy, 2);

    if (random(1) > 0.5) {

        stroke(255, 255 * (1 - d/maxD));
        strokeWeight(swMul * (1 - d/maxD));
        line(x, y, x + w, y + h);

    } else {

        stroke(255, 255 * (1 - d/maxD));
        strokeWeight(swMul * (1 - d/maxD));
        line(x, y + h, x + w, y);
    }

    x = x + w + spacing;

    if (x > innerWidth) {
        y = y + h + spacing;
        x = 0;
    }
    
}