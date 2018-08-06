<슈콜(sc) 딱 두가지만 배워서 만드는 가벼운 전자음악>


두 번째 시간 - 소리만들기(Synth)



--------------------------------------------------------------------------------
#0 지난 시간의 복습 및 질문
--------------------------------------------------------------------------------

- 혹시 혼자 실습하며 안되거나 어려웠던 점?

- 미분음의 사용 : 1음을 미세하게 분할 - 1/4, 1/8 ...

- 패턴에 있어서 4박자의 느낌, 3박자의 느낌을 주는 방법 - delta의 합을 4의 배수, 혹은 3의 배수로 만든다

(
~mel = Pdef(\seq_mel,
	Pbind(
		\instrument, \gobeat,
		// \freq, Pseq([ 52, 54, 56, 57, 56, 54, 56 ], inf).midicps,
		\freq, Pseq([ 52, 54, 56, 57, 56, 54, (55 + 0.5) ], inf).midicps, // 미분음의 사용. 랜덤한 느낌을 주고 싶다면?
		\dur, Pseq([0.75, 0.25, 0.75, 0.25, 0.5, 0.5, 1]*0.1, inf),
		\delta, Pseq([0.75, 0.25, 0.75, 0.25, 0.5, 0.5, 1], inf), // 합이 4의 배수 -> 3의 배수로 바꾸면?
		\amp, Pseq([0.3, 0.2, 0.3, 0.2, 0.3, 0.3, 0.31], inf)
	)
).play;
)


--------------------------------------------------------------------------------
#1 SynthDef(소리 = 악기) 분석
--------------------------------------------------------------------------------

sc에서 소리를 SynthDef의 형태로 정의한다. 첫 시간에 사용했던 소리도 SynthDef.

(
SynthDef(\gobeat, {|freq = 240, dur = 0.2, gate = 1, amp = 0.5|
	var env = EnvGen.kr(Env.perc(0.01, dur), gate, doneAction: 2);
	var sig = SinOsc.ar(freq, 0, env);
	Out.ar(0, Pan2.ar(sig)*amp);
}).add;
)

을 보기 편하게 풀어서 쓰면 아래와 같다.


( // 첫 시간의 팁 - 영역 선택이 쉽도록 역활 없는 괄호를 추가할 수 있다.
// 형태를 익히자

SynthDef( // 이제부터 SynthDef를 만들겠다
	\gobeat, // SynthDef의 이름. 'gobeat', "gobeat" 도 가능

	{ // { 열고,

		| // '|' 열고
		    freq = 240, dur = 0.2, gate = 1, amp = 0.5

		/*
		'아규먼트'라고 부름. SynthDef안에서 사용되는 변수라고 생각하면 됨.
		이후로 'freq'를 사용하면 미리 정의된 240을 사용하는 것과 같게 된다.
		이 '아규먼트'들은 소리가 나고 있는 동안에도 자유롭게 변경될 수 있다. ==> 소리를 다룰 수 있는 자유도가 높아진다.
		즉 이후에 SynthDef 자체를 변경하지 않고도 소리를 변형하기 위한 지점을 미리 만드는 것이라고 생각할 수 있음.
		*/

		| // '|' 닫고 (모양이 같아서 @.@)

		var env = EnvGen.kr(Env.perc(0.01, dur), gate, doneAction: 2); // var(=variable, 로컬 변수 선언시 지켜야만 하는 규칙)

		var sig = SinOsc.ar(freq, 0, env); // 역시 var 선언. 그 안의 구체적 내용은 아래에서 설명.

		Out.ar(0, Pan2.ar(sig)*amp); // SynthDef를 만들때 반드시 필요! 소리가 출력(Out)되는 라인을 달아주는 것.

	} // } 닫고

).add; // 여기까지 정의한 SynthDef를 sc가 사용할 수 있게 서버에 추가한다. (sc는 'client - server' 구조)


)


/***************************************************************
우리의 목표

처음부터 만들지 않아도 됨. 기존의 것을 변형해서 사용할 수 있다면 충분!
***************************************************************/


SynthDef의 기본 구조

(
SynthDef(
	이름,
	{
		| 아규먼트들 |

		필요한 소리 요소들 1
		필요한 소리 요소들 2
		필요한 소리 요소들 3
		.
		.
		.

		Out.ar(0, Pan2.ar(내보내려는 소리))

	}

).add;
)



--------------------------------------------------------------------------------
#2 SynthDef를 구성하는 요소들 - 본격적으로 소리를 들어볼까요. FreqScope, scope, levelmeter 준비
--------------------------------------------------------------------------------

a. 기본적인 소리들 - 복잡한 소리를 만들기 위한 작은 부품(모듈)들이라고 생각합시다
{SinOsc.ar(440, mul: 0.2)!2}.scope;
{Saw.ar(440, mul: 0.2)!2}.play;
{Pulse.ar(200, mul: 0.2)!2}.play;
{PinkNoise.ar(0.2)!2}.play;

이밖에도 sc에는 수많은 소리들이 있음.
헬프파일 -> Search 탭, 'Tour of UGens'를 같이 한 번 찾아보자.


b. 엔벨롭 - 시간에 따른 음량의 변화 그래프?

Env.linen().plot;
Env.perc().plot;
Env.adsr().plot; // a = Attack Time, d = Decay Time, s = Sustain Level, r = Release Time

// non-sustained envelope
{WhiteNoise.ar(mul: 0.2)*EnvGen.kr(Env.linen(), doneAction: 2)!2}.play;
{WhiteNoise.ar(mul: 0.2)*EnvGen.kr(Env.perc(), doneAction: 2)!2}.play;

// sustained envelope
// 끝내지 않으면 계속 이어짐.
// 이런 Evn의 경우 아규먼트로 'sustain level'을 가지고 있는 경우가 많음.
{WhiteNoise.ar(mul: 0.2)*EnvGen.kr(Env.adsr(), doneAction: Done.freeSelf)!2}.play;


EnvGen 과 Env
---------------------------------------------
EnvGen은 Env라는 테잎을 넣고 작동하는 테잎 플레이어?
Env만 가지고는 Env에 담긴 내용을 사용할 수 없다.
그리고 EnvGen은 Env에 담긴 내용을 늘리거나 줄이거나 하는 식의 변형을 줄 수 있게 한다.
마치 테잎을 느리게/빠르게, 정방향/역방향 재생하는 기능처럼.
---------------------------------------------


어느자리에 어떤 아규먼트가 들어가야 하는지를 찾는 방법
: ***** 도움말 문서을 참고하는 방법을 알아봅시다 *****


EnvGen 도움말 문서 살펴보기 - gate와 doneAction
gate: 1 - open / 0 - close
doneAction: 소리가 끝났을 때의 처리 방법에 대한 정의.
소리가 끝났음에도 메모리상에 그것이 사용한 자원이 남아 있을 수 있다. => 컴퓨팅적인 비효율
이러한 경우를 막기 위한 장치. 보통은 doneAction: 2 / Done.freeSelf 를 사용하면 된다.


Env 도움말 문서 살펴보기
여러 가지 종류의 envelope 모양들이 준비되어 있다.



c. Panning - 스테레오일 경우, left/right 소리의 비율, 소리의 방향성
sc는 2채널(스테레오) 이상의 멀티채널에 대한 Panning도 지원하나, 우리의 목표 범위 바깥.

Pan2.ar(signal, pos: -1 ~ 1, level: 0.0 ~ 1.0);
pos: -1 은 왼쪽, 1 은 오른쪽을 나타냄



--------------------------------------------------------------------------------
#3 SynthDef로 소리내기(SynthDef -> Synth) : SynthDef 와 Synth는 다르다
--------------------------------------------------------------------------------

SynthDef가 소리에 대한 설계도라면 그것으로부터 만들어지는 Synth는 소리 그 자체이다.


(
SynthDef("gobeat", {|freq = 240, dur = 0.2, gate = 1, amp = 0.5|
	var env = EnvGen.kr(Env.perc(0.01, dur), gate, doneAction: 2);
	var sig = SinOsc.ar(freq, 0, env);
	Out.ar(0, Pan2.ar(sig)*amp);
}).add;
) // 실행 후 Post window 확인


~s1 = Synth(\gobeat);  // 실행 후 Post window 확인
~s1 = Synth(\gobeat, ['freq', 600]); // 아규먼트(argument)에 변화 주기
~s1 = Synth(\gobeat, ["freq", 200, \amp, 0.2]); // 여러 아규먼트(argument)에 변화 주기


어떤 아규먼트가 'dur'라는 이름을 가진다고 할 때,
"dur", 'dur', \dur 모두 사용가능하다. SynthDef의 이름 역시 "gobeat", 'gobeat', \gobeat 모두 허용된다.




--------------------------------------------------------------------------------
#4 SynthDef 변형하기 + 퀴즈
--------------------------------------------------------------------------------

단발적인 소리 -> 지속되는 소리

퀴즈
아래의 SynthDef의 Env를 Env.adsr로 바꾸어 봅시다.

(
SynthDef("gobeat", {|freq = 240, atk = 0.2, dec = 1, rel = 5, gate = 1, amp = 0.5|
	var env = EnvGen.kr(Env.perc(0.01, 0.2), gate, doneAction: 2);
	var sig = SinOsc.ar(freq, 0, env);
	Out.ar(0, Pan2.ar(sig)*amp);
}).add;
) // 실행 후 Post window 확인

~s = Synth(\gobeat);
~s = Synth(\gobeat, [\atk, 2, \dec, 0.1, \rel, 10]); // 아규먼트와 함께 실행하기
~s.release();
~s.release(2);
~s.free;



소리가 나고 있는 것에 변화주기(set)
~s.set(\freq, 400);
~s.set(\amp, 0.1);
~s.set(\freq, 200, \amp, 0.5); // 여러 개의 아규먼트를 동시에 제어 가능
~s.release();



***** 소리 바꾸기 *****
(
SynthDef("gobeat_saw", {|freq = 140, atk = 0.2, sus = 1, rel = 5, gate = 1, amp = 0.5|
	var env = EnvGen.kr(Env.linen(atk, sus, rel), gate, doneAction: 2);
	var sig = Saw.ar(freq);
	Out.ar(0, Pan2.ar(sig * env) * amp);
}).add;
) // 실행 후 Post window 확인


퀴즈
gobeat_pulse, gobeat_noise 중에 하나를 만들어 소리내 봅시다!


~saw1 = Synth(\gobeat_saw, [\freq, 100]);~saw2 = Synth(\gobeat_saw, [\freq, 330]);
~saw1 = Synth(\gobeat_saw, [\freq, 40.midicps]);~saw2 = Synth(\gobeat_saw, [\freq, 44.midicps]);
~saw1 = Synth(\gobeat_saw, [\freq, 43.midicps]);~saw2 = Synth(\gobeat_saw, [\freq, 47.midicps]);
수동으로 번갈아 가면서 실행해보기 ------> 이걸 자동화 하고 싶으면? 어제 배웠던 Pseq에 적용!!!
~saw1 = Synth(\gobeat_saw, [\freq, 42.midicps]);~saw2 = Synth(\gobeat_saw, [\freq, 45.midicps]);




--------------------------------------------------------------------------------
#5 패턴에 적용하기
--------------------------------------------------------------------------------

직접 이름 붙인 아규먼트에 대한 시퀀스 변화 주기

(
~saw_bass = Pdef(\seq_saw_bass,
	Pbind(
		\instrument, \gobeat_saw,
		\freq, Pseq([
			Pseq([ #[40, 44], #[43, 47] ], 2).midicps,
			Pseq([ #[42, 45], #[40, 44]], 1).midicps,
		], inf),
		\sus, Pseq([4, 4, 4, 4]*0.7, inf), // 직접 이름 붙인 아규먼트 'sus'
		\rel, Pseq([4]*0.3, inf), // 직접 이름 붙인 아규먼트 'rel'
		\delta, Pseq([4, 4, 4, 4], inf),
		\amp, Pseq([0.3, 0.4], inf)
	)
).play;
)


어제 공부했던 \dur는 기본적으로 sc에서 지원하는 아규먼트이긴 하나 SynthDef의 정의에 따라 적용되는 경우도 있고 그렇지 않은 경우도 있다. 확실하게 하려면 위의 예제 처럼 직접 envelope의 요소를 제어하는 것이 좋다.


* 패턴에 SynthDef만 바꿔 보기
** 패턴과 소리를 바꿔가며 음악을 만들어 봅시다!


--------------------------------------------------------------------------------
#6 소리를 만드는 좀 더 복잡한 방법
--------------------------------------------------------------------------------

앞서 배운 소리의 작은 부품들을 *, +, -, / 등으로 연결할 수 있다.
Sin, Saw, Pulse, Noise 등은 모두 수학에서 보는 그래프와 같은 것이기 때문에
서로 수학적 연산이 가능하고 이를 통해 다양한 소리들이 만들어 질 수 있다.
이를 위해서는 소리나는 부품들의 도움말 문서를 통해 아규먼트에 들어가는 값의 범위를 알아낼 수 있어야 하고
또 그 결과로 나오는 값이 어느 정도 범위에 들어가는지 알 수 있어야 한다.

sc에는 수많은 소리 부품(UGen, Unit Generator라고 부름)들이 있고
수학적 연산에는 어떤 숫자든 입력 될 수 있기 때문에
우리가 들을 수 없는 소리, 들으면 귀가 상할 만큼 위험한(?) 소리, 스피커를 고장나게 할 만큼 충격적인 소리 등도 만들어 질 수 있다.
따라서 새로운 소리를 실험하고 만들어 내는 과정에서는 이어폰이나 헤드폰을 착용하지 말고
조금은 망가져도 좋은 스피커를 통해 진행하는 것을 추천!
잘 모르는 Ugen일수록 값을 조금씩 점진적으로 바꾸어 보는 것이 좋은 방법일 듯!!



(
SynthDef("gobeat_com", {
	|freq = 140, atk = 0.2, sus = 1, rel = 5, gate = 1, amp = 0.5|
	// var env = EnvGen.kr(Env.linen(atk, sus, rel), gate, doneAction: 2);
	var env = EnvGen.kr(Env.asr(), gate, doneAction: 2);
	var sig_1 = Saw.ar(freq);
	var sig_2 = PinkNoise.ar(0.3);
	Out.ar(0, Pan2.ar(sig_1 * sig_2 * env) * amp);
}).add;
)

a = Synth(\gobeat_com);

(
SynthDef("gobeat_com_2", {
	|freq = 200, atk = 0.2, sus = 1, rel = 5, gate = 1, amp = 0.8, pulse_freq = 4, sin_freq = 3|
	// var env = EnvGen.kr(Env.linen(atk, sus, rel), gate, doneAction: 2);
	var env = EnvGen.kr(Env.asr(), gate, doneAction: 2);
	var sig_1 = Saw.ar(SinOsc.kr(sin_freq)*freq*2/3 + freq);
	var sig_2 = PinkNoise.ar(amp/2 + LFPulse.kr(pulse_freq)*0.1);
	Out.ar(0, Pan2.ar(sig_1 * sig_2 * env) * amp);
}).add;
)

b = Synth(\gobeat_com_2, [\amp, 1.0]);
b.set(\freq, 300, \sin_freq, 3, \pulse_freq, 8, \amp, 1.9);




--------------------------------------------------------------------------------
#7 혼자서 공부하기 등
--------------------------------------------------------------------------------

startup file 공유 : startup file에 적혀있는 명령들은 sc를 실행할 때 자동으로 수행됩니다.
예를들면 server 부팅이나 FreqScope, meter 등을 띄워 주는 일 등.
아래 링크를 통해 제가 현재 쓰고 있는 startup.scd 파일을 받으실 수 있고
이 내용을 file->open startup 후에 열리는 파일에 붙여 넣고 저장하시면 됩니다.
https://drive.google.com/open?id=1CdRBMQBRDSOeCtiNnw49r3w6NQ7l0YCz

언제나 도움말 문서를 참고 하세요
구글링 - 생각보다 잘 안나올 수 있고, 어떤 질문을 해야 하는지 알기 어려울 수 있음

소리를 바꾸는 것으로 리듬감을 만들어 내는 등 시퀀스를 바꾸는 것과 같은 효과를 줄 수도 있다.
또한 새로운 소리를 만드는 실험 과정에서 미지의 영역이나 신경쓰지 못하는 부분이 생길 수 있는데
이 부분에 대해서도 호기심을 갖고 접근해 보는 것도 좋을 듯 하다.


저는 sc를 학교 수업으로도 배웠지만 1주일에 한 번씩 오프라인 모임을 가지는 커뮤니티 활동을 통해서도 많이 배웠습니다.
그리고 직접 작업에 적용하면서 모르는 것들을 익혔구요. 여러분들도 원하신다면 모임을 만들어 추진해 보세요 \o/


워크숍에 참여해 주셔서 감사합니다. 여러가지로 고생 많으셨습니다. 다음에 또 뵈어요.



--------------------------------------------------------------------------------
#8 파일로 녹음하기 등
--------------------------------------------------------------------------------

녹음 하기
s.prepareForRecord;
s.record;

녹음 끝내기
s.stopRecording;

적용 예제

// 미리 실행
s.prepareForRecord;

(
s.record; // play 하기 전에 함께 실행 - 녹음 시작!
~mel = Pdef(\seq_mel,
	Pbind(
		\instrument, \gobeat,
		// \freq, Pseq([ 52, 54, 56, 57, 56, 54, 56 ], inf).midicps,
		\freq, Pseq([ 52, 54, 56, 57, 56, 54, (55 + 0.5) ], inf).midicps, // 미분음의 사용. 랜덤한 느낌을 주고 싶다면?
		\dur, Pseq([0.75, 0.25, 0.75, 0.25, 0.5, 0.5, 1]*0.1, inf),
		\delta, Pseq([0.75, 0.25, 0.75, 0.25, 0.5, 0.5, 1], inf), // 합이 4의 배수 -> 3의 배수로 바꾸면?
		\amp, Pseq([0.3, 0.2, 0.3, 0.2, 0.3, 0.3, 0.31], inf)
	)
).play;
)

~mel.stop; // 패턴 stop
s.stopRecording; // 후에 녹음 정지!

