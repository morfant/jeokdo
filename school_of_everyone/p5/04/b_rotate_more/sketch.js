
function setup() {
    
	createCanvas(800, 800);
	background(0);
	angleMode(DEGREES);
    
}


function draw() {

	if (frameCount/360 <= 1) {

		noFill();
		strokeWeight(2);

		translate(width/2, height/2);
		rotate(frameCount);

		push();
			var r1 = random(-1, 1);
			var r2 = random(-1, 1);

			var r1 = sin(frameCount);
			var r2 = cos(frameCount);
			translate(width/6 + r1, height/6 + r2);
			rotate(frameCount);

			strokeWeight(2 + r2*50);
			stroke(255 * r2, 255, 255, 100);
			// rect(0, 0, 100, 100);
			// ellipse(0, 0, 200, random(200));
			ellipse(0, 0, 200, 200);
		pop();

	} else if (frameCount/360 <= 2) {

		noFill();
		strokeWeight(2);

		translate(width/2, height/2);
		rotate(frameCount);

		push();
			var r1 = random(-1, 1);
			var r2 = random(-1, 1);

			var r1 = sin(frameCount);
			var r2 = cos(frameCount);
			translate(width/9 + r1, height/8 + r2);
			rotate(frameCount);

			strokeWeight(2 + r2*50);
			stroke(255 * r2, 255, 255, 100);
			// rect(0, 0, 100, 100);
			// ellipse(0, 0, 200, random(200));
			ellipse(0, 0, 200, 200);
		pop();



	}
}