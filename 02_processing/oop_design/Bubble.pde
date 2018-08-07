class Bubble {


  // 속성(Property)

  float pos_x, pos_y;
  boolean isAlive = true;
  float howBig;
  float weight;
  float strokeBrightness = 100;
  float random_ = 1.0;



  // Constructor (생성자 - 설계도와 주문자가 만나는 부분. 설계도에 세부 주문을 넣는 방식을 결정한다.)
  // 실제 객체를 만들어 낼 때 어떻게 커스터마이징이 가능하도록 할 것인가.
  Bubble (float x, float y) {

    /* !!! 앞서 준비된 모든 속성들에 값이 정해져야 객체가 만들어 질 수 있다. !!! */
    pos_x = x;
    pos_y = y;
    howBig = 50;
    weight = 0.5;
  }


  // 행동 방법(Method) : 함수의 형태로

  void floating() {

    pos_y = pos_y - 1;
  }

  void down() {

    pos_y = pos_y + 1;
  }

  void isDead() {

    if (pos_y < 10) {
      isAlive = false;
    } else if (pos_y > (height - 10) ) {
      isAlive = true;
    }
  }


  // 함수로 만들기 복습
  void setBrightness() {

    random_ = random(1.2, 5.3);
    strokeBrightness = random_ * 40 * (random_%0.8);
    stroke(strokeBrightness);

    float strokeThickness = random_ * 0.3;
    strokeWeight(strokeThickness);
  }
  
  

  void draw() {

    setBrightness();

    noFill();

    ellipse(pos_x, pos_y, howBig/random_, howBig/random_);
  }
}
