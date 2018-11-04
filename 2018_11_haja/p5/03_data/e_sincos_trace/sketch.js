var px, py;
var w_div, h_div;
var rx, ry;

function setup() {
  
    createCanvas(400, 400);
    angleMode(DEGREES);
    background(0);


    // 아래 변수의 값을 변경해 가며 이미지의 변화를 살펴보세요.

    // 원이 그려지는 기준점을 정합니다.
    px = width/2;
    py = height/2;

    // sin(), cos()에 곱해지는 수인 width, height를 나누는 수 입니다. 클수록 sin(), cos()에 곱해지는 수는 작아지겠죠?
    w_div = 2;
    h_div = 2;

    // 그려지는 원의 가로, 세로 사이즈
    rx = 100;
    ry = 100;

}


function draw() {
    

    // 외곽선을 그리지 않는다
    // noStroke();

    // 색을 채우지 않는다.
    noFill();
    stroke(255, 50); // 흰색, 투명도는 50/255

    var degree = frameCount; // 지금까지 실행된 frame의 수를 돌려 줍니다. 따라서 점점 증가하는 수가 됩니다.
    // console.log(frameCount);

    // sin(), cos() 은 -1 ~ 1 사이의 값으로 변하기 때문에 그대로 사용하는 경우보다 얼마의 범위로 변할 것인가를 곱해서 사용하는 경우가 많습니다. 
    ellipse(px + (width / w_div) * sin(degree), py + (height / h_div) * cos(degree), rx, ry);

    w_div += 0.001;
    h_div += 0.001;
    
    
}