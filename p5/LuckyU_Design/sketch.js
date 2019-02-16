let bar;
let px, py
let res = 50
let img;
let pxs = []
let circleSize = 8

let rectEmboss

function preload() {

    img = loadImage("assets/luckyU.jpg"); // Load the image

}

function setup() {
    createCanvas(img.width, img.height * 2);
    //   bar = new Bar(width/2, height/2, 20, 100)

    img.loadPixels();
    for (let i = 0; i < img.pixels.length / 4; i++) {
        pxs[i] = img.pixels[i * 4]
    }
    img.updatePixels()


    px = 0
    py = 0

    w = width / res
    h = height / res
    d = w / 2
    background(0)
    // image(img, 0, 0)

    console.log(pxs.length)

    
    rectEmboss = new RectEmboss(width/4*3, height/4*3, 100, 40,
                    color(4, 81, 10, 140), color(255, 100) )
}

function draw() {
    //background(0);
    
    // Typo-logo
    noStroke()
    let r = getR(round(px + w / 2), round(py + h / 2))
    if (r != 255) {
        if (random(1) < 0.5) {
            // fill(4, 81, 10, 140) // green
            // rect(px, py + h - d, w, d)
            let r = new RectEmboss(px, py + h - d, w, d,
        		color(4, 81, 10, 140), color(255, 100));
            r.show()
            
        } else {
            // fill(8, 57, 117, 240) // blue
            // rect(px, py, d, h)
            
            let r = new RectEmboss(px, py, d, h,
        		color(8, 57, 117, 240), color(255, 100));
            r.show()
        }
    } else {
    
    }
    
    
    // 'Review' button image
    push()
    translate(width/4*1, height/4*3)
    fill(255)
    ellipse(0, 0, 100)
    fill("red")
    ellipse(0, 0, 100 - 20 * 1)
    fill("gold")
    ellipse(0, 0, 100 - 20 * 2)
    fill("SteelBlue")
    ellipse(0, 0, 100 - 20 * 3)
    pop()
    
    
    
    
    // 'Play' button image
    // shape of 'Playbar'
    /*
    push()
    translate(width/4*3, height/4*3)
    for (let i = 0; i < 10; i++) {
        // stroke(0)
        fill(4, 81, 10, 140) // green
        // noFill()
        // stroke(4, 81, 10, 140)
        stroke(255, 100)
        strokeWeight(0.2)
        rect(10 - i, i, 100, 40)
    }
    pop()
    */
    rectEmboss.show()

    
/*
    if (random(1) < 0.5) {


        if (r != 255) {
            let rr = floor(random(0, 4))

            switch (rr) {

                case 0:
                    fill(191, 24, 9) //red
                    break;
                case 1:
                    fill("khaki") // yellow
                    break;
                case 2:
                    fill(255) // green
                    break;
                case 3:
                    fill("cornflowerblue") // blue
                    break;
                default:
                    fill(200, 100, 100)
                    break;
            }
            ellipse(px + w / 2, py + h / 2, circleSize * (1 + (rr/2)))

        } else {
            fill(4, 81, 10, 140)
            rect(px, py + h - d, w, d)
        }


    } else {

        if (r != 255) {
            let rr = floor(random(0, 4))

            switch (rr) {
                case 0:
                    fill(191, 24, 9) //red
                    break;
                case 1:
                    fill("khaki") // yellow
                    break;
                case 2:
                    fill(255) // green
                    break;
                case 3:
                    fill("cornflowerblue") // blue
                    break;
                default:
                    fill(200, 100, 100)
                    break;
            }
            ellipse(px + w / 2, py + h / 2, circleSize * (1 + (rr/2)))

        } else {
            fill(8, 57, 117, 240)
            rect(px, py, d, h)
        }


    }
*/
    
    px = px + w

    if (px > width) {
        py = py + h
        px = 0
    }

}

function getR(x, y) {

    var i = x + y * width
    // console.log(pxs.length)
    // console.log(i)

    // console.log(pxs[x + y * width])
    return pxs[i]
}


function mouseClicked() {
    getR(mouseX, mouseY)

}

class RectEmboss {
    constructor(_x, _y, _w, _h, _fc, _sc) {
        this.height = _h;
        this.width = _w;
        this.x = _x
        this.y = _y
        this.depth = 10
        this.fillColor = _fc
        this.strokeColor = _sc
        this.strokeWeight = 0.2
    }

    setColor(c) {
        fill(c)
    }

    show() {
        push()
        translate(this.x, this.y)
        for (let i = 0; i < this.depth; i++) {
            fill(this.fillColor) // green
            stroke(this.strokeColor)
            strokeWeight(this.strokeWeight)
            rect(this.depth - i, i, this.width, this.height)
        }
        pop()
    }
    
    
    
    
    
}