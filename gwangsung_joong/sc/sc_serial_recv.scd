SerialPort.devices;

// port 열기 함수
(
f = { |portname|
		SerialPort.new(portname, 115200, crtscts: true);
}
)

// 함수 실행
p = f.("/dev/tty.usbmodem1422");

p; // 확인

// serial line에 있는 data를 하나 읽어 온다.
p.next;
p.read;


SerialPort.closeAll;


// serial read routine
(

// p = f.("/dev/tty.usbmodem1422");

r = Routine(
	{
    var byte;

    inf.do{ |i|
			byte = p.read;
			byte.postln;

			switch(byte,
				49, {
					Synth(\bufPlay, [buf: ~buf_3, rel: ~buf_3.numFrames/s.sampleRate/0.5, rate: 0.5, amp: 0.9]);
				},
				50, {
					Synth(\bufPlay, [buf: ~buf_1, rel: ~buf_1.numFrames/s.sampleRate/1, rate: 1, amp: 0.8]);
				},
				51, {
					Synth(\bufPlay, [buf: ~buf_0, rel: ~buf_0.numFrames/s.sampleRate/1, rate: 1, amp: 0.9]);
				},
				52, {
					Synth(\bufPlay, [buf: ~buf_5, rel: ~buf_5.numFrames/s.sampleRate/1, rate: 9, amp: 0.5]);

				}
			);

		0.08.wait; // !!보내는 간격보다는 촘촘해야 한다.!!
    };
}).play;

CmdPeriod.doOnce {
	"Routine stopped! && Serial close!!".postln;
	r.stop;p.close
});