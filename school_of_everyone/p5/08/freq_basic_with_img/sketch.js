var fft;
var sound;
var spacing = 5;
var img;
var p = [];

// 이미지를 사용하는 스케치는 firefox를 이용해서 open 하셔야 합니다.

function preload(){
    img = loadImage("assets/pumpkin.jpg");
    sound = loadSound('assets/endless.mp3');
}
  
function setup(){

    createCanvas(600, 300);

    sound.amp(0.8);
    fft = new p5.FFT();

    image(img, 0, 0);
    
    // 이미지의 컬러를 픽셀 단위로 가져와 배열에 저장해 둡니다.
    for(var i = 0; i < img.width; i++) {
        var arr_h = [];
        for (var j = 0; j < img.height; j++) {
            var c = get(i, j);
            arr_h.push(c);
        }
        p.push(arr_h);
    }
    
    background(0);
 

}

function draw(){
    background(0);

    push();
    for (var y = 0; y < height; y += spacing) {
        for (var x = 0; x < width; x += spacing) {
            if (y <= (height - spacing) ) {
                noStroke();
                fill(p[round(x/width * img.width)][round(y/height * img.height)]);
                rect(x, y, spacing, spacing);
            }
        }
    }
    pop();


    var spectrum = fft.analyze();
    spacing = spectrum[10];
    // noStroke();
    // fill(0, 255, 0); // spectrum is green

    // for (var i = 0; i < spectrum.length; i++){
    //     var x = map(i, 0, spectrum.length, 0, width);
    //     var h = map(spectrum[i], 0, 255, 0, height);
    //     rect(x, height, width / spectrum.length, -1 * h);
    //     // spacing = h;
    // }

    // spacing = fft.getEnergy(100);

    
    text('click to play/pause', 4, 10);
}

function mouseClicked() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.loop();
    }
}

