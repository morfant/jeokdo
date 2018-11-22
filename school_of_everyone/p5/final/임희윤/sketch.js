 function preload() {
     
     // 어떤 format의 파일을 사용할 것인지 정합니다.
     soundFormats('mp3');
     kicksynth = loadSound('assets/kicksynth.mp3');
     cowbell = loadSound('assets/cowbell.mp3');
 }
  
function setup() {
    
    createCanvas(innerWidth, innerHeight);
    
    kicksynth.setVolume(1.0);
    cowbell.setVolume(1.0);
    
    background(0);
    
}

function draw() {
    
    background(0, 10); // 잔상이 남도록 배경색을 투명하게 만든다
    
    textSize(15);
        text('071.8', 1290, 30);
    
    if (frameCount % 50 == 0) {
        kicksynth.play();
           
    for (var i = 0; i < 1000; i = i + 1) {
        stroke(random(255), random(255), random(255));
        line(random(width), random(height), i, i);
    }
        
} 
    
    else if (frameCount % 125 == 0) {
        kicksynth.play();
           
    for (var i = 0; i < 50; i++) {
        var x = random(width);
        var y = random(height);
        var r = random(10, 100)
        stroke(random(255), random(255), random(255));
        noFill();
        rect(x, y, r*7, r*4);
    } 
        
}
    
    
    if (frameCount % 100 == 0) {
        cowbell.play();
        
        
//        if (random(1) > 0.5){
     
  for (var i = 0; i < 200; i++) {
        var x = random(width);
        var y = random(height);
        var r = random(10, 80);
        fill(random(255), random(255), random(255));
        noStroke();
        rect(x, y, r*3, r*6);
    }
        
         for (var i = 0; i < 50; i++) {
        var x = random(width);
        var y = random(height);
        var r = random(10, 100)
        stroke(random(255), random(255), random(255));
        noFill();
        rect(x, y, r*2, r*5);
    } 
//        } else {
//            stroke(55, 100, 100);
//            line(width, 0, 0, height);
//        }
    }
    
}


