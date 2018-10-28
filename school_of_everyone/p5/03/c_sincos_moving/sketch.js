

var px, py;


function setup() {
  
    createCanvas(400, 400);
    angleMode(DEGREES);


    px = width/2;
    py = height/2;
    
}


function draw() {
    
    // 배경 색을 결정 합니다. (black ~ white, alpha);
    background(0, 255);
    noStroke();

    
    fill(255);
    ellipse(px + width/2*sin(frameCount%360), py + height/2*sin(frameCount%360), 10, 10);
    
    
}
