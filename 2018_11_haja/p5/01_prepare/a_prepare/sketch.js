// 여기에 선언하면 전역(global variable) 변수
// 코드의 어디에서나 읽고 쓸 수 있다.
let desk = 100;

function setup() {
    
    // !! code는 위에서 아래로, 순서대로 읽혀진다 !!
    
    // 가로 400 pixel, 세로 400 pixel의 캔버스 만들기
    createCanvas(400, 400);
    
    // 캔버스의 바탕색을 검은색으로
    background(0);
    
    // 도형 그리기
    ellipse(100, 100, 50, 50);
    rect(100, 100, 100, 100);
    
    // 외곽선을 그린다 - r, g, b 로 결정되는 color로
    stroke(200, random(255), random(255));

    
    // 외곽선의 두께를 10 pixel로
    strokeWeight(10);
    triangle(250, 200, 250, 100, 300, 300);    
    
    // 지역변수(local variable)
    // {, } 사이에서만 읽고 쓸 수 있다
    let desk = 10;
    desk = desk * 2;
    
    // 변수 desk의 값을 브라우저의 console 창에 출력
    console.log(desk);
    
    // 함수(function)
    // 함수의 사용
    sum(0.7, 0.5);
    
    // 함수의 리턴값이 있는 경우 그 값을 다시 변수에 넣을 수 있다
    let a = sum(100, 200);
    console.log(a);
    
}


/*

함수를 만들 때에는

function 함수이름 (아규먼트1, 아규먼트2, ..) {

}

의 형식으로.

*/

function sum(a, b) {

    return a + b;
    
}