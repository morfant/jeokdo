var angle = 0;
var slider;
var mul = 0.65;
var i = 0;
var size_limit = 30;

function setup() {
    
	createCanvas(500, 500);

	stroke(255);
	noFill();

	slider = createSlider(10, 50, 30, 0.1);

	textSize(10);

}


function draw() {

	background(50);

	translate(width/2, height/2);
	drawCircle(200);

	size_limit = slider.value();
	// console.log(size_limit);


}


function drawCircle(r) {

	ellipse(0, 0, r, r);

	if (r > size_limit) {

		// right
		push(); // save
			// rotate(angle);
			translate(r/2, 0);
			drawCircle(r * mul);
		pop(); // restore

		// left
		push(); // save
			// rotate(-angle);
			translate(-r/2, 0);
			drawCircle(r * mul);
		pop(); // restore

		// down 
		push(); // save
			// rotate(-angle);
			translate(0, r/2);
			drawCircle(r * mul);
		pop(); // restore

		// up 
		push(); // save
			// rotate(-angle);
			translate(0, -r/2);
			drawCircle(r * mul);
		pop(); // restore



	}





}