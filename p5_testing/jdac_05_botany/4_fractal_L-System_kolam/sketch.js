// var current = [...'X']
// var current = [...'AAAA']
// var current = [...'f + Xf + f + Xf']
var current = [...'X']
var axiom = current
var next = []
var count = 0
var s = []

var D = 0
var R = 0
var slider
var col = 0

function setup() {

	createCanvas(1000, 1000);
	angleMode(DEGREES)
	colorMode(HSB)

	var n = 5 

	for (let i = 0; i < n; i++) {
		getResult()
	}
	console.log(current.join(''));
	noLoop()
}


function draw() {

	// background(197, 42, 63, 0.5)
	background(0)

	// Angle in degrees
	var theta = 45 
	var step_size = 10 
	var step_radius = 5 

	// Initial theta, position
	var ta = 90
	var tx = width/2
	var ty = height/2
	var th_step = 10 
	var hue_max = 360 
	var hue_min = 40
	var th = hue_min 
	col = th

	// stroke(200, 100, 100)
	stroke(0, 0, 90)
	fill(count * 10, 100, 100)
	strokeWeight(1)

	if (current.length > 0) {
		// stroke(100, random(150), 150, 255 - (count * 20))
		// stroke("SteelBlue")
		for (let i = 0; i < current.length; i++) {
			let c = current[i]
			let vx = 0
			if (c == 'F') {
				stroke(col, 80, 90)
				strokeWeight(1)
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'f') {
				stroke(col, 80, 90)
				strokeWeight(1)
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				// console.log(tx);
				// console.log(ty);
				// console.log(new_x);
				// console.log(new_y);
				// console.log(ta);
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y

			} else if (c == 'D') { // F+F

				let c = current[i]
				let vx = 0
				let val = []
				for (let j = 1; j < 10; j++) {
					let v = current[i + j]
					if (v == ';') {
						break
					} else {
						val.push(v)
					}
				}
				vx = parseFloat(val.join(''))
				// console.log("vx: " + vx);


				var new_x = tx + vx* (step_size * cos(ta))
				var new_y = ty - vx* (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
				ta += theta
				var new_x = tx + vx * (step_size * cos(ta))
				var new_y = ty - vx * (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y

			} else if (c == 'G') { // F-F
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
				ta -= theta
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'f') {
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				tx = new_x
				ty = new_y
			} else if (c == '+') { // left
				ta += theta
			} else if (c == '-') { // right
				// console.log("-");
				ta -= theta
				// ta -= (theta + (1 - noise(frameCount/20))) 
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
				fill(100, 100, 100)
				ellipse(tx, ty, step_radius)
			} else if (c == 'H') {
				th += th_step
				if (th > hue_max) {
					th = th - (hue_max - hue_min)
				}
				fill(th, 100, 100, 0.2)
				col = th
			}
		}
	}
}

function getResult() {
	next = []
	for (var i = 0; i < current.length; i++) {

		let c = current[i]
		let x = 0

		// Rules
		if (c == 'F') {
			let val = []
			for (let j = 1; j < 10; j++) {
				let v = current[i + j]
				if (v == ';') {
					break
				} else {
					val.push(v)
				}
			}
			x = parseFloat(val.join(''))
			if (isNaN(x) === false) {
				var t = x * R
				next.push(..."F"+t+";")
			} else {
				next.push(c)
			}
		} else if (c == "A") {
			next.push(..."X+X+X+X+X+X+")
		} else if (c === 'X') {
			// next.push(..."[-F+F[Y]+F][+F-F[X]-F]")
			// next.push(..."[F+F+F+F[---X-HY]+++++F++++++++F-F-F-F]")
			// next.push(..."Xf − f − f + Xf + f + Xf − f − f + X")
			next.push(..."XfX--XfX")
		} else if (c === 'Y') {
			// next.push(..."[-F+F[Y]+F][+F-F-F]")
			next.push(..."[F+F+F+F[---Y]+++++F++++++++F-F-F-F]")
		}

		 else if ('0123456789'.indexOf(c) === -1) {
			// if (c !== ";") {
				// console.log("not number")
				// console.log(c)
				next.push(c)
			// }
		}
	}

	current = next
	// console.log(current)
	// console.log(current.join(''))
	// count++

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		current = axiom
		next = []
	}
}