function setup() {
    
    createCanvas(400, 400);
    background("DarkKhaki");
    
    multipleCircle(200, 200);
}


function draw() {
    
    
}


function multipleCircle (x, y) {
    
    fill(190, 100, 200);
    ellipse(x, y, 100, 100);
    
    fill(90, 100, 200);
    ellipse(x+10, y+10, 100, 100);
    
    fill(10, 10, 200);
    ellipse(x+20, y+20, 100, 100);
    
    fill(190, 10, 20);
    ellipse(x+30, y+30, 100, 100);
    
    fill(90, 10, 100);
    ellipse(x+40, y+40, 100, 100);
    
}