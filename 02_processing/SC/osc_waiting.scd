/************************ OSC send ************************/

(

~destAddr_0 = NetAddr("127.0.0.1", 12000); // ip 주소 확인 후 변경
~destAddr_1 = NetAddr("127.0.0.1", 12000);
~destAddr_2 = NetAddr("127.0.0.1", 12000);
~destAddr_3 = NetAddr("127.0.0.1", 12000);



~osc_receive_from_all.free;

~osc_receive_from_all = OSCFunc({
	| msg, time, addr, recvPort |

	("msg: " + msg).postln;
	("time: " + time).postln;
	("addr: " + addr).postln;
	("recvPort: " + recvPort).postln;


	// 사운드와 연결
	// 어떻게?

	/*
	이미지의 parameter === OSC ===> 사운드의 parameter

	로 직관적인 연결이 가능하다.
	*/


	// msg[0].postln;
	msg[1].postln;
	// msg[2].postln;


	// OSC를 사용하는 방법에 있어서의 작은 설계 : msg[1]의 역할 - 보내는 사람의 구분
	if (msg[1] == 0, {
		Synth(\bubble, [\freq, (900 - msg[3]) * 1, \amp, 0.2, \lr, msg[2]/700 - 1]);

		// osc 신호 보내기
		~destAddr_0.sendMsg("/response_from_sc", "hi", 808, 202, 909);

	});

	if (msg[1] == 1, {
		Synth(\bubble, [\freq, (900 - msg[3]) * 4, \amp, 0.2, \lr, msg[2]/700 - 1]);

		~destAddr_1.sendMsg("/response_from_sc", "hello", 808, 202, 909);

	});

	if (msg[1] == 2, {
		Synth(\bubble, [\freq, (900 - msg[3]) * 8, \amp, 0.2, \lr, msg[2]/700 - 1]);
		~destAddr_2.sendMsg("/response_from_sc", "im", 808, 202, 909);

	});

	if (msg[1] == 3, {
		Synth(\bubble, [\freq, (900 - msg[3]) * 16, \amp, 0.2, \lr, msg[2]/700 - 1]);
		~destAddr_3.sendMsg("/response_from_sc", "sc", 808, 202, 909);

	});



}, '/sc_is_waiting_you'); // 어드레스 패턴 확인
)