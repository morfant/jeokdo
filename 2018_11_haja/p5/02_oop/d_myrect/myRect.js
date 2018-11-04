
class Rect {
    constructor(_x, _y, _vx, _vy) {
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
    }
    
    move() {
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

    getAge() {

        if (this.levelx > 6) {
            if (this.powerx < 245) this.powerx += 1;
            this.levelx = 0;
            this.age++;
        }

        if (this.levely > 6) {
            if (this.powery < 245) this.powery += 1;
            this.levely = 0;
            this.age++;
        }

    }

    draw() {
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

