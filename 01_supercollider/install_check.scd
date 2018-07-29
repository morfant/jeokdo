안녕하세요 <가벼운 전자음악> 워크숍 참여자 여러분!
설치가 제대로 되었는지 확인하기 위해 아래의 명령들을 실행해 보세요.

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