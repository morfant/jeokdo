var slider;
var mul = 0.65; // drawCircle()이 재귀적으로 반복 실행 될때마다 다음 번 그려지는 원의 크기에 곱해지는 값
var size_limit = 30;

function setup() {
	createCanvas(1000, 1000);
	stroke(255);
	noFill();

	// p5.js는 웹 브라우저가 사용하는 html의 요소들(slider, button, p...)를 다룰 수 있습니다.
	slider = createSlider(10, 150, 20, 10);
	// createSlider(min, max, defaultValue, increseStep) : 정확한 사용법은 p5js.org의 reference 를 참고해 주세요.
}

function draw() {
	size_limit = slider.value();
	// console.log(size_limit); // browser의 console 창(firefox에서 f12, chrome에서 alt + cmd + i)에 괄호안의 내용을 출력
	// print()명령을 사용해도 동일

	background(50);
	translate(width/2, height/2); // p5js.org -> reference 를 참고해주세요.

	drawCircle(300);

}

// 프랙탈을 그리기 위해 재귀함수를 사용합니다.
// 함수 안에서 다시 자신을 부르는 함수를 재귀함수라고 해요.
// 자세히 구문 하나하나를 보기 전에 큰 구조를 먼저 파악하면 좋을 것 같습니다.
function drawCircle(r) {

	// stroke alpha, weight
	stroke(255, 200 - map(r, 300, 10, 0, 180)) // r을 이용해서 선의 투명도를 변화시킴
	strokeWeight(3 - map(r, 300, 10, 0, 2.6)) // r을 이용해서 선의 두께를 변화시킴
	ellipse(0, 0, r, r);

	if (r > size_limit) { // 재귀함수를 사용할 경우는 종료 조건이 있어야만 합니다.
							// 그렇지 않으면 무한 루프에 걸려 컴퓨터가 멈추게 되어요.

		// right
		push(); // save : 기존의 상태(좌표 원점의 위치, 스타일 등)을 임시 저장
			translate(r/2, 0); // 좌표의 원점을 이동시킴
			drawCircle(r * mul);
		pop(); // restore : push()에서 저장한 상태를 복구

		// left
		push(); // save
			translate(-r/2, 0);
			drawCircle(r * mul);
		pop(); // restore

		// down 
		push(); // save
			translate(0, r/2);
			drawCircle(r * mul);
		pop(); // restore

		// up 
		push(); // save
			translate(0, -r/2);
			drawCircle(r * mul);
		pop(); // restore

	}

}