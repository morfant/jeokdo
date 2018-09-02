var pos_x = 0;
var pos_y = 0;
var spd = 10;

function setup() {
  // put setup code here
    createCanvas(innerWidth, innerHeight);
    background(100, 20, 100);
}

function draw() {
    // put drawing code here
    
    // background(200, 155 + random(100), random(50) + 205, 4);
    background(100);
    

    for (var i = 110; i > 0; i=i-2) {
        strokeWeight(i/100);
        ellipse(pos_x - i/15, pos_y - i/10, i, i);
    }
    
    pos_x = (pos_x + spd)%innerWidth;
    pos_y = (pos_y + spd)%innerHeight;
    

    
    
}