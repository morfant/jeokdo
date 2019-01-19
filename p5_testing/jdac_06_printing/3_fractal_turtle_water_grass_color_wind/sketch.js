var current = [...'F[LF]F[RF]']
var next = [] 
var count = 0
var posY = 20
var s = []
var pdf

function setup() {
    
	createCanvas(900, 1200, SVG);
	angleMode(DEGREES)
	colorMode(HSB)

    pdf = createPDF();
	pdf.beginRecord();

	// background(255);
	// stroke(255, 100);
	// strokeWeight(1)
	// noFill();


	// stroke("grey")
	// strokeWeight(0.3)
	// line(0, height/2, width, height/2)
	// line(width/2, 0, width/2, height)

	for (let i = 0; i < 5; i++) {
		mouseClicked()	
	}

	noLoop()

}


function draw() {

	background(0, 0, 100)

	// Angle in degrees
	var angle = 20 
	var step_size = 10 
	var step_radius = 7 
	var wind = 10

	// Initial angle, position
	var ta = 90 
	var tx = width/2 
	var ty = height
	var th = 0

	fill(60, 15, 100, 0.1)
	strokeWeight(0.3)
	for (var k = 0; k < 10; k++) {
		ellipse(100 + noise(k) * 30, 230 + noise(k/10) * 22, 80 * random(0.9, 1.1), 80 * random(0.9, 1.1))
	}

	if (current.length > 0) {
		// stroke(100, random(150), 150, 255 - (count * 20))
		// stroke("SteelBlue")
		for (var c of current) {
			if (c == 'F') {
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				stroke(0, 100, 0, 0.3)
				strokeWeight(1)
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'L') {
				// ta += (angle + wind * noise(frameCount/20)) 
				ta += angle
			} else if (c == 'R') {
				ta -= angle
				// ta -= (angle + (1 - noise(frameCount/20))) 
			} else if (c == '[') {
				s.push(tx)
				s.push(ty)
				s.push(ta)
			} else if (c == ']') {
				ta = s.pop()
				ty = s.pop()
				tx = s.pop()
			} else if (c == 'C') {
				noStroke()
				ellipse(tx, ty, step_radius * random(1.5), step_radius * random(1.2))
			} else if (c == 'H') {
				th = (th + 0.06) % 90
				fill(270 + th, 50 + th/2, 50 + th/3, 0.6)
			}
		}
	}


	pdf.save()

}

function mouseClicked() {

	next = []
	for (var c of current) {
		// Rules
		if (c == 'F') {
			next.push(...'F[HRF]F[LFC]')
		} else {
			next.push(c)
		}
	}

	current = next
	// console.log(current.join(''));
	count++
}


