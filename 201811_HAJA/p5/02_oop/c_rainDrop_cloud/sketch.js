let drops = [];
let numDrops = 300;
let moving = 0;
let x_step, y_step;
let cloudy = 16;
let slider;



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

	rectMode(CENTER);
	x_step = 8;
	y_step = 8;
	slider = createSlider(0, 50, 10, 1);
	
    for (let i = 0; i < numDrops; i++) {
        drops[i] = new RainDrop(random(width), 20, 0.2, 9);
    }


}


function draw() {

    background(0);
    noStroke();
    // noFill();

	cloudy = slider.value();
	
	moving += 0.01;
	
	let xoff = moving;
	for (let x = 0; x < width + x_step; x+=x_step){
		
		let yoff = 0;
		for (let y = 0; y < height + y_step; y+=y_step){
			let r = noise(xoff, yoff);
			r = map(r, 0, 1, 0.1, 1);
            fill(25 * r * cloudy, 114 * r * cloudy, 159 * r * cloudy, 255 * r * cloudy);
            // ellipse(x, y, x_step+2, y_step+2);
            rect(x, y, x_step, y_step);
			yoff += 0.05;
		}
		xoff += 0.05;
	}

    for (let i = 0; i < drops.length; i++) {
        drops[i].move();
        drops[i].show();
    }
   
}

