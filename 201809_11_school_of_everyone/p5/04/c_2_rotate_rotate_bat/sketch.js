
function setup() {
    
	createCanvas(800, 800);
	angleMode(DEGREES);

	background(0);
	noFill();
	stroke(255, 50);
	strokeWeight(0.5);
    
}


function draw() {


	translate(width/2, height/2);
	rotate(frameCount);

	push();
		translate(width/5, height/5);
		rotate(frameCount);
		rect(0, 0, 100, 100);
	pop();

}