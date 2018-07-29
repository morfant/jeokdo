class Bubble {

  /*
   프로세싱의 창 안을 떠다닐 객체를 설계한다.
   
   이름을 Bubble로 지었다. 
   관습적으로 class의 이름 시작은 대문자로 한다.
   
   고민할 것은 
   '어떤 속성과 행동 방법을 가지도록 할 것인가'
   
      
   어떤 '객체'를 만들고 있다고 상상하며 프로그래밍 하는 것 - 객체지향프로그래밍(OOP)
   
   https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D
   
   
   */


  // 어떤 속성과 행동 방법을 가지도록 할 것인가
  // 속성(Property)

  float pos_x, pos_y;
  boolean isAlive = true;
  float howBig;
  float weight;



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

  // 떠오르게 한다
  void floating() {

    pos_y = pos_y - 1;

    // 무게를 줄인다 ?
    weight = 0.1;

    // 떠오르면 크기가 커지는 건 어떨까?
  }

  // 가라앉게 한다
  void down() {

    pos_y = pos_y + 1;

    // 무게를 늘린다 ?
    weight = 1.0;
  }

  void isDead() {

    if (pos_y < 10) {
      isAlive = false;
    } else if (pos_y > (height - 10) ) {
      isAlive = true;
    }
  }


  // ------------------------
  // 그린다.
  // 객체를 만들었으면 그려야 한다.
  // 그리는 부분까지 앞서의 method 정의에 넣을 수도 있지만 분리하는 것이 여러모로 더 좋다.
  void draw() {

    float random_ = random(1.2, 5.3);
    stroke(random_ * 40 * (random_%0.8) );
    strokeWeight(random_ * 0.3);

    noFill();
    // 실제로 형태를 그리는 함수에 앞서 만든 속성 값을 어떻게 적용할 것인가?
    ellipse(pos_x, pos_y, howBig/random_, howBig/random_);
  }
}


// 여기까지의 결과물을 보고 객체 자체에 대해, 혹은 객체를 둘러싼 체계에 어떤 변화를 더 줄 수 있을지 상상해보고, 가능한 아이디어를 적용해 보기!!
