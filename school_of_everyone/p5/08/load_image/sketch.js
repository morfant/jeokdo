var x = 0;
var y = 0;
var spacing = 5;
var img;
var p = [];

// 이미지를 사용하는 스케치는 firefox를 이용해서 open 하셔야 합니다.
function preload() {
  img = loadImage("assets/pumpkin.jpg");
//   img = loadImage("assets/sky.png");
}


function setup() {
    createCanvas(600, 300);
    
    image(img, 0, 0);
    
    // 이미지의 컬러를 픽셀 단위로 가져옵니다.
    for(var i = 0; i < img.width; i++) {
        var arr_h = [];
        for (var j = 0; j < img.height; j++) {
            var c = get(i, j);
            arr_h.push(c);
        }
        p.push(arr_h);
    }
    
    background(255);
    
}

function draw() {
    
    push();
    for (var y = 0; y < height; y += spacing) {
        for (var x = 0; x < width; x += spacing) {
            if (y <= (height - spacing) ) {
                noStroke();
                fill(p[round(x/width * img.width)][round(y/height * img.height)]);
                rect(x, y, spacing, spacing);
            }
        }
    }
    pop();

}