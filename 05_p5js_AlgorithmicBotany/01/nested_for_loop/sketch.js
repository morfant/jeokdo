function setup() {
    createCanvas(400, 400);
    background(255)
}

function draw() {
    background(255);

    // for loop 안에서 다시 for loop을 사용해서 i는 6씩, j는 10 씩 증가시켜 만나는 모든 픽셀에 점을 찍고 있습니다.
    // 픽셀을 다루고자 할 때 사용되는 관습적인 방법이에요.
    for (var i = 0; i < width; i += 6) {
        for (var j = 0; j < height; j += 10) {
            stroke(map(j, 0, 400, 0, 255), 100, 100)
            strokeWeight(random(7))
            point(i, j)
        }
    }
}