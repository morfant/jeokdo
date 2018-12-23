var n = 0; // 1씩 증가한다
var c = 2; // r에 곱해지는 고정된 값
var range = 5;
var LIMIT = 4000;

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    background(0);
    colorMode(HSB);
    frameRate();
}

function draw() {

    if (n < LIMIT) { // 그려지는 갯수 제한 

        var a = n * -137.5; // theta
        var r = c * sqrt(n*2); // 반지름 radius

        translate(width/2, height/2);
        var x = 2 * r * cos(a);
        var y = 2 * r * sin(a);

        noStroke();
        stroke(n/LIMIT* 360, 100, 100);
        line(x, y, random(x-range, x+range), random(y-range, y+range));

        n++; // n = n + 1
    }
}