var angle = 0;
var mul = 0.8;
var rValues = [];

let falls = [];
let numFalls = 300;

var r = 255;
var g = 255;
var b = 255;
var a = 255;

 function preload() {
     soundFormats('mp3');
     song = loadSound('assets/halloween.mp3');    
 }

class Snow {

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
        ellipse(this.x, this.y, this.r, this.r);
    }
}


function setup() {
	createCanvas(800, 800);
	stroke(255);
	angle = PI/4;
    
    song.loop();

	// setInterval(makeRandomArray, 2000);
	makeRandomArray();

	// snow falls
    for (let i = 0; i < numFalls; i++) {
        falls[i] = new Snow(random(width), 20, 1.2, 4); // position in x-axis, 최대 크기, 최대 바람세기, 중력의 크기
    }
}

function draw() {
	background(0);
    fill(255,0,0);
    stroke(255, 0, 0);
    textSize(95);
    text("Merry Christmas", width/5 - 100, height/3);
	push();
	translate(width/2, height);
	drawBranch(100);
	pop();

	
	push();
	noStroke();
    for (let i = 0; i < falls.length; i++) {
        falls[i].move();
        falls[i].show();
	}
	pop();
 
}


function drawBranch(len) {

	strokeWeight(len/15);
    stroke(r, g, b, a);
	line(0, 0, 0, -len);
	translate(0, -len);

	if (len > 6) {
		// right
		push(); // save
			rotate(angle * rValues[0]);
			drawBranch(len * mul);
		pop(); // restore

		// left
		push(); // save
			rotate(-angle * rValues[1]);
			drawBranch(len * mul * rValues[1]);
		pop(); // restore

	}
}


function makeRandomArray() {
	rValues = [];
	for (var i = 0; i < 2; i++) {
		rValues.push(random(1));
	}
}

function mouseClicked() {
	makeRandomArray();
    
    r = random(255);
    g = random(255);
    b = random(255);
//    a = random(255);
    
}
