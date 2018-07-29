boolean flag;

void setup() {

  size(500, 500); // canvas
  smooth();
  background(255, 255); // white
  flag = false;
  
}

void draw() { // loop

  if (!flag) {
    surface.setLocation(0, 0);
    flag = true;
  }

  float random_ = random(1.2, 5.3);
  stroke(random_ * 40 * ((random_)%0.8) );
  strokeWeight(random_ * 0.3);

  noFill();
  ellipse(width/2, height/2, width/random_, height/random_);
  
  rectMode(CENTER);
  rect(width/2, height/2, 100, 100);
  
  
  
}
