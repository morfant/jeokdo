function setup() {
    createCanvas(400, 400);
}

function draw() {
//    circles(width, height, random(100));
//    noFill();
//    stroke(0);
    
    for(let i = 100; i > 0; i--) {
//    for(let i = 0; i < 100; i++) {        
        noStroke();
        fill(100 + i, 100, 100);
        rect(0, 0, i * 2, i * 2);
        
    }
    
    
    
}

function sum(a, b) {
    return a + b;
}

function circles(x, y, r) {
    fill(0, 0, 0);
    noFill();
    stroke("orange");
    ellipse(random(x), random(y), r, r);
}


