var walkers = [];

class Walker{
    constructor(_size, _rand_x, _rand_y, _col) {
        this.x = width/2;
        this.y = height/2;
        this.color = _col;
        this.size = _size;
        this.rand_x = _rand_x;
        this.rand_y = _rand_y;
    }

    move() {
        this.x = this.x + random(-this.rand_x, this.rand_x);
        this.y = this.y + random(-this.rand_y, this.rand_y);
    }

    show() {
        stroke(255);
        strokeWeight(3);
        noStroke();
        fill(155, 100, this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }
}

function setup() {
    createCanvas(600, 600);
    background(0);
    
    for (let i = 0; i < 200; i++) {
        walkers[i] = new Walker(20, 5, 5, 10);
    }
    
}

function draw() {
    background(0);
    
    for (let i = 0; i < 200; i++) {
        walkers[i].move();
        walkers[i].show();
    }
    
}
