var angle = 0;
var slider, slider2;
var mul = 0.5;
var size_limit = 10;
var angle = 0;

function setup() {
    
	createCanvas(500, 500);

	stroke(5);
	noFill();

	slider = createSlider(10, 150, 50, 0.1);
	slider2 = createSlider(0, TWO_PI, PI, 0.01);

}


function draw() {

	size_limit = slider.value();
	angle = slider2.value();

	background(240);
	translate(width/2, height/2);

	drawLine(200);

}


function drawLine(r) {

	line(-r/2, 0, r/2, 0); // 가로
	line(0, -r/2, 0, r/2); // 세로 

	if (r > size_limit) {

		// right
		push(); // save
			rotate(angle);
			translate(r, 0);
			drawLine(r * mul);
		pop(); // restore

		// left
		push(); // save
			rotate(angle);
			translate(-r, 0);
			drawLine(r * mul);
		pop(); // restore

		// down 
		push(); // save
			rotate(angle);
			translate(0, r);
			drawLine(r * mul);
		pop(); // restore

		// up 
		push(); // save
			rotate(angle);
			translate(0, -r);
			drawLine(r * mul);
		pop(); // restore

	}





}