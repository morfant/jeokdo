var mul = 0.8;
var drawCount = 0;
var angle = 0;

function setup() {    
	createCanvas(500, 500);
	stroke(255);
	background(0);
	angle = PI/4;
}

function draw() {
	console.log("draw()");

	noLoop();
	// background(50); 
    translate(width/2, height);
    
	drawBranch(150);
}

function drawBranch(len) {
	// console.log("drawBranch()");

		strokeWeight(len/14);
		stroke(255 * len/150, 20, 105 + len);

		// console.log("drwa line");
		line(0, 0, 0, -len);
		translate(0, -len);
    
    
	if (len > 4) {
	setTimeout(function() {
		// var r = random(1);
		// if (r > 0.2) {
			// push(); // save
				rotate(angle );
				drawBranch(len * mul);
			// pop(); // restore
		// }
		// var r2 = random(1);
		// if (r2 > 0.1) {
			// push(); // save
			// 	rotate(-angle );
			// 	drawBranch(len * mul);
			// pop();
		// }

	}, 1000);
	}
}