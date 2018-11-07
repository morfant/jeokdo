let drops = [];
let numDrops = 300;

class RainDrop {

    constructor(_x, _r, _wind, _g) {
        this.x = _x;
        this.y = 0;
        this.r = random(10, _r);
        this.wind = random(-_wind, _wind);
        this.g = random(_g);

        this.old = _r;
    }

    move() {
    
        this.x = this.x + this.wind;
        this.y = this.y + this.g;

        if (this.y > height) {
            this.y = 0;
            this.old--;
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

    scatter() {

        if (this.old > 100) {

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

        if (drops[i].old < 0) {

            if (drops[i].r > 10) {
                let r = random(2, drops[i].r);
                let numScatter = map(r, 2, 20, 2, 5);

                for (let i = 0; i < numScatter; i++) {
                    let newDrop = new RainDrop(random(drops[i].x - drops[i].g, drops[i].x + drops[i].g), drops[i].r/numScatter, 0.2, 9);
                    drops.push(newDrop);
                }

                // 기존의 drop은 없어진다.
                drops[i] = null;
                delete drops[i];

                drops.splice(i, 1);
            }

    //    console.log(drops.length);
       }
    }

   
}

