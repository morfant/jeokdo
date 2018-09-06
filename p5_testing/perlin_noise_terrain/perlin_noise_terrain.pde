

int cols, rows;
int scl = 8;

int w = 1600;
int h = 1600;

float[][] terrain;

float flying = 0;

void setup() {

  size(1600, 600, P3D);


  cols = w / scl;
  rows = h / scl;
  terrain = new float[cols][rows];
  
}


void draw() {
  
  flying -= 0.13;
    
  float yoff = flying;
  for (int y = 0; y < rows; y++) {
    float xoff = 0;
    for (int x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  
  //println(yoff);

  
  background(0);
  stroke(255, 80, 100, 30);
  strokeWeight(6.0);
  
  noFill();
  //fill(255, 90);

  translate(width/2, height/2+150);
  rotateX(PI*0.24);
  translate(-w/2, -h/2);

  for (int y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (int x = 0; x < cols-1; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}
