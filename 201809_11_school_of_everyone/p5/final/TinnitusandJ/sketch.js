var x = 0;
var y = 0;
var spacing = 5;
var img;

var reset = false;

var fft;
var sound;

function preload() {
  img = loadImage("assets/sevensisters.jpg");
       sound = loadSound('assets/Tinnitus2.mp3');
}


function setup() {
    
    sound.loop();
    createCanvas(3872,2592);
    
    fft = new p5.FFT();

    background(255);
    image(img, 100, 200);
    
    tint(255, 126); // Apply transparency without changing color
    image(img, 10, 0);
}


function draw() {
    

    if (reset) {
        background(255);
        image(img, 100, 200);
        
        tint(255, 126); // Apply transparency without changing color
        image(img, 10, 0);

        reset = false;
    }
    
    
    var spectrum = fft.analyze();
    noStroke();
    fill(255, 255, 250);

    tint(255, 126);

    
    
    
    for (var i = 0; i < spectrum.length; i++){
        var x = map(i, 0, spectrum.length, 0, width);
        var h = map(spectrum[i], 0, 255, 0, height);
        rect(x, height, width / spectrum.length, -1 * h);
        
        
    }

    var waveform = fft.waveform();
    noFill();

    beginShape();
    stroke(255, 255, 255);
    strokeWeight(0.3);
    
    
    for (var i = 0; i < waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        vertex(x, y);
    }
    endShape();
    

}

 function mouseClicked() {
     if (sound.isPlaying()) {
         sound.pause();
     } else {
         sound.loop();
     }


     reset = true;

 }