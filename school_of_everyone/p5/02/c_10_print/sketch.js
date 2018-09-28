var x, y, w, h;

function setup() {
  
    createCanvas(500, 500);
    background(0); // black
    
    x = 0;
    y = 0;
    w = 40;
    h = 20;
    
}

function draw() {
    
    stroke(255);
    strokeWeight(8);
    
    if (random(1) > 0.5) {
    
        line(x, y, x + w, y + h);    
    } else {
        line(x + w, y, x, y + h);        
    }
        
    x = x + w;
    
    if (x > width) {
        y = y + h;
        x = 0;
    }
    
    
  
}