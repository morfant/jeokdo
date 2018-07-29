/*

'코딩' 이 뭔지 감을 잡아 봅시다.
코딩에 대한 기본적인 사항들을 직관과 느낌을 동원해 이해하려고 해 봅시다.
귀납적으로 납득하고 사용하면서 몸에 익히는 것처럼.

*/



// 실행과 중지의 연습 : 마우스로 키보드로

// 줄을 끝낼때는 ';' (세미콜론)을 잊지 말아요 - 이게 없으면 컴퓨터는 줄이 끝났다는 것을 알 방법이 없음

// 열린 괄호는 반드시 닫혀야 한다.
// 괄호_1 안에 괄호_2 안의 괄호_3 ... 괄호_3 닫고, 괄호_2 닫고, 괄호_1 닫기.

// 대소문자를 구분해서 사용한다. ex) size 와 Size는 명확히 다르다.



// void setup()이 시작되기 전, 변수를 선언하는 곳.
// 여기에 쓰면 코드의 어느 곳에서든 알아볼 수 있어요. 그래서 전역(global)이라고 부릅니다.
boolean flag;
/*
변수 => 주머니
타입 => 타입(?)

boolean 타입의 flag 라는 이름의 변수를 만듦. 미리 만들어야 쓸 수 있어요.
boolean 타입으로 정했기 때문에 나중에 쓸때도 boolean 타입의 값만 넣을 수 있습니다.

타입 참고
https://cs.fit.edu/~ryan/java/language/java-data.html



이름은 만드는 사람 마음대로. 하지만 asdf 이런 식으로 만들면 후에 이걸 왜 만들었는지 알기 어렵다.
보통 프로그램 상에서의 역할을 연상시킬 만한 이름을 짓는다. 넘 길지 않게.
ex) float speed; boolean isRed; int ballCount;
이어지는 단어에 띄어쓰기 없이 첫글자를 대문자로 표시하는 방식을 많이 사용.(camel-case) 

*/



void setup() { // not loop. 실행하면 딱 한 번만 수행되는 영역

  size(500, 500); // canvas를 만듭니다. x 축으로 500픽셀, y 축으로 500픽셀 길이로.
  background(255, 255, 255, 255); // canvas의 배경 색 지정 : (R, G, B, Alpha)
  flag = false; // 변수에 값 넣기. boolean은 참(true)/거짓(false) 값만을 가질 수 있다. 앞서 만든 flag라는  
  
}



void draw() { // loop. 실행하면 프레임당 한 번 씩 계속해서 수행되는 영역. 그래서 움직이는 그림을 만들 수 있죠.


  // 프로그래밍 언어도 사람이 사용하기 위해 만든 것이어서 쓸 수는 없어도 읽어 뜻을 예측할 수 있는 경우는 많음. 아래는? 
  if (!flag) { // 프로그래밍에서 '!' = not
    surface.setLocation(0, 0);
    flag = true; // 변수에 값 넣기. 이번엔 true를.
  }


  // 명령어에 대한 reference 보기 연습.
  // 해당 명령어 우클릭 -> find in reference...
  // syntax과 parameter(=argument)의 구분
  float random_ = random(1.2, 5.3); 
  
  
  // 나왔다 괄호 안의 괄호
  // +, -, *, /, %
  // 괄호로 묶었을 때의 실행 순서 변화는 수학 문제를 풀 때와 똑같다.
  // %는 뭐죠?
  // 아래 명령을 해석해 봅시다.
  stroke(random_ * 40 * (random_ % 0.8) );
  
  strokeWeight(random_ * 0.3);

  noFill(); // fill() / noFill()
  ellipse(width/2, height/2, width/random_, height/random_);
  
  // 기본 도형 그리기
  // https://processing.org/examples/shapeprimitives.html
  
  // 퀴즈 : 위의 동그라미(ellipse)를 다른 도형으로 바꾸어 보세요.
  // 퀴즈2 : 위의 stroke() 문에 r, g, b, alpla 를 적용해 보세요.
  // 아무거나 마음대로 그려보세요. 원하는 것이 있는데 어떻게 해야 할지 모르는 것을 질문해 주셔도 좋습니다.
   
  
}
