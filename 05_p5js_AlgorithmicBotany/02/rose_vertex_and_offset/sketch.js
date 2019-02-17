// https://en.wikipedia.org/wiki/Rose_(mathematics)
var k, n, d, c;

function setup() {
    createCanvas(400, 400);    
}

function draw() {
    
    background(0);
    n = 2;
    d = 4;
    k = n/d;
    
    translate(width/2, height/2);
    
    // offset parameter
    // https://en.wikipedia.org/wiki/Rose_(mathematics)#Offset_parameter
    c = frameCount/10;
    
    
    beginShape();
    noFill();
    
    for (var theta = 0; theta < TWO_PI * d; theta += 0.01) {
        stroke(65, 170, 100);
        var r = 100 * cos(k*theta) + c;

        var x = r * cos(theta);
        var y = r * sin(theta);
        vertex(x, y);
    }
    endShape(CLOSE);
}
