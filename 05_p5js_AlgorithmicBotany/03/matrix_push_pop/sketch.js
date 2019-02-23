function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(50);

	push();
	translate(width/2, height/2);
	fill(255, 100, 100);
	ellipse(0, 0, 100, 100);
	pop();

	ellipse(0, 0, 100, 100);

	push();
	translate(width*3/4, height/2);
	fill(0, 180, 100);
	ellipse(0, 0, 50, 50);
	pop();

}
