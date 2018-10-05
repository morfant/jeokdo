
// radius x, radius y
var rx, ry;

var moving = 0;

function setup() {
  
    createCanvas(400, 400);

    rx = 2;
    ry = 2;
    angleMode(DEGREES);
    
}



function draw() {
    
    // 배경 색을 결정 합니다. (black ~ white, alpha);
    background(0, 255);


    var s = 1;
    for (var i = 0; i < width + rx; i+=rx) {
        for (var j = 0; j < height + ry; j+=ry) {

            fill(55, (sin(j*s)) * 255, 100, 255);
            // fill(55, (cos(j*s) + sin(i*s)) * 255, 100, 255);
            // fill(55, (tan(j*s) + cos(i*s)) * 255, 100, 255);
            // fill(55, (sin(j*s) - cos(i*s)) * 255, 100, 255);
            // fill(55, sin(j) * 255, 100, sin(j) * 255);

            noStroke();
            rect(i, j, rx, ry);
        }
    }
   
    
}