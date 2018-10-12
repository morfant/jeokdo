function setup() {    
	createCanvas(800, 800);background(0);
	angleMode(DEGREES);
}

function draw() {
//    background(0);
	translate(mouseX, mouseY);
	rotate(frameCount*20); // 현재까지 진행된 frame 수를 돌려줌.

	fill(255);
	rect(0, 0, 100, 100);
}

function mouseClicked() {
    background(0);
}