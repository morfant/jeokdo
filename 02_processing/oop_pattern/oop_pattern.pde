

/*
지금부터 익혀볼 개념들 역시 무척 생소할 수 있습니다.
따라서 처음부터 모든 것을 이해하려 하기보다
그 쓰임과 형태에 주목하며 천천히 익혀 봅시다.
중간중간 이전에 나온 개념들을 떠올려 봐도 좋구요.

<function>

a) 정의 하기
여러 명령들을 하나의 이름 아래 묶어 둔다.
후에 반복적으로 사용해야 할 때 정해둔 이름만 불러 사용하면 된다.


아래의 형태로 정의된다.
type function_name (type parameter1, type parameter2 ...)
{
  
  명령 1;
  명령 2;
  명령 3;
  .
  .
  .
  
}

* type은 앞서 나왔던 여러 타입 중 하나를 사용하면 된다.
정확하게는 함수를 처리한 결과를 해당 함수를 call 한 곳으로 돌려줄 때 그 값의 타입을 적는 것.
돌려줄 것이 없는 함수라면 'void' 라고 적으면 된다. 이는 함수의 return 값이 없다는 의미.

** function_name은 변수 이름을 지을 때처럼 마음대로, 그러나 기능을 연상할 수 있도록, 이왕이면 간결하게.

*** parameter는 없을 수도 있고 여럿 있을 수도 있다. 레퍼런스 페이지의 syntax-parameter를 떠올려 보자.
각 parameter 역시 type을 지정해 주어야 한다. 


b) 사용 하기

function_name(0, 200);

정의하기에서 정해준 함수 이름을 부르고, 정해진 파라메터 수와 타입을 지켜 넣어준다.




- loop
- array / arrayList
- class / instance

*/



boolean flag;

// Array(배열) : 짐칸이 여럿 달린 기차. 짐칸에 싣을 수 있는 물건의 타입이 정해져 있음. 짐칸의 갯수는 처음부터 고정.
Bubble[] bubbles = new Bubble[100];

void setup() {

  size(1400, 900); // canvas
  smooth();
  background(255, 255); // white
  flag = false;
  
  // for - loop : 정해진 범위 만큼을 반복한다.
  // for loop을 사용하는 형태와 의미에 대해서 파악하기.
  // 전체 프로그램의 흐름 안에서 보면 for loop은 어떻게 작동하는 걸까.
  for (int i = 0; i < bubbles.length; i++) {
    bubbles[i] = new Bubble(random(width), random(height) );
  }
  
}

void draw() { // loop

  if (!flag) {
    surface.setLocation(0, 0);
    flag = true;
  }


  // OOP적 객체로 만들고 싶은 모델이 있던 부분
  //float random_ = random(1.2, 5.3);
  //stroke(random_ * 40 * (random_%0.8) );
  //strokeWeight(random_ * 0.3);

  //noFill();
  //ellipse(width/2, height/2, width/random_, height/random_);
 
    
    
  for (int i = 0; i < bubbles.length; i++) {
    
    // Bubble의 method 이름의 의미를 생각하며 흐름을 파악해 보자.
    bubbles[i].isDead();
    
    if (bubbles[i].isAlive == true) {
      bubbles[i].floating();
    } else {
      bubbles[i].down();
    }
    
    //bubbles[i].floating();
    //bubbles[i].down();
    bubbles[i].draw();
  }
      
  
  
}
