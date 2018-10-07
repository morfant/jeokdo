var angle = 0;
var slider;
var mul = 0.65;
var i = 0;

function setup() {
    
	createCanvas(500, 500);
	stroke(255);

	slider = createSlider(0, TWO_PI, PI/4, 0.01);

	textSize(10);

}


function draw() {

	// noLoop();
	angle = slider.value();

	background(50);
	translate(width/2, height);
	drawBranch(150);



}


function drawBranch(len) {

	// i++;
	// text(i, 0, 0);

	line(0, 0, 0, -len);
	translate(0, -len);

	if (len > 4) {
		// right
		push(); // save
			rotate(angle);
			drawBranch(len * mul);
		pop(); // restore

		// left
		push(); // save
			rotate(-angle);
			drawBranch(len * mul);
		pop(); // restore

	}





}