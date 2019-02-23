/*
https://en.wikipedia.org/wiki/L-system#Examples_of_L-systems
Alphabet(variables)
Axiom
Rules
Constants
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
			next+="AB"; // 문자열의 뒤에 새로운 문자를 덧붙인다.
		} else if (c == 'B') {
			next+="A";
		}
	}

	current = next;
	next = "";

	count++; // count generation
	textPosY = textPosY + 20;
	console.log("Generation " + count + ": " + current);
	text("Generation " + count + ": " + current, 0, textPosY);
}


