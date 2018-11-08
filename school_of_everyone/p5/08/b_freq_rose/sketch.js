// sound
var fft;
var sound;

// rose
var k, n, d, c, coff;

function preload(){
    sound = loadSound('assets/endless.mp3');
}
  
function setup() {

    createCanvas(900, 500);
    sound.amp(0.8);
    fft = new p5.FFT();
    sound.loop();

    coff = 0;
}

function draw() {

    var spectrum = fft.analyze(); // 주파수 분석 (frequency domain)

    var bassAmp = 0;
    for (var i = 0; i < 5; i++) {
       bassAmp += spectrum[i]; 
    }
    bassAmp = bassAmp/5; // 평균 값을 구합니다.
    // bassAmp = fft.getEnergy(20, 100);
    // console.log("bassAmp: " + bassAmp);
 

    var snareAmp = 0;
    for (var i = 600; i < 800; i++) {
       snareAmp += spectrum[i]; 
    }
    snareAmp = snareAmp / (800 - 600); // 평균을 구합니다.
    // console.log(snareAmp);

    background(snareAmp*3, bassAmp/2, bassAmp/2);

    // 스펙트럼 체크
    // noStroke();
    // fill(0, 255, 0); // spectrum is green

    // for (var i = 0; i < spectrum.length; i++){
    //     var x = map(i, 0, spectrum.length, 0, width);
    //     var h = -height + map(spectrum[i], 0, 255, height, 0);

    // 범위 설정
    //     if (i < 5) fill(255, 0, 0);
    //     else fill(0, 255, 0);

    //     rect(x, height, width / spectrum.length, h);
    // }

    
    // rose
    push();
    colorMode(RGB);
    noFill();

    // sound로부터 구한 값을 모양을 결정하는 변수에 적용합니다.
    n = sound.currentTime()/sound.duration() * 10;
    d = 2;
    coff = 0;

    if (snareAmp > 10) {
        d = random(10); // 모양을 다르게 만드는 변수
        noFill();
        stroke(165, map(d, 1, 10, 0, 100), 100);
        line(0, height/2, width, height/2);
        coff = snareAmp;
    }

    // coff = map(bassAmp, 0, 200, -100, 100);

    k = n/d;
    
    translate(width/2, height/2);
    
    // offset parameter
    // https://en.wikipedia.org/wiki/Rose_(mathematics)#Offset_parameter
    c = snareAmp;
    
    
    beginShape();
    colorMode(HSB);
    // strokeWeight(pow(bassAmp/12, 2)); // 효과를 극대화 하기 위해, 제곱에 비례하도록 합니다.
    strokeWeight(bassAmp/60); // 효과를 극대화 하기 위해, 제곱에 비례하도록 합니다.
    
    for (var a = 0; a < TWO_PI * d; a += 0.01) {
        var r = 100 * cos(k*a) + (c + coff);
        stroke(165, map(d, 1, 10, 0, 100), 100);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();



}

// function mouseClicked() {
//     if (sound.isPlaying()) {
//         sound.pause();
//     } else {
//         sound.loop();
//     }
// }

