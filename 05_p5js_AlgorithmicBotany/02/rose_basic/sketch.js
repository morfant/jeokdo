// https://en.wikipedia.org/wiki/Rose_(mathematics)
var k, n, d;
var r = 100;
var theta = 30;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    background(30);
}

function draw() {
    n = 7;
    d = 2;
    k = n / d;

    translate(width / 2, height / 2);

    var r = 100 * cos(k * -theta + 200);
    var x = r * cos(-theta);
    var y = r * sin(-theta);

    noStroke();
    fill(84, 184, 123);
    ellipse(x, y, 10, 10);
    theta = theta - 2;
}