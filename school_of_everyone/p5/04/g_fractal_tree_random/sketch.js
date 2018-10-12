var angle = 0;
var mul = 0.8;
var i = 0;
var redraw = true;

function setup() {
    
	createCanvas(500, 500);
	stroke(255);

	angle = PI/4;


	noLoop();
}

function draw() {

	background(50);
	translate(width/2, height);
	drawBranch(100);

}


function drawBranch(len) {

	strokeWeight(len/15);
	line(0, 0, 0, -len);
	translate(0, -len);

	if (len > 4) {
		// right
		var r = random(1);
		if (r > 0.2) {
			push(); // save
				rotate(angle * r);
				drawBranch(len * mul);
			pop(); // restore
		}

		// left
		var r2 = random(1);
		if (r2 > 0.1) {
			push(); // save
				rotate(-angle * r2);
				drawBranch(len * mul * r2);
			pop(); // restore
		}

	}





}