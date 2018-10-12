var angle = 0;
var slider;
var mul = 0.65;
var size_limit = 30;

function setup() {
    
	createCanvas(500, 500);

	stroke(255);
	noFill();

	slider = createSlider(10, 50, 30, 0.1);

}


function draw() {

	size_limit = slider.value();

	background(50);
	translate(width/2, height/2);

	drawCircle(200);

}


function drawCircle(r) {

	ellipse(0, 0, r, r);

	if (r > size_limit) {

		// right
		push(); // save
			translate(r/2, 0);
			drawCircle(r * mul);
		pop(); // restore

		// left
		push(); // save
			translate(-r/2, 0);
			drawCircle(r * mul);
		pop(); // restore

		// down 
		push(); // save
			translate(0, r/2);
			drawCircle(r * mul);
		pop(); // restore

		// up 
		push(); // save
			translate(0, -r/2);
			drawCircle(r * mul);
		pop(); // restore

	}

}