var x_pos, y_pos, w, h;

x_pos = 0;
y_pos = 0;
w = 40;
h = 20;


function setup() {
  
    createCanvas(500, 500);
    background(0); // black

}

function draw() {
    
    stroke(255);
    strokeWeight(7);
    
    if (random(1) > 0.5) {
        // true
//        line(
//            start_pos_x, start_pos_y, end_pos_x, end_pos_y
//        );
        line(x_pos, y_pos, x_pos + w, y_pos + h);
    } else {
        // false
        line(x_pos + w, y_pos, x_pos, y_pos + h); 
    }
        
    x_pos = x_pos + w*2;
    
    if (x_pos > width) {
        y_pos = y_pos + 2*h;
        x_pos = 0;
    }
}