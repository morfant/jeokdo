
function setup() {
    createCanvas(innerWidth, innerHeight);
    
}


function draw() {
    
    background(200);
    stroke(255);
    strokeWeight(10.0);
    noFill();
    drawCircle(width/2, height/2, 600);
    noLoop();
    
}


function drawCircle(x, y, d) {
//    ellipse(x, y, d);
    let newD = d * random(mouseX/innerWidth/2, mouseY/innerHeight/2);
    stroke(255, random(255), random(255));
    
    if (random(1) > 0.5) {
        line(x, y, x+d, y+d);        
    } else {
        line(x, y+d, x+d, y);
    }
    
    
    if (d > 10) {
        drawCircle(x + newD, y, newD);
        drawCircle(x - newD, y, newD);
        drawCircle(x, y + newD, newD);
        drawCircle(x, y - newD, newD);
    }
    
}

function mousePressed() {
    background(255);
    drawCircle(innerWidth/2, innerHeight/2, 600);
}