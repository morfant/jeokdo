function setup() {
    
    createCanvas(400, 400);
    background("DarkKhaki"); // color를 이름으로 정할 수 있다.
    
    multipleCircle(200, 200);
}


function draw() {
    
    
}


function multipleCircle (x, y) {

    // noStroke(); // 이후 외곽선을 그리지 말라는 명령.
    for (let i = 0; i < 50; i++) {
        fill(255 - i, 16);
        ellipse(x, y, 10 + i, 10 * i)
    }

}