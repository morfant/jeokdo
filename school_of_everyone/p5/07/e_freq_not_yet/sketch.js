var sound, amplitude;

function preload() {
     
     // 어떤 format의 파일을 사용할 것인지 정합니다.
     soundFormats('mp3');
     sound = loadSound('assets/letter.mp3');
 }
  
function setup() {
    
    createCanvas(500, 500);
    amplitude = new p5.Amplitude();

    rectMode(CENTER);

    // 음량을 설정합니다. (0 ~ 1.0)
    sound.setVolume(1.0);
    
}

function draw() {
    
    colorMode(RGB);
    background(0);

    fill(255);
    textAlign(CENTER);
    textSize(40);

    // text(sound.currentTime(), width/2, height/2);
    text(sound.currentTime().toFixed(1), width/2, height/2); // 원하는 길이만큼 반올림 합니다. 

    // 시간이 지남에 따라 커지는 사각형 
    noStroke();

    // 재생되는 사운드파일의 음량(amp), 0.0 ~ 1.0
    var level = amplitude.getLevel();

    // map을 이용하여 level의 값이 0과 1 사이로 들어올 때, 출력되는 값을 0.2 ~ 1.0 의 값으로 반환 합니다.
    var hsb_alpha = map(level*2, 0, 1, 0.2, 1.0);

    // 현재의 재생 위치 / 전체 길이, 현재 위치의 값이 0.0 ~ 1.0 사이가 되도록 합니다.
    var timePos = sound.currentTime()/sound.duration();

    colorMode(HSB);
    // 시간이 지남에 따라 HSB컬러의 H 값이 달라져, 채우는 색이 변합니다. 곡이 끝나면 처음의 색으로 돌아 옵니다. 
    fill((200 + (timePos * 360)) % 360, 100, 100, hsb_alpha);
    rect(width/2, height/2, width, height);
   
}

function mouseClicked() {
    if (sound.isPlaying()) {
        sound.stop();
    } else {
        sound.play();
    }
}

