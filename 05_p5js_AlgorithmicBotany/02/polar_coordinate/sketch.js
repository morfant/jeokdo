var r = 200;
var theta = 45;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES); // p5js.org -> reference 참고
    noFill();
}

function draw() {
    background(0);

    // center lines
    stroke(255);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);

    translate(width / 2, height / 2);

    theta = frameCount % 360;
    // frameCount는 draw() 함수가 실행 될 때마다 1씩 증가하는 내부적인 변수 입니다. 

    // 극좌표계에서 한 점을 특정하는 r, theta를 이용해서 직교좌표계에서 점을 특정하기 위해 필요한 x, y를 구합니다.
    // https://ko.wikipedia.org/wiki/%EC%82%BC%EA%B0%81%ED%95%A8%EC%88%98#%EC%A0%95%EC%9D%98
    var x = r * cos(-theta);
    var y = r * sin(-theta);

    ellipse(x, y, 10, 10);
    text(theta, x + 20, y + 20);

    // line connect
    stroke(255, 0, 0);
    line(0, 0, x, y);
}