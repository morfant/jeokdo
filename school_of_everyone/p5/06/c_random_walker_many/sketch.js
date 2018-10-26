var walkers = [];

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
    // forloop 을 이용한 반복
    for (var i = 0; i < 1000; i++) {
        walkers[i] = new Walker(random(10), random(0.5, 3), random(5, 8));
    }

}

function draw() {
    background(0);

    for (var i = 0; i < walkers.length; i++) {
        walkers[i].move();
        walkers[i].show();
    }

}
