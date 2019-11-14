
var pdf;
var rects = [];
var captureImage = false;

function setup() {

    createCanvas(1900, 1000, SVG);
    // createCanvas(windowWidth,windowHeight);

    angleMode(DEGREES);

    for (let i = 0; i < 80; i++) {
        rects[i] = new Rect(random(0, width), random(0, height), random(-3, 3), random(-3, 3));
    }

    pdf = createPDF();
    pdf.beginRecord();
    background(0);
}

function draw() {
    background(0, 1);

    for (let i = 0; i < rects.length; i++) { // rects.length는 rects에 들어있는 값들의 갯수를 알려준다.
        rects[i].move();
        rects[i].draw();
        rects[i].getAge();
    }

    for (let i = 0; i < rects.length; i++) {

        if (rects[i].age > 1) {

            // new를 통해 만든 instance가 사용하고 있는 memory를 반환함.
            rects[i] = null;
            delete rects[i];

            rects.splice(i, 1); // Array에서 해당 instance 를 제거
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



function Rect(_x, _y, _vx, _vy) {
    this.x = _x;
    this.y = _y;
    this.vx = _vx;
    this.vy = _vy;
    this.age = 0;
    this.rx = 300;
    this.ry = 300;
    this.levelx = 0;
    this.levely = 0;
    this.powerx = 1;
    this.powery = 1;

    this.move = function() {
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

    this.getAge = function() {

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

    this.draw = function() {
        push();

        if (this.powerx > this.powery) {
            fill(255, 100, 100, 10 + this.powerx);
        } else if (this.powery > this.powerx) {
            fill(100, 255, 255, 10 + this.powery);
        } else {
            fill(255, 10);
        }

        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.rx, this.ry);

        pop();
    }



}