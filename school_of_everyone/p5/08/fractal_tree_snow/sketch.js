var angle = 0;
var mul = 0.8;
var i = 0;
var redraw = true;
var isDrawnTree = false;

var rValues = [];

function setup() {
    
	createCanvas(500, 500);
	stroke(255);

	angle = PI/4;

	if (isDrawnTree == false) {
		 isDrawnTree = true;
	}
	noLoop();

}

function draw() {

	background(50);
	translate(width/2, height);

		 drawBranch(100);

		 console.log(rValues);

}



function drawBranch(len) {

	strokeWeight(len/15);
	line(0, 0, 0, -len);
	translate(0, -len);

	if (len > 4) {
		// right
		var r = random(1);
		rValues.push(r);
		console.log("push()")
		if (rValues[rValues.length] > 0.2) {
			push(); // save
				rotate(angle * rValues[rValues.length]);
				drawBranch(len * mul);
			pop(); // restore
		}

		// left
		var r2 = random(1);
		rValues.push(r2);
		if (rValues[rValues.length] > 0.1) {
			push(); // save
				rotate(-angle * rValues[rValues.length]);
				drawBranch(len * mul * rValues[rValues.length]);
			pop(); // restore
		}

	}





}