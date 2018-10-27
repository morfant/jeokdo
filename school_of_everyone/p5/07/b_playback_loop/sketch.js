 function preload() {
     
     // 어떤 format의 파일을 사용할 것인지 정합니다.
     soundFormats('mp3');
     song = loadSound('assets/letter.mp3');
 }
  
function setup() {
    
    createCanvas(500, 500);
    rectMode(CENTER);

    // 음량을 설정합니다. (0 ~ 1.0)
    song.setVolume(1.0);

    // 반복해서 재생합니다.
    song.loop();
    
}

function draw() {
    
    background(0);

    fill(255);
    textAlign(CENTER);
    textSize(40);

    // text(song.currentTime(), width/2, height/2);
    text(song.currentTime().toFixed(1), width/2, height/2); // 원하는 길이만큼 반올림 합니다. 

    // 시간이 지남에 따라 커지는 사각형 
    noStroke();
    fill(100, 150, 200, 200);
    var len = song.currentTime()/song.duration() * width;
    rect(width/2, height/2, len, len);
   
}


