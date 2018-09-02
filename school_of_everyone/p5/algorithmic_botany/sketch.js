var n = 0;
var c = 4;

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
}

function draw() {
    
//    frameRate(2);
    
//    var a = n * 137.3;
    var a = n * 137.5;
//    var a = n * 137.6;
    var r = c * sqrt(n);
    
    var x = 2 * r * cos(a) + width/2;
    var y = 2 * r * sin(a) + height/2;
    
    fill(155, 100 * cos(a/3) * 255, 200);
    noStroke();
    
//    if (n % 3 == 0) {
        ellipse(x, y, random(4, 8), random(4, 10));    
//    }
    
    
    n++;
    
}