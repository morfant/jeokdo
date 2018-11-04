let moving = 0;
let x_step, y_step;
let cloudy = 16;
let slider;

function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);
	x_step = 8;
	y_step = 8;
	slider = createSlider(0, 50, 10, 1);
	
}


function draw() {
	background(0);
	noStroke();

	cloudy = slider.value();
	
	moving += 0.01;
	
	let xoff = moving;
	for (let x = 0; x < width + x_step; x+=x_step){
		
		let yoff = 0;
		for (let y = 0; y < height + y_step; y+=y_step){
			let r = noise(xoff, yoff);
			r = map(r, 0, 1, 0.1, 1);
            fill(25 * r * cloudy, 114 * r * cloudy, 159 * r * cloudy, 255 * r * cloudy);
            // ellipse(x, y, x_step+2, y_step+2);
            rect(x, y, x_step, y_step);
			yoff += 0.05;
		}
		xoff += 0.05;
	}

}


// function mouseDragged() {
// 	cloudy = map(mouseY, 0, height, 0, 50);
// }