class Bubble {

  /*
  
   <Class / instance>
   
   나름의 속성과 행동 방법을 가지는 '객체'를 만들고 있다고 상상(?)하며 프로그래밍 하는 것 - 객체지향프로그래밍(OOP)
   
   https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D
   
   실세계에는 존재하지 않는 객체를 상상해 보자.
   프로세싱의 세계에서 내가 가지고 싶은 객체.
   그것에 속성과 그것이 할 수 있는 행동을 부여한다면 무엇이 있을 수 있을까?
   이러한 상상을 바탕으로 객체를 설계할 수 있다.
   
   a) 클래스 정의: 속성과 행동이 정의된 객체의 설계도를 작성하는 것이다.
   생산될 객체가 주문자에 의해 얼만큼이나 커스터마이징 될 수 있을지 역서 설계 단계에서 정해진다.
   앞서 나왔던 명령과 아규먼트에 대해 생각해 보자.
   
   
   b) 객체로 만들어 사용하기 (instance를 만들어 내기)
   설계도를 작성한 후에는 진짜로 사용하기 위해 객체, 혹은 물건을 만들어 내야 하는데
   이 때 아규먼트를 통해 생산에 관한 세부적인 주문을 할 수 있다.
   컴퓨터는 설계도 + 주문서를 통한 결과물 메모리에 넣어, 당장 사용할 수 있게 만든다.
   우리가 만드는(프로세싱에서는 '그리는') 모든 것들은 결국 데이터이며 이것은 물리적인 메모리 공간을 차지하는 것이라고 상상할 수 있으면 좋겠다.
   
   + 객체는 무한히 많은 숫자가 될 수 있다.
   
   
   -----------------------------
   
   이름을 Bubble로 지었다. 관습적으로 class의 이름 시작은 대문자로 한다.
   
   고민할 것은 '어떤 속성과 행동 방법을 가지도록 할 것인가'
   
   
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


  
  // "그린다" 객체를 만들었으면 그려야 한다.
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