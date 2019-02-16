var wave;
var button;
var playing = false;
var slider;

function setup() {
    createCanvas(100, 100);
    wave = new p5.Oscillator();
    slider = createSlider(100, 1200, 440);

    wave.setType('sine');
    wave.start();
    wave.amp(1);
    wave.freq(300);

    button = createButton('play/pause');
    button.mousePressed(toggle);

}



function draw() {
    wave.freq(slider.value());
    
    if (playing) {
        background(200, 100, 200);
    } else {
        background(51);
    }
    
    
}


function toggle() {

    if (!playing) {
        wave.start();
        wave.amp(0, 1);
        playing = true;
    } else {
        wave.stop();
        wave.amp(0.5, 1);
        playing = false;
    }
}
