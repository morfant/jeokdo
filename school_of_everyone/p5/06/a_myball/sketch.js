var ball;

class Ball {
    constructor(_x, _y, _v) {
        this.x = _x;
        this.y = _y;
        this.velocity = _v;
    }
    
    move() {
        this.x = this.x + this.velocity;
        this.y = this.y + this.velocity;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 24, 24);
    }
}

function setup() {
    createCanvas(600, 600);
    ball = new Ball(100, 100, 2);
}

function draw() {
    background(0);
    ball.move();
    ball.show();
}
