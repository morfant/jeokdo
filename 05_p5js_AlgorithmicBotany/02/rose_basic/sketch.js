// https://ko.wikipedia.org/wiki/%EC%9E%A5%EB%AF%B8%EA%B3%A1%EC%84%A0
var k, n, d;
var r = 100;
var theta = 30;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    background(30);
}

function draw() {
    n = 7;
    d = 2;
    k = n / d;

    translate(width / 2, height / 2);

    // r = cos (k * theta) 수식을 코드로 구현
    // 앞의 100은 스케일의 기능, 비례하여 움직이는 반경이 조절 됩니다.
    var r = 100 * cos(k * -theta);

    // 극좌표 -> 직교좌표
    var x = r * cos(-theta);
    var y = r * sin(-theta);

    noStroke();
    fill(84, 184, 123);
    ellipse(x, y, 10, 10);
    theta = theta - 2; // theta가 지속적으로 바뀝니다. 바뀌는 속도와 방향은 부호와 숫자로 결정할 수 있습니다.
}