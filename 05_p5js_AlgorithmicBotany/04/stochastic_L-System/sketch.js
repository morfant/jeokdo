var current = "";
var next = "";
var s = [];

function setup() {

	createCanvas(600, 600);
	angleMode(DEGREES);
	colorMode(HSB);

	current = "F";
	// noLoop()
}


function draw() {

	background(197, 42, 63, 0.5);
	translate(width / 2, height);
	rotate(-90);

	// Angle in degrees
	var theta = 22.5;
	var step_size = 5;

	// Initial angle, position
	var angle = 0
	var x = 0;
	var y = 0;

	stroke(0, 0, 90);
	strokeWeight(1);

	if (current.length > 0) {
		for (var c of current) {
			if (c == 'F') {
				var new_x = x + (step_size * cos(angle));
				var new_y = y - (step_size * sin(angle));
				line(x, y, new_x, new_y);
				x = new_x;
				y = new_y;
			} else if (c == '+') { // left
				angle += theta;
			} else if (c == '-') { // right
				angle -= theta;
			} else if (c == '[') {
				s.push(x);
				s.push(y);
				s.push(angle);
			} else if (c == ']') {
				angle = s.pop();
				y = s.pop();
				x = s.pop();
			}
		}
	}
}

function mouseClicked() {

	for (var c of current) {
		// Rules with stochastic conditoin
		if (c == 'F') {
			let r = random(1);
			var result = "";
			if (r > 0 && r < 0.33) {
				result = "FF-[-F+F+F]+[+F-F-F]";
			}
			else if (r < 0.66) {
				result = "F[+F]F";
			}
			else if (r < 1) {
				result = "F[-F]F";
			}
			next += result;
		} else {
			next += c;
		}
	}
	current = next;
	next = "";
}


