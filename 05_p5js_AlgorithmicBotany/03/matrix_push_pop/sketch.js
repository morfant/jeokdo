function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(50);

	push(); // 현재 좌표계의 상태(원점의 위치, 로테이션 각도 등) 을 저장.
	translate(width/2, height/2);
	fill(255, 100, 100);
	ellipse(0, 0, 100, 100);
	pop(); // push() 를 통해 저장한 좌표계의 상태를 복원.


	// 앞선 translate()의 영향을 받지 않습니다. 
	ellipse(0, 0, 100, 100);

	push();
	translate(width*3/4, height/2);
	fill(0, 180, 100);
	ellipse(0, 0, 50, 50);
	pop();

}
