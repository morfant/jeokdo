var bubble1, bubble2;

class Bubble {
    constructor() {
        this.x = 100;
        this.y = 200;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(3);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}

function setup() {
    createCanvas(600, 600);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();

    bubble2.move();
    bubble2.show();
}
