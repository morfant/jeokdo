class Cat {
    constructor(_x, _y, _size) {
        this.x = _x;
        this.y = _y;
        this.size = _size;
    }
    
    show() {
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }
    
    jump() {
        this.y = this.y - 100;
    }
}

function setup() {
    createCanvas(400, 400);
    background(0);
    
    cat = new Cat(width/2, height, 50);
    cat.show();
    cat.jump();
    cat.show();
}
