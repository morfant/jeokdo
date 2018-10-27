 function preload() {
     
     // 어떤 format의 파일을 사용할 것인지 정합니다.
     soundFormats('mp3');
     kick = loadSound('assets/kick.mp3');
     snare = loadSound('assets/snare.mp3');
 }
  
function setup() {
    
    createCanvas(500, 500);
    
    kick.setVolume(1.0);
    snare.setVolume(1.0);
    
    background(0);
    
}

function draw() {
    
    background(0, 10); // 잔상이 남도록 배경색을 투명하게 만든다
    
    
    if (frameCount % 50 == 0) {
        kick.play();
        noStroke();
        fill(255);
        ellipse(width/2, height/2, 600, 600);
    } else if (frameCount % 125 == 0) {
        kick.play();
        noStroke();
        fill(0, 100, 200);
        ellipse(width/2, height/2, 600, 600);
    }
    
    
    if (frameCount % 100 == 0) {
        snare.play();
        
        strokeWeight(5);
//        if (random(1) > 0.5){
            stroke(255, 0, 0);
            line(0, 0, width, height);  
//        } else {
//            stroke(55, 100, 100);
//            line(width, 0, 0, height);
//        }
    }
    
}


