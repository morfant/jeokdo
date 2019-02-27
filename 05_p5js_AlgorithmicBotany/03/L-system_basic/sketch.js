/*
https://en.wikipedia.org/wiki/L-system#Examples_of_L-systems
Alphabet(variables) : 사용되는 모든 문자들 
Axiom : 첫 시작 문자 
Rules : 각 문자들이 다음 세대에서 어떻게 변할 것인가를 정의 
Constants : 변하지 않는 상수 
*/

var current;
var next = "";
var count = 0;
var textPosY = 0;

function setup() {
	createCanvas(1920, 400);
	background(200);

	// Axiom
	current = "A";
}

function draw() {
}

// Rules
function mouseClicked() {
	for (var i = 0; i < current.length; i++) {
		var c = current[i];
		if (c == 'A') {
			next+="AB"; // 문자열 더하기 : 문자열의 뒤에 새로운 문자를 덧붙입니다.
		} else if (c == 'B') {
			next+="A";
		}
	}

	current = next;
	next = "";

	count++; // count generation
	textPosY = textPosY + 20;
	console.log("Generation " + count + ": " + current);
	// canvas의 특정 위치에 텍스트 표시 
	text("Generation " + count + ": " + current, 0, textPosY);
}


