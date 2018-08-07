/*********************** receive *************************/


( // receive
~osc_receive.free;
~osc_receive = OSCFunc({
	| msg, time, addr, recvPort |

	// post window에 표시 해보기
	("msg: " + msg).postln;
	// ("time: " + time).postln;
	// ("addr: " + addr).postln;
	// ("recvPort: " + recvPort).postln;


	// 이 부분을 소리와 연결 시키면 됩니다만..

	// msg[0].postln;
	msg[1].postln;
	// msg[2].postln;

	if (msg[1] == 1, {

		Synth(\deadOrAlive, [\freq, (40 + 12.rand).midicps, \amp, 0.3]);


	});

	if (msg[1] == 0, {
		Synth(\deadOrAlive, [\freq, (66 + 12.rand).midicps, \amp, 0.2]);

	}
	);

	if (msg[1] == 2, {
		msg[2].postln;
		// var panPos = msg[2]/700 - 1;
		// Synth(\deadOrAlive, [\freq, (86 + 4.rand).midicps, \amp, 0.2, \lr, msg[2]/700 - 1]);
		Synth(\bubble, [\freq, 50 + (900 - msg[3]), \amp, 0.2, \lr, msg[2]/700 - 1]);

	}
	);




}, '/dead');
)




/************************ send ************************/


~destAddr = NetAddr("127.0.0.1", 12000); // local machine, port 12000 (프로세싱에서 정한 포트 번호)

~destAddr.sendMsg("/test_from_sc", 808, 202, 909);




