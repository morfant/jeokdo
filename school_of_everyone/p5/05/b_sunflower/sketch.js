var n = 0; // 1씩 증가한다
var c = 2; // r에 곱해지는 고정된 값

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    background(0);
    frameRate();
}

function draw() {

    if (n < 1000) { // 그려지는 갯수 제한 

        var a = n * 137.5; // theta
        var r = c * sqrt(n*2); // 반지름 radius

        translate(width/2, height/2);
        var x = 2 * r * cos(a);
        var y = 2 * r * sin(a);

        fill(255, 4 * r);
        strokeWeight(20/r * 10)
        stroke(200, 10, 10, 20/r*255);
        ellipse(x, y, 15, 15);

        n++; // n = n + 1
    }
}