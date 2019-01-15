var angle = 0;
var slider;
var mul = 0.8
var i = 0;
var count = 0

function setup() {
	createCanvas(1000, 800);
	stroke(255);
	slider = createSlider(0, TWO_PI, radians(20), 0.01);
}

function draw() {
    angle = slider.value();
    console.log(degrees(angle))

	background(50);
    translate(width/2, height);

    drawBranch(150);
    noLoop()
}


function drawBranch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);

    // branch color
    if (count % 2 == 0) {
        stroke(255, 0, 0, 100 + count/300)
    } else {
        stroke(0, 255, 255, 100 + count/300)
    }

	if (len > 10) {
		// right
		push(); // save
			rotate(angle);
            drawBranch(len * mul);
            count++
		pop(); // restore

		// left
		push(); // save
			rotate(-angle);
            drawBranch(len * mul);
            count++
		pop(); // restore
	}
}