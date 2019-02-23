var current;
var next = "";
var s = [];
var count = 0;
var textPosY = 0;
var n = 2; 

function setup() {

	createCanvas(900, 900);
	angleMode(DEGREES);

	background(50);
	stroke(255);
	noFill();

	// Axiom
	current = "F+F+F+F";

	// Rules
	for (var i = 0; i < n; i++) {
		for (var c of current) {
			if (c == "F") {
				next += "F+F-F-FF+F+F-F";
			} else {
				next += c;
			}
		}

		current = next;
		// print("Gen " + (i + 1) + " :" + current);
		next = "";
	}

}


function draw() {



	// 기준점 이동, 위 방향을 각도 0으로 하기 위한 조정
	translate(width / 2, height / 2);
	rotate(-90);

	// turtle graphics
	// https://en.wikipedia.org/wiki/Turtle_graphics
	var x = 0;
	var y = 0;
	var angle = 0;
	var angleStep = 90;
	var step_size = 10;


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
			angle += angleStep;
		} else if (c == '+') { // Turn Right
			angle -= angleStep;
		} else if (c == '[') { // Save 
			s.push(x); // Array 의 push(), pop()
			s.push(y);
			s.push(angle);
		} else if (c == ']') { // Restore
			angle = s.pop();
			y = s.pop();
			x = s.pop();
		}

	}

}