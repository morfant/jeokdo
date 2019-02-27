var current;
var next = "";
var s = [];
var count = 0;
var textPosY = 0;
var n = 5; 

function setup() {

	createCanvas(900, 900);
	angleMode(DEGREES);

	noFill();

	// Axiom
	current = "F";

	// Rules
	for (var i = 0; i < n; i++) {
		for (var c of current) {
			if (c == "F") {
				next += "FF+[+F-F-F]-[-F+F+F]";
			} else if (c == "X") {
				next += "F-[[X]+X]+F[+FX]-X";
			}
			else {
				next += c;
			}
		}

		current = next;
		// print("Gen " + (i + 1) + " :" + current);
		next = "";
	}

	// noLoop();

}


function draw() {



	// 시작점
	// 기준점 이동, 위 방향을 각도 0으로 하기 위한 조정
	translate(width / 2, height);
	rotate(-90);

	// turtle graphics
	// https://en.wikipedia.org/wiki/Turtle_graphics
	var x = 0;
	var y = 0;
	var angle = 0;
	var theta = 22.5;
	var step_size = 10;

	background(50);
	stroke(255);

	// index 없는 for..of 구문 
	// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
	// index를 사용하지 않아도 어레이 등 반복 가능한 객체의 element들을 순차적으로 가져올 수 있습니다.

	// 같은 표현
	// for (var i = 0; i < current.length; i++) {
	// 	c = current[i];
	// }

	for (var c of current) {
		if (c == 'F') { // Foward
			// 반지름과 각도로 x, y 좌표를 구합니다.
			var new_x = x + (step_size * cos(angle));
			var new_y = y - (step_size * sin(angle));
			line(x, y, new_x, new_y);
			x = new_x; // 기준점 이동 x
			y = new_y; // 기준점 이동 y
		} else if (c == '-') { // Turn Left
			angle += theta;
		} else if (c == '+') { // Turn Right
			angle -= theta;

		// Bracket([, ]) 의 구현 
		// 이것으로 인해 한 지점에서 분기 되는 가지 모양을 그릴 수 있습니다. 
		// Array 의 push(), pop()
		} else if (c == '[') { // Save 
			s.push(x); 
			s.push(y); // stack 구조로, 먼저 입력 된 것이 가장 아래에 쌓여 있게 됩니다. 
			s.push(angle);
		} else if (c == ']') { // Restore
			 // 따라서 push()를 통해 입력한 결과를 pop()을 통해 꺼내 올때는 입력 순서의 역순이 되어야 합니다. 
			angle = s.pop();
			y = s.pop();
			x = s.pop();
		}

	}

}