class Cat {
    constructor(_x, _y, _size) {
        this.x = _x
        this.y = _y
        this.size = _size
        this.ground = this.y - this.size/2
    }
    
    show() {
        fill(255);
        ellipse(this.x, this.y, this.size, this.size)
        ellipse(this.x - 15, this.y - 20, this.size/3)
        ellipse(this.x + 15, this.y - 20, this.size/3)

        fill(0)
        ellipse(this.x, this.y + 5, this.size/8)

        stroke(255)
        line(this.x - 10, this.y + 10, this.x - 40, this.y + 20)
        line(this.x - 10, this.y + 5, this.x - 40, this.y + 10)
        line(this.x + 10, this.y + 10, this.x + 40, this.y + 20)
        line(this.x + 10, this.y + 5, this.x + 40, this.y + 10)
    }
    
    jump() {
        this.y = this.ground - 100
    }

    land() {
        this.y = this.ground
    }
}


var cats = []

function setup() {
    createCanvas(400, 400)

    for (let i = 0; i < 10; i++) {
        cats[i]= new Cat(random(width), random(height), random(30, 70))
        // 객체는 자신의 고유한 속성을 유지할 수 있다.
        // 예를 들어 고양이들은 고유한 얼굴 크기, 위치, 수염길이, 점프력 등등을 가질 수 있다.
    }
}


function draw() {

    background(0);

    for (var cat of cats) {
        cat.show()
        cat.land()
    }

}

function mouseClicked() {
    for (var cat of cats) {
        cat.jump()
    }
}
