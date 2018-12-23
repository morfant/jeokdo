/*********************** OSC receive *************************/


( // receive

~osc_receive.free; // 메모리에서 지운다

~osc_receive = OSCFunc(
	{
	| msg, time, addr, recvPort | // argument, 혹은 parameter 라고 부른다.


		// 프로세싱의 함수 형태와 비교
		// OSCFunc(msg, time, addr, recvPort) {
		//
		// 	println("msg: " + msg); // msg: hi
		//
		//
		// }

	// .postln 명령을 붙여 post window에 표시 해보기
	("msg: " + msg).postln;
	// ("time: " + time).postln;
	// ("addr: " + addr).postln;
	// ("recvPort: " + recvPort).postln;


	// 사운드와 연결

	// OSC 메시지가 어떤 형태로 들어오는지 파악해 보자.
	// 그리고 보내는 쪽의 형태와 비교해보자.


	// msg[0].postln;
	msg[1].postln;
	// msg[2].postln;


	// OSC를 사용하는 방법에 있어서의 작은 설계 : msg[1]의 역할 - 모드 구분
	if (msg[1] == 0, {
		Synth(\deadOrAlive, [\freq, (66 + 12.rand).midicps, \amp, 0.2]);
	});

	if (msg[1] == 1, {
		Synth(\deadOrAlive, [\freq, (40 + 12.rand).midicps, \amp, 0.3]);
	});

	if (msg[1] == 2, {
		msg[2].postln;
		Synth(\bubble, [\freq, 50 + (900 - msg[3]), \amp, 0.2, \lr, msg[2]/700 - 1]);
	});


}, '/dead'); // OSC 통신의 어드레스 패턴
)




/************************ OSC send ************************/


~destAddr = NetAddr("127.0.0.1", 12000);
// 127.0.0.1 = localhost = 내 컴퓨터, port 12000 (프로세싱에서 정한 포트 번호 확인)

~destAddr.sendMsg("/test_from_sc", 808, 202, 909); // 어드레스 패턴, msg1, msg2, msg3




