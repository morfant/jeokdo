function setup() {
    
    createCanvas(400, 400);
    background("DarkKhaki"); // color를 이름으로 정할 수 있다.
    
    multipleCircle(200, 200);

    multipleCircle(20, 20);

}


function draw() {
    
    
}


// 크기를 결정하는 아규먼트를 추가해 봅시다.
function multipleCircle (x, y) {

    // noStroke(); // 이후 외곽선을 그리지 말라는 명령.
    for (let i = 0; i < 50; i++) {
        fill(255 - i, 16);
        ellipse(x, y, 10 + i, 10 * i)
    }

}