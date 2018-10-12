
function setup() {
    
	createCanvas(800, 800);
	angleMode(DEGREES);

	background(0);
	noFill();
	strokeWeight(2);
    
}


function draw() {

	translate(width/2, height/2);
	rotate(frameCount);

	var r1 = sin(frameCount);
	var r2 = cos(frameCount);


	if (frameCount/360 <= 1) {

		push();

			strokeWeight(2 + r2*50);
			stroke(255 * r2, 255, 255, 100);

			translate(width/6 + r1, height/6 + r2);
			// ellipse(0, 0, 200, random(200));
			ellipse(0, 0, 200, 200);
		pop();

	} else if (frameCount/360 <= 2) {

		push();

			strokeWeight(2 + r2*50);
			stroke(255 * r2, 255, 255, 100);

			translate(width/9 + r1, height/8 + r2);
			// ellipse(0, 0, 200, random(200));
			ellipse(0, 0, 200, 200);
		pop();



	}
}