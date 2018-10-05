var x = 0;
var y = 0;
var spacing = 20;
var paddingX = 100;
var paddingY = 60;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);


}

function draw() {
    
    stroke(255, 100, 140, 255);
    strokeWeight(5);
    
    push();
    translate(paddingX, paddingY);
    
    // choose (true or false)
    if (y <= (innerHeight - paddingY*2 - spacing) ) {
        if (random(1) < 0.5) {
            // apply var at spacing
            strokeWeight(1);
            stroke(255, 100, 140, 255);
            line(x, y, x + spacing, y + spacing);
            
        } else {
            strokeWeight(5);
            stroke(55, 100, 140, 255);
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