
var pdf;
var rects = [];
var captureImage = false;

function setup() {



    createCanvas(innerWidth, innerHeight);
    // createCanvas(windowWidth,windowHeight);

    angleMode(DEGREES);

    for (let i = 0; i < 80; i++) {
        rects[i] = new Rect(random(0, width), random(0, height), random(-3, 3), random(-3, 3));
    }

    pdf = createPDF();
    pdf.beginRecord();
    background(0);
}

function draw() {
    background(0, 1);

    for (let i = 0; i < rects.length; i++) { // rects.length는 rects에 들어있는 값들의 갯수를 알려준다.
        rects[i].move();
        rects[i].draw();
        rects[i].getAge();
    }

    for (let i = 0; i < rects.length; i++) {

        if (rects[i].age > 1) {

            // new를 통해 만든 instance가 사용하고 있는 memory를 반환함.
            rects[i] = null;
            delete rects[i];

            rects.splice(i, 1); // Array에서 해당 instance 를 제거
        }

    }

    if (captureImage === true) {
        pdf.save();
        captureImage = false;
    }

}


function keyTyped() {
    if (key === 'c') {
        captureImage = true;
    }
}
