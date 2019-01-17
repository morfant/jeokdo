var current = [...'F1;']
var next = [] 
var count = 0
var posY = 20
var s = []

var c = 0 
var p = 0
var q = 0
var h = 0

function setup() {
    
	createCanvas(2000, 900);
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

	c = 1
	p = 0.3
	q = c - p
	h = pow((p * q), 0.5)
	h = round(h * 100)/100

}


function draw() {

	background(197, 42, 63, 0.5)
	// Angle in degrees
	var theta = 86 
	var step_size = width/2 
	var step_radius = 2000 
	var wind = 10

	// Initial theta, position
	var ta = 0
	var tx = 100 
	var ty = height - 100 
	var th = 0
	var th_step = 3
	var hue_max = 230
	var hue_min = 100

	// stroke(200, 100, 100)
	stroke(0, 0, 90)
	fill(count * 10, 100, 100)
	strokeWeight(1)

	if (current.length > 0) {
		// stroke(100, random(150), 150, 255 - (count * 20))
		// stroke("SteelBlue")
		// for (var c of current) {
		for (let i = 0; i < current.length; i++) {
			let c = current[i]
			let vx = 0
			if (c == 'F') {

				let val = [] 
				for (let j = 1; j < 10; j++){
					let v = current[i + j]
					if (v == ';') {
						break
					} else {
						val.push(v)
					}
				}
				vx = parseFloat(val.join(''))
				// console.log("vx: " + vx);

				var new_x = tx + vx * (step_size * cos(ta))
				var new_y = ty - vx * (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
			} else if (c == 'D') { // F+F
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
				line(tx, ty, new_x, new_y)
				tx = new_x
				ty = new_y
				ta += theta
				var new_x = tx + (step_size * cos(ta))
				var new_y = ty - (step_size * sin(ta))
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
				// console.log("+");
				ta += theta
				// console.log(ta);
				// ta += (theta + wind * noise(frameCount/20)) 
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
	// for (var c of current) {
	for (var i = 0; i < current.length; i++) {

		// let p = 0
		let c = current[i]
		// let n = current[i + 1]
		let x = 0

		// Rules
		if (c == 'F') {
			let val = [] 
			for (let j = 1; j < 10; j++){
				let v = current[i + j]
				if (v == ';') {
					break
				} else {
					val.push(v)
				}
			}
			x = parseFloat(val.join(''))
			// console.log("x: " + x)

			let a1 = x * p
			let a2 = x * h
			let a3 = x * h
			let a4 = x * q

			// console.log(a1, a2, a3, a4)
			
			next.push(..."F"+a1+";"+"+F"+a2+";--F"+a3+";+F"+a4+";")
		} else {
			next.push(c)
		}

		// if (i > 0) {
		// 	p = current[i - 1]
		// 	if (c == '0') {
		// 		if (p == '0' && n == '0') {
		// 			next.push('0')
		// 		} else if (p == '0' && n == '1') {
		// 			next.push(...'1[+F1F1]')
		// 		} else if (p == '1' && n == '0') {
		// 			next.push('0')
		// 		} else if (p == '1' && n == '1') {
		// 			next.push(...'1F1')
		// 		} else {
		// 			next.push('0')
		// 		}
		// 	} else if (c == '1') {
		// 		if (p == '0' && n == '0') {
		// 			next.push('1')
		// 		} else if (p == '0' && n == '1') {
		// 			next.push('1')
		// 		} else if (p == '1' && n == '0') {
		// 			next.push('0')
		// 		} else if (p == '1' && n == '1') {
		// 			next.push('0')
		// 		} else {
		// 			next.push('1')
		// 		}
		// 	} else if (c == '+') {
		// 		if (p == '*' && n == '*') {
		// 			next.push('-')
		// 		} else {
		// 			next.push('+')
		// 		}
		// 	} else if (c == '-') {
		// 		if (p == '*' && n == '*') {
		// 			next.push('+')
		// 		} else {
		// 			next.push('-')
		// 		}
		// 	} else {
		// 		next.push(c)
		// 	}
		// }

	}

	current = next
	// console.log(current)
	// console.log(current.join(''));
	// redraw()
	count++

	// console.log(Array.isArray(current))
}


