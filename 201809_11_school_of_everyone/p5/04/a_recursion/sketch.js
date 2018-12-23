function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);
}

function draw() {
	background(0, 100);
	fill(200, 40, 10, 10);
	// noStroke();
	drawRect(width/2, height/2, 400-1, 400-1);
}

function drawRect(x, y, len) {
	rect(x, y, len, len);
	if (len > 10) { // 무한 루프에 빠지지 않도록, 제한을 두는 것을 잊지 마세요!!
		drawRect(x, y, len * 0.99);
	}
}
