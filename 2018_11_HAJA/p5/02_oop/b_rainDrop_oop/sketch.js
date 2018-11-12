let drops = [];
let numDrops = 300;

class RainDrop {

    constructor(_x, _r, _wind, _g) {
        this.x = _x;
        this.y = 0;
        this.r = random(10, _r);
        this.wind = random(-_wind, _wind);
        this.g = random(_g);
    }

    move() {
    
        this.x = this.x + this.wind;
        this.y = this.y + this.g;

        if (this.y > height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = height;
        }
        if (this.x > width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = width;
        }
    }

    show() {
        fill(255, this.g/9 * 200);
        ellipse(this.x, this.y, this.r/10, this.r * this.g/9);
    }
}


function setup() {
    
    createCanvas(400, 400);
    // createCanvas(innerWidth, innerHeight);

    for (let i = 0; i < numDrops; i++) {
        drops[i] = new RainDrop(random(width), 20, 0.2, 9);
    }


}


function draw() {

    background(0);
    noStroke();
    // noFill();

    for (let i = 0; i < drops.length; i++) {
        drops[i].move();
        drops[i].show();
    }
   
}

