var pdf;
var angle = 0;
var slider;
var mul = 0.65;
var size_limit = 30;
var count = 0

function setup() {
    
	createCanvas(1000, 1000, SVG);

	stroke(255);
	noFill();

	// slider = createSlider(10, 150, 20, 10);
    pdf = createPDF();
    pdf.beginRecord();

	noLoop()
}


function draw() {

	// size_limit = slider.value();
	// console.log(size_limit);
	size_limit = 20

	background(50);
	translate(width/2, height/2);

	drawCircle(300);

	pdf.save()
	// save()

}


function drawCircle(r) {

	// stroke alpha, weight
	// 300, 150, 75, 37.5
	stroke(255, 200 - map(r, 300, 10, 0, 180))
	strokeWeight(3 - map(r, 300, 10, 0, 2.6))
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