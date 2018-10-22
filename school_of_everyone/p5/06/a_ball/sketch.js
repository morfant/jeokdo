var ball;

class Ball {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.velocity = 2;
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
    ball = new Ball();
}

function draw() {
    background(0);
    ball.move();
    ball.show();
}
