var angle = 0;var slider;var mul = 0.8;

function setup() {    
	createCanvas(500, 500);stroke(255);
	slider = createSlider(0, TWO_PI, PI/4, 0.01);
    background(0);
}

function draw() {
	noLoop(); angle = slider.value();
//	background(50); 
    translate(width/2, height);
    
    prevCount = frameCount;
    
//    if (frameCount - prevCount > 10) drawBranch(150);
    
    
}

function drawBranch(len) {
    strokeWeight(len/14);
    
    stroke(255 * len/150, 20, 105 + len);
    
	line(0, 0, 0, -len);
    translate(0, -len);
    
	if (len > 4) {
		var r = random(1);
		if (r > 0.2) {
			push(); // save
				rotate(angle * r);
        if (frameCount % 10 == 0) drawBranch(len * mul);
			pop(); // restore
		}
		var r2 = random(1);
		if (r2 > 0.1) {
			push(); // save
				rotate(-angle * r2);
if (frameCount % 10 == 0) drawBranch(len * mul * r2);
				
			pop();}}}