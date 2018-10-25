var walker1, walker2;

class Walker{
    constructor(_size, _rand_x, _rand_y) { // 함수에 아규먼트를 넣는 것과 같이 사용할 수 있다
        this.x = width/2;
        this.y = height/2;
        this.size = _size;
        this.rand_x = _rand_x;
        this.rand_y = _rand_y;

    }

    move() {
        this.x = this.x + random(-this.rand_x, this.rand_x);
        this.y = this.y + random(-this.rand_y, this.rand_y);
    }

    show() {
        stroke(255);
        strokeWeight(3);
        ellipse(this.x, this.y, this.size, this.size);
    }
}

function setup() {
    createCanvas(600, 600);
    background(0);
    // constructor()에서 정의한 방법대로 사용한다.
    // 각각의 walker마다 다른 색을 주고 싶다면?
    walker1 = new Walker(10, 2, 2);
    walker2 = new Walker(5, 5, 5);

}

function draw() {
    // background(0);
    walker1.move();
    walker1.show();

    walker2.move();
    walker2.show();
}
