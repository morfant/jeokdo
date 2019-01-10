// var current = [...'F']
// var current = [...'F[LLF]FR[RF]']
var current = [...'FRFRFRFR]']
// var current = [...'FRFRFRF']
var next = [] 
var count = 0
var posY = 20
var s = []

function setup() {
    
	createCanvas(900, 1200);
	angleMode(DEGREES)
	colorMode(HSB)

	background(255);
	stroke(255, 100);
	strokeWeight(0.5)
	noFill();


	stroke("grey")
	strokeWeight(0.3)
	line(0, height/2, width, height/2)
	line(width/2, 0, width/2, height)

	// noLoop()

}


function draw() {

	background(255)
	// Angle in degrees
	var angle = 120 
	var step_size = 10
	var step_radius = 10 
	var wind = 10

	// Initial angle, position
	var ta = 0
	var tx = width/2 
	var ty = height
	var th = 0
	var th_step = 3
	var hue_max = 230
	var hue_min = 100

	stroke(0, 100, 100, 0.1)
	fill(th, 100, 100, 0.1)
	strokeWeight(1)

	if (current.length > 0) {
		// stroke(100, random(150), 150, 255 - (count * 20))
		// stroke("SteelBlue")
		for (var c of current) {
			if (c == 'F') {
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'L') {
				ta += angle
				// ta += (angle + wind * noise(frameCount/20)) 
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
				ellipse(tx, ty, step_radius)
			} else if (c == 'H') {
				th += th_step
				if (th > hue_max) {
					th = th - (hue_max - hue_min)
				}
				fill(th, 100, 100, 0.5)
			}
		}
	}



}

function mouseClicked() {

	next = []
	for (var c of current) {
		// Rules
		if (c == 'F') {
			// next.push('R', 'F', 'L', 'F')
			// next.push('F', '[', 'L', 'F', ']', 'F', '[', 'R', 'F', ']')
			// next.push(...'F[LF]F[RF]')
			// next.push(...'FRFLFLFFRFRFLF')
			// next.push(...'FLFFRFFRFRFLFLFFRFRFLFLFFLFFRF')
			// next.push(...'F[LLF]F') 
			// next.push(...'F[HRF]F[LFC]')
			next.push(...'F[HLF]FC')
			

		} else {
			next.push(c)
		}
	}

	current = next
	// redraw()
	count++

	// console.log(Array.isArray(current))
}


