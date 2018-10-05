
function setup() {
    
	createCanvas(800, 800);
	background(0);
    
}


function draw() {

	translate(width/2, height/2);
	rotate(mouseX);

	fill(255);
	rect(0, 0, 100, 100);

}