var moving = 0;
var x_step, y_step;

function setup() {
    
	createCanvas(800, 800);
	
	x_step = 8;
    y_step = 8;
    
}


function draw() {

	background(0);
	noStroke();
	
	moving += 0.2;
	
	var xoff = moving;
	for (var x = 0; x < width + x_step; x+=x_step){
		
		var yoff = 0;
		for (var y = 0; y < height + y_step; y+=y_step){
            
			var r = noise(xoff, yoff);

            stroke(255, 255 * r);
            strokeWeight(0.2);
            fill(55, 200 * r, 200, 255 * r);
			
//			rect(x, y, x_step, y_step);
            ellipse(x, y, x_step, y_step);
            
			yoff += 0.2;
		}
		xoff += 0.2;
	}

}