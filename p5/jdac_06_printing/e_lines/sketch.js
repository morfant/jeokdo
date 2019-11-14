
var pdf;
var captureImage = false;
var dots = [];

function setup() {
    createCanvas(600, 1000, SVG);
    // createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);

    for (let i = 0; i < 200; i++) {
        dots[i] = new Dot(random(0, width), random(0, height), random(-3, 3), random(-3, 3));
    }

    pdf = createPDF();
    pdf.beginRecord();
    background(0);
}

function draw() {
    // background(0, 1);

    for (let i = 0; i < dots.length; i++) {
        dots[i].move();
        dots[i].draw();
        dots[i].getAge();
    }

    for (let i = 0; i < dots.length; i++) {

        if (dots[i].age > 10) {

            // new를 통해 만든 instance가 사용하고 있는 memory를 반환함.
            dots[i] = null;
            delete dots[i];

            dots.splice(i, 1); // Array에서 해당 instance 를 제거

            // console.log("dots left: " + dots.length);
        }

    }

    if (captureImage === true) {
        pdf.save();
        captureImage = false;
    }

}

function keyTyped() {
    if (key === 'c') {
        captureImage = true;
    }
}



function Dot(_x, _y, _vx, _vy) {
    this.x = _x;
    this.y = _y;
    this.vx = _vx;
    this.vy = _vy;
    this.age = 0;
    this.rx = 2;
    this.ry = 2;
    this.levelx = 0;
    this.levely = 0;
    this.powerx = 1;
    this.powery = 1;

    this.move = function () {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.y > height) {
            this.y = 0;
            this.levely++;
        }
        if (this.y < 0) {
            this.y = height;
            this.levely++;
        }
        if (this.x > width) {
            this.x = 0;
            this.levelx++;
        }
        if (this.x < 0) {
            this.x = width;
            this.levelx++;
        }

    }

    this.getAge = function () {

        if (this.levelx > 2) {
            if (this.powerx < 245) this.powerx += 1;
            this.levelx = 0;
            this.age++;
        }

        if (this.levely > 2) {
            if (this.powery < 245) this.powery += 1;
            this.levely = 0;
            this.age++;
        }

    }

    this.draw = function () {
        push();

        if (this.powerx > this.powery) {
            fill(255, 100, 100, 8 + this.powerx);
        } else if (this.powery > this.powerx) {
            fill(100, 255, 255, 8 + this.powery);
        } else {
            fill(255, 10);
        }

        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.rx, this.ry);

        pop();
    }


}

