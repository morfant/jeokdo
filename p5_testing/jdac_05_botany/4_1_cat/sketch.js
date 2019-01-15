class Cat {
    constructor(_x, _y, _size) {
        this.x = _x
        this.y = _y
        this.size = _size
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
        this.y = this.y - 100
    }

    land() {
        this.y = height - this.size/2
    }
}

function setup() {
    createCanvas(400, 400)
    cat = new Cat(width/2, height, 50)
}


function draw() {

    background(0);
    cat.show()
    cat.land()

}

function mouseClicked() {
    cat.jump()
}
