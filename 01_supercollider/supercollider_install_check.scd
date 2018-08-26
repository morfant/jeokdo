설치가 제대로 되었는지 확인하기 위해 아래의 명령들을 실행해 보세요.

슈퍼콜라이더는 내부적으로 server라는 부분을 가지고 있습니다.
모든 명령들은 server에 의존하고 있으므로 우선 서버를 부팅해 주어야 합니다.

s.boot; // 중요!!! 커서를 여기(이 줄의 어디든)에 두고 cmd + enter
// 잠시 후, ==> 우측 하단의 숫자들이 하얀색에서 초록색으로 변하며 움직이기 시작하면 성공입니다.

{WhiteNoise.ar(0.5)!2}.play;
// 위의 줄 전체를 블록으로 선택
// -> 보통 텍스트 에디터에서 블록 선택하듯이 shift를 누른채로 방향키 이동

// --> 실행!!
// mac : cmd + enter
// windows : ctrl + enter

// ---> 실행 중지
// mac : cmd + .(마침표)
// windows : ctrl + .(마침표)

{SinOsc.ar(440, mul: 0.5)!2}.play;

{Saw.ar(400, mul: 0.5)!2}.play;

{Pulse.ar(300, mul: 0.5)!2}.play;

{SinOsc.ar(SinOsc.kr(2) * 300 + 500, mul: 0.5)!2}.play;