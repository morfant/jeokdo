var angle = 0;
var mul = 0.8;
var slider;

function setup() {
	createCanvas(1000, 800);
	slider = createSlider(0, TWO_PI, radians(20), radians(1));
}

function draw() {
	angle = slider.value();

	background(250);
    translate(width/2, height);

	drawBranch(150);
	noLoop(); // draw()를 한 번만 실행하게 한다.
}


function drawBranch(len) {

	// +, -, *, / 가 함께 있을 때의 우선 순위: *, / -> +, -
	// 그러나 적당히 괄호를 사용하는 것이 보기에도 좋고 안전하다.
	stroke(80, 20 + (105 * len/150), 20 + (105 * len/150));
	strokeWeight(10 * len/150);

	line(0, 0, 0, -len);
	translate(0, -len);

	if (len > 10) { // 종료조건
		// right
		push(); // save
			rotate(angle/2 + (angle/2 * random(-1.0, 1.0)));
			drawBranch(len * mul);
		pop(); // restore

		// left
		push(); // save
			// rotate(-angle);
			rotate(-angle/2 + (-angle/2 * random(-1.0, 1.0)));
			drawBranch(len * mul);
		pop(); // restore

	}
}