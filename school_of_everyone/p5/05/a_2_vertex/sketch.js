function setup() {
    createCanvas(600, 600);
    stroke(255);
    noFill();
}

function draw() {
    background(0);

    beginShape();
    vertex(10, 10);
    vertex(500, 10);
    vertex(20, 500);
    endShape(CLOSE);
    
}