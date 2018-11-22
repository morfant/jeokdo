var sound;
var fft;

function preload() {
    soundFormats('mp3');
    sound = loadSound("assets/sound.mp3");
}

function setup() {
    
	createCanvas(innerWidth, innerHeight);
	angleMode(DEGREES);
	background(255);
    noFill();
	strokeWeight(1);
    
    sound.amp(0.5);
    fft = new p5.FFT();
    
    sound.loop();
    
    
}


function draw() {

    var spectrum = fft.analyze();
    
    var amp = fft.getEnergy(200, 300);
    

	translate(width/2, height/2);
	rotate(frameCount);
    
	push();
		translate(width/5, height/5);
		rotate(frameCount);
        var a = map(amp, 0, 255, 10, 30);
        stroke(255);
        colorMode(RGB, 50, 40);
        fill(amp, 10, 10);
        ellipse(0, 0, 100, 100);
    
        translate(width/20, height/20);
		rotate(frameCount);
        stroke(255);
        fill(10, amp, 10);
        ellipse(0, 0, 100, 100);

	pop();

    
}