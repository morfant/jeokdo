

function setup() {
	createCanvas(300, 300);
}


function draw() {
    
    a(width/2, height/2);
	
}


function a(x, y) {
    
    rect(x, y);
    
    a(x/2, y/2);
    
}