var r = 200;
var theta = 45;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    noFill();
}

function draw() {
    background(0);

    stroke(255);
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    
    translate(width/2, height/2);

    theta = frameCount % 360;

    var x = r * cos(theta);
    var y = r * sin(theta);
    
    ellipse(x, y, 10, 10);
    text(theta, x + 20, y + 20);

    stroke(255, 0, 0);
    line(0, 0, x, y);
}