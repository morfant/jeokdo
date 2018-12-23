
function setup() {
  
    createCanvas(innerWidth, innerHeight);    
    background(0);

    
    // 수많은 원을 그리기
    for (var i = 0; i < 1000; i = i + 1) {
        noStroke();
        fill(0, random(255), 0);
        var r = random(100);
        ellipse(random(width), random(height), r, r);
    }
    

    /*
    
    i++  는
    i = i + 1; 의 줄임말. (i가 1씩 증가)
    
    i+=2 는 
    i = i + 2;의 줄임말. (i가 2씩 증가)
    
    */
    
    
}



function draw() {
    
    
}