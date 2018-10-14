var c = 4;
var iterNum = 5000;
var stepMul = 4;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    colorMode(HSB);
    rectMode(CENTER);
}

function draw() {

    // frameRate(random(1, 20));    
    frameRate();    
    background(0);

    push();
    translate(width/2, height/2);
    beginShape();

    // stroke(25 + 100 * noise(frameCount/20), 70, 100);
    // strokeWeight(0.1);
    // noFill();
    noStroke();

    var step = noise(frameCount/10);
    for (var n = 0; n < iterNum; n+=(step*stepMul)) {

        var a = n * 137.5; // theta
        var r = c * sqrt(n); // 반지름 radius

        var x = r * cos(a);
        var y = r * sin(a);
        // vertex(x, y);
        // fill(160, 100, 100);
        fill(160, 100 * sin(n/10), cos(n/10)*100); // S, B를 조절하여 입체감을 줄 수 있다.
        rect(x, y, 10 + random(50), random(29));

    }
    endShape();
    pop();
}