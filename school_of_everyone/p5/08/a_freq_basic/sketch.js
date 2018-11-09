var fft;
var sound;

function preload(){
    sound = loadSound('assets/endless.mp3');
}
  
function setup(){

    createCanvas(innerWidth, innerHeight/3);
    sound.amp(0.8);
    fft = new p5.FFT();

}

function draw(){
    background(0);

    var spectrum = fft.analyze();
    noStroke();
    fill(0, 255, 0); // spectrum is green

    for (var i = 0; i < spectrum.length; i++){
        var x = map(i, 0, spectrum.length, 0, width);
        var h = map(spectrum[i], 0, 255, 0, height);
        rect(x, height, width / spectrum.length, -1 * h);
    }

    var waveform = fft.waveform();
    noFill();

    beginShape();
    stroke(255, 0, 0);
    strokeWeight(4);
    for (var i = 0; i < waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        vertex(x, y);
    }
    endShape();

    text('click to play/pause', 4, 10);
}

function mouseClicked() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.loop();
    }
}

