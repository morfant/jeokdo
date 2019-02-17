var n = 0; // 1씩 증가한다
var c = 2; // r에 곱해지는 고정된 값

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    background(0);
}

function draw() {

    if (n < 1000) { // 그려지는 갯수 제한 

        var theta = n * 137.5; // theta
        var r = c * sqrt(n); // 반지름 radius

        translate(width / 2, height / 2);
        var x = 2 * r * cos(theta);
        var y = 2 * r * sin(theta);

        fill(255, 4 * r);
        stroke(200, 30, 10, 20 / r * 255);
        ellipse(x, y, 5, 5);

        n++; // n = n + 1
    }
}