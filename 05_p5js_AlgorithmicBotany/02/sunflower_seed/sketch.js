// http://algorithmicbotany.org/papers/abop/abop.pdf
// 책의 p. 100 을 코드로 구현한 것입니다. p. 101에서는 137.5도를 바꾸면 달라지는 패턴을 소개하고 있습니다.
// 해당 수식이 극좌표를 전제로 하기 때문에 이를 p5js로 그리기 위해서는 극좌표계 -> 직교좌표계 변환이 필요합니다.

var n = 0;
var c = 2; // r에 곱해지는 고정된 값

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    background(0);
}

function draw() {

    if (n < 1000) { // 그려지는 갯수 제한 

        var theta = n * 137.5; // theta
        var r = c * sqrt(n); // 반지름 radius

        translate(width / 2, height / 2);
        var x = 2 * r * cos(theta);
        var y = 2 * r * sin(theta);

        fill(255, 4 * r); // r에 따라서 면 색의 투명도를 달라지게 합니다.
        stroke(200, 30, 10, 20 / r * 255); // r에 따라서 선 색의 투명도를 달라지게 합니다.
        ellipse(x, y, 5, 5);

        n++; // n = n + 1 : 1씩 증가한다.
    }
}