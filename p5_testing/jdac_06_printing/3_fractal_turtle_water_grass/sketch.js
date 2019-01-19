var current = ['F', 'R', 'F']
// var current = [...'FRFRFRF'] var next = [] 
var count = 0
var posY = 20
var s = []

var pdf;

function setup() {
    
	createCanvas(900, 900, SVG);
	angleMode(DEGREES)

	background(50);
	stroke(255, 100);
	strokeWeight(0.5)
	noFill();

	for (let i = 0; i < 6; i++) {
		mouseClicked()
	}
    pdf = createPDF();
	pdf.beginRecord();
	noLoop()

}


function draw() {

	stroke("grey")
	strokeWeight(0.3)
	line(0, height/2, width, height/2)
	line(width/2, 0, width/2, height)

	var step_size = 6 
	var tx = width/2
	var ty = height
	var angle = 35.6 

	var ta = 108 

	if (count > 0) {
		// console.log(current)
		stroke(255, 192, 203, 80)
		strokeWeight(1)
		for (var c of current) {
			if (c == 'F') {
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y

			} else if (c == 'L') {
				var t = angle + angle * random(-1.9, 0.2)
				ta += t
			} else if (c == 'R') {
				var t = angle + angle * random(-0.2, 0.2)
				ta -= t 
			} else if (c == '[') {
				s.push(tx)
				s.push(ty)
				s.push(ta)
			} else if (c == ']') {
				ta = s.pop()
				ty = s.pop()
				tx = s.pop()
			} else {

			}


		}
	}

	pdf.save()

}

function mouseClicked() {

	next = []
	for (var c of current) {
		if (c == 'F') {
			next.push(...'F[LFFR]F[RFLF]')
		} else {
			next.push(c)
		}
	}

	current = next
	count++

}




function getResult() {
	mouseClicked()
}
	

