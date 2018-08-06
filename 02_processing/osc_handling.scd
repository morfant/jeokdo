/*********************** receive *************************/


( // receive
~osc_receive.free;
~osc_receive = OSCFunc({
	| msg, time, addr, recvPort |

	// post window에 표시 해보기
	msg.postln;
	time.postln;
	addr.postln;
	recvPort.postln;

	("hello osc " + msg).postln; // '+' 연산자

	// 이 부분을 소리와 연결 시키면 됩니다만..

}, '/click'); // def style
)




/************************ send ************************/


~destAddr = NetAddr("127.0.0.1", 12000); // local machine, port 12000 (프로세싱에서 정한 포트 번호)

~destAddr.sendMsg("/test_from_sc", 808, 202, 909);




