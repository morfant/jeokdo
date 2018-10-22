var c = 4; // 전체적인 크기를 결정
var iterNum = 3000;
var stepMul = 4;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    colorMode(HSB);
    rectMode(CENTER);
}

function draw() {

    frameRate(10);    
    background(0);

    push();
    translate(width/2, height/2);
    beginShape();

    strokeWeight(0.1);
    noFill();

    // step이 변할 때마다 모양이 변한다.
    var step = noise(frameCount/10); // 0.0 ~ 1.0

    stroke((1 - step) * 250, 70, 100); // noise()로 만든 step의 값을 선 색에도 적용한다.
    // strokeWeight(step * 20); // 두꺼운 선으로 면을 만들수도 있다.

    for (var n = 0; n < iterNum; n+=(step*stepMul)) {

        var a = n * 137.5; // theta
        var r = c * sqrt(n); // 반지름 radius

        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);

    }
    endShape();
    pop();
}