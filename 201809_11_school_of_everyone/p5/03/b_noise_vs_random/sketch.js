var xoff = 0;

function setup() {
	createCanvas(300, 300);
}


function draw() {

    var n = noise(xoff);
    var r = random(1);
    
    // noise
	background(n * 255, 0, n * 255);
    xoff+=0.1; // 증가시키는 값이 커질 수록 noise()를 통한 변화의 폭도 커진다.
    
    // random
    fill(r * 255, 0, r * 255);
    rect(width/2, height/2, 200, 200);
    
    
	
}