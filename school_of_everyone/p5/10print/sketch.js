var x = 0;
var y = 0;
var spacing = 20;
var paddingX = 100;
var paddingY = 60;

function setup() {
  // put setup code here
    createCanvas(innerWidth, innerHeight);
//    createCanvas(400, 400);
    background(255);
}

function draw() {
    
//    stroke(255, x);
    stroke(sin(y)/2*255, 100, 140, 255);
//    stroke(255);
    strokeWeight(5);
//    strokeWeight(sin(y)*sin(x)*10);
//    strokeWeight(spacing/2);
    
    push();
    translate(paddingX, paddingY);
    // choose (true or false)
    if (y <= (innerHeight - paddingY*2 - spacing) ) {
        if (random(1) < 0.5) {
    //        line(0, 0, 10, 10); // static number
    //        line(x, y, x + 10, y + 10); // apply var at start pos
            line(x, y, x + spacing, y + spacing); // apply var at spacing
        } else {
    //        line(0, 10, 10, 0);
    //        line(x, y + 10, x + 10, y);
            line(x, y + spacing, x + spacing, y);
        }
    }
    
    
    
    // next horizontal pos
    x = x + spacing;
    
    // next vertical pos
    if (x >= (innerWidth - paddingX*2 - spacing) ) {
        x = 0;
        y = y + spacing;   
        
    }
    
    pop();
    
    
}