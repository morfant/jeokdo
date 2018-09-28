
function setup() {
  
    createCanvas(innerWidth, innerHeight);
 
    // frame이 1초당 몇 번 만들어지게 할 것인지의 속도를 결정
    frameRate(10);   
    

    
}



function draw() {
    
    // 배경 색을 결정 합니다. (black ~ white, alpha);
    background(0, 55);
    
    // 선의 색을 결정 합니다. (r, g, b, alpha)
    stroke(random(255), random(255), random(255), 255);
    
    // 선의 두께 결정 (pixel 단위로)
    strokeWeight(4);
    
    // 채우기 색을 없애는 명령 <-반대-> fill()
    noFill();
    
    // width = canvas의 가로 사이즈
    // height = canvas의 세로 사이즈
    var r = random(width); // 0 ~ width 사이의 랜덤한 값
    ellipse(width/2, height/2, r, r);
    
    
}