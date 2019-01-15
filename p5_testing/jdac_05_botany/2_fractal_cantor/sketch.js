var angle = 0;
var slider;
var mul = 0.65;
var size_limit = 30;
var count = 0

function setup() {
    
	createCanvas(1000, 1000);

	stroke(255);
	noFill();

}


function draw() {

	background(50);

	strokeWeight(2)
	strokeCap(SQUARE)
	strokeCap(ROUND)
	strokeCap(PROJECT)

	cantor(100, 100, width - 200);

}


function cantor(x, y, len) {
	if (len >= 1) {
		line(x, y, x + len, y)

		y += 90
		stroke("red")
		// line(x, y, x + len/3, y)
		cantor(x, y, len / 3)
		stroke("pink")
		// line(x + len/3*2, y, x + len, y)
		cantor(x + len / 3 * 2, y, len / 3)
	}
}