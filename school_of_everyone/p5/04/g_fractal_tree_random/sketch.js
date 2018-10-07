var angle = 0;
var slider;
var mul = 0.8;
var i = 0;

function setup() {
    
	createCanvas(500, 500);
	stroke(255);

	slider = createSlider(0, TWO_PI, PI/4, 0.01);

	textSize(10);

}


function draw() {

	noLoop();
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
		var r = random(1);
		if (r > 0.2) {
		// right
			push(); // save
				rotate(angle * r);
				drawBranch(len * mul);
			pop(); // restore
		}

		var r2 = random(1);
		if (r2 > 0.1) {
			// left
			push(); // save
				rotate(-angle * r2);
				drawBranch(len * mul * r2);
			pop(); // restore
		}

	}





}