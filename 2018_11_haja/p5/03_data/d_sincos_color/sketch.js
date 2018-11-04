// radius x, radius y
var rx = 2;
var ry = 2;
var moving = 0;

function setup() {
  
    createCanvas(400, 400);
    angleMode(DEGREES);
    
}


function draw() {
    
    // 배경 색을 결정 합니다. (black ~ white, alpha);
    background(0, 255);
    noStroke();

    // 커질수록 sin()함수의 아규먼트가 증가하는 속도가 커진다. 따라서 sin그래프의 주기를 여러번 반복하게된다.
    var s = 1;
    
    for (var i = 0; i < width + rx; i+=rx) {
        for (var j = 0; j < height + ry; j+=ry) {

            fill(55, (sin(j*s)) * 255, 100, 255);
//            fill(55, (cos(j*s) + sin(i*s)) * 255, 100, 255);

            rect(i, j, rx, ry);
        }
    }
   
    
}