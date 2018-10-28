var mulToAmp = 50;

function setup() {
    
    createCanvas(500, 500);

    // 오디오 입력을 받기 위한 준비
    mic = new p5.AudioIn();

    // 음량을 설정합니다. (0 ~ 1.0)
    mic.amp(0.5);

    // 오디오 입력을 받기 시작합니다.
    mic.start();

    
}

function draw() {
    
    background(0, 200);

    // 마이크 입력의 소리 크기를 측정합니다. (결과 값은 0.0 ~ 1.0)
    micLevel = mic.getLevel();

    noStroke();
    fill(100, 150, 200, 200);

    // 마이크 입력 크기에 비례하는 크기의 원을 그립니다.
    var r = micLevel * width * mulToAmp;
    ellipse(width/2 + random(-10, 10), height/2 + random(-10, 10), r, r);

    // 조건을 추가하여 덧씌우는 다른 원을 그립니다. 
    if (r > width*3/4) {
        fill(10, 250, 100, 200);
        ellipse(width/2 + random(-10, 10), height/2 + random(-10, 10), r, r);
    }
   
}


