
function setup() {
    
	createCanvas(800, 800);
	background(0);
	angleMode(DEGREES);
    
}


function draw() {

	// translate(width/2, height/2);
	translate(mouseX, mouseY);

	fill(255);
	ellipse(0, 0, 100, 100);

}