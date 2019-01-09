var pdf;
var margin = 10
// var w = 150 * 5 
var mul = 4 
var w = 92 * mul
var h = 52 * mul

function setup() {
    // createCanvas(wInMM*1.5, wInMM, SVG);
    // createCanvas(wInMM*1.5, wInMM);
    createCanvas(w, h, SVG);
    // createCanvas(792, 768);
    // createCanvas(3508, 2480, SVG);
    // createCanvas(windowWidth, windowHeight, SVG);
    // pdf = createPDF();
    // pdf.beginRecord();
    background(55)
  }
  
  function draw() {
  
    
    for (var i = 0; i < width; i += 6) {
        if (i > margin && i < width - margin) {
            for (var j = 0; j < height; j += 10) {
                if (j > margin/2 && j - margin < height) {
                stroke(map(j, 0, 400, 0, 255), 100, 100)
                strokeWeight(random(7))
                point(i, j)
            }
        }
    }
  
    }

    noLoop()
    // pdf.save()
    // save()
  
  }