var balls = [];

class Ball {
    constructor(_x, _y, _vx, _vy) {
        this.x = _x;
        this.y = _y;
        this.vx = _vx;
        this.vy = _vy;
        this.age = 0;
        this.rx = 10;
        this.ry = 10;
        this.randx = random(1, 3);
        this.randy = random(1, 3);
        this.levelx = 0;
        this.levely = 0;
        this.powerx = 1;
        this.powery = 1;
    }
    
    move() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;


        // this.x = this.x + this.vx*sin(frameCount)*this.randx*this.powerx;
        // this.y = this.y + this.vy*cos(frameCount)*this.randy*this.powery;
;

        // top
        if (this.y - this.ry/2 < 0) {
            this.vy = this.vy * -1;
            this.levely++;
        }

        // bottom
        if (this.y + this.ry/2 > height) {
            this.vy = this.vy * -1;
            this.levely++;
        }

        // left
        if (this.x - this.rx/2 < 0) {
            this.vx = this.vx * -1;
            this.levelx++;
        }
        
        // right
        if (this.x + this.rx/2 > width) {
            this.vx = this.vx * -1;
            this.levelx++;
        }


    }

    draw() {
        push();
        if (this.powerx > this.powery) {
            fill(255, 100, 100, 100 + 155* Math.abs(this.vx));
        } else {
            fill(100, 255, 255, 100 + 155* Math.abs(this.vy));
        }
        noStroke();
        ellipse(this.x, this.y, this.rx, this.ry);
        pop();
    }

    getAge() {
        // if (frameCount % 50 == 0) {
            // this.age++;
            // console.log("age: " + this.age);

            if (this.levelx > 6) {
                // console.log("grow x");
                if (this.powerx < 255) this.powerx += 1;
                this.levelx = 0;
                if (this.rx < 120) this.rx+=1;
            }

            if (this.levely > 6) {
                // console.log("grow y");
                if (this.powery < 255) this.powery += 1;
                this.levely = 0;
                if (this.ry < 120) this.ry+=1;
            }



        // }
    }
}

class Wall {
    constructor(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
    }

    draw() {
        push();
        rectMode(CENTER);
        fill(0, 0, 255, 255);
        rect(this.x, this.y, this.w, this.h);
        pop();

    }
}

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    for (let i = 0; i < 20; i++) {
        balls[i] = new Ball(random(100, width-100), random(100, height-100), random(1.5, 3), random(1.5, 3));
    }

    wall_top = new Wall(width/2, 0, width, 10);
    wall_bottom = new Wall(width/2, height, width, 10);
    wall_left = new Wall(0, height/2, 10, height);
    wall_right = new Wall(width, height/2, 10, height);

    background(0);
}

function draw() {
    background(0, 255);

    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].draw();
        balls[i].getAge();
    }

    wall_top.draw();
    wall_bottom.draw();
    wall_left.draw();
    wall_right.draw();
}
