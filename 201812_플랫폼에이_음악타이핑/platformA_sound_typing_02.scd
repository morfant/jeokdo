
1. 엔벨롭(Evnelope), 봉투

1)
{BrownNoise.ar(1)}.plot(1);

2)
{EnvGen.kr(Env.perc())}.plot(1);

{EnvGen.kr(Env.perc(0.3, 1))}.plot(1.3);


1) x 2) = ?

{BrownNoise.ar(1) * EnvGen.kr(Env.perc(0.3, 1))}.plot(1.3);


{BrownNoise.ar(1) * EnvGen.kr(Env.perc(0.3, 1))}.play;


/*-------------------------------------------------*/

2. 신스데프(SynthDef)(= 악기)


sc에서 소리를 SynthDef의 형태로 정의한다.

(
SynthDef(\gobeat, {|freq = 240, dur = 0.2, gate = 1, amp = 0.5|
	var env = EnvGen.kr(Env.perc(0.01, dur), gate, doneAction: 2);
	var sig = SinOsc.ar(freq, 0) * env;
	Out.ar(0, Pan2.ar(sig) * amp);
}).add;
)

을 보기 편하게 풀어서 쓰면 아래와 같다.


(

SynthDef( // 이제부터 SynthDef를 만들겠다
	\gobeat, // SynthDef의 이름. 'gobeat', "gobeat"의 형태도 가능

	{

		|
		    freq = 240, dur = 0.2, gate = 1, amp = 0.5

		/*
		'아규먼트'라고 부름. SynthDef안에서 사용되는 변수라고 생각하면 됨.
		이후로 'freq'를 사용하면 미리 정의된 240을 사용하는 것과 같게 된다.
		이 '아규먼트'들은 소리가 나고 있는 동안에도 자유롭게 변경될 수 있다. ==> 실시간으로 소리를 다룰 수 있는 자유도가 높아진다.
		다시 말해, 이후에 SynthDef의 내용을 바꾸지 않고도 소리를 변형하기 위한 지점을 미리 만드는 것이라고 생각할 수 있다.
		*/

		| // '|' 닫고

		var env = EnvGen.kr(Env.perc(0.01, dur), gate, doneAction: 2);
		// var(=variable, 로컬 변수 선언시 지켜야만 하는 규칙)

		var sig = SinOsc.ar(freq, 0, env); // 역시 var 선언. 그 안의 구체적 내용은 아래에서 설명.
		// SinOsc.ar(

		Out.ar(0, Pan2.ar(sig) * amp); // SynthDef를 만들때 반드시 필요! 소리가 출력(Out)되는 라인을 달아주는 것.

	}

).add; // 여기까지 정의한 SynthDef를 sc가 사용할 수 있게 서버에 추가한다. (sc는 'client - server' 구조)


)


/* 처음부터 만들지 않아도 됨. 기존의 것을 변형해서 사용할 수 있다면 충분! */


SynthDef의 기본 구조

(
SynthDef(
	이름,
	{
		| 아규먼트들 |

		필요한 소리 요소들 1 (UGen, 혹은 UGen 들의 조합)
		필요한 소리 요소들 2
		필요한 소리 요소들 3
		.
		.
		.

		Out.ar(0, Pan2.ar(내보내려는 소리))

	}

).add;
)


만든 SynthDef 사용하기
SynthDef는 설계도(소리는 안남), 실제로 소리를 내려면 Synth로 바꾸어야 한다.
Synth(\gobeat)
Synth(\gobeat, [freq: 1900, amp: 0.9]) // SynthDef의 아규먼트 값을 바꾸어 실행할 수 있음


/*-------------------------------------------------*/


3. 시퀀싱(Pbind)


(// 전체 영역 선택 후 실행
~p = Pdef(\seq, // 이름 같은 것..
	Pbind(
		// Pbind가 기본적으로 가지고 있는 아규먼트들
		\instrument, \gobeat,
		\dur, 1,
		\delta, Pseq([1], inf),

		// gobeat SynthDef에서 만들어준 아규먼트들
		\freq, Pseq([60, 62, 64, 65, 67, 69, 71, 72], 1).midicps,
		\amp, 0.5
	)
).play;
)


1. \freq (주파수 = 음높이)
[60, 62, 64, 65, 67, 69, 71, 72] 가 각각
[도, 레, 미, 파, 솔, 라, 시, 도] 를 나타내는 숫자(midi note)
=> 숫자 1 차이는 반음 차이, 숫자 2 차이는 온음 차이이다. 한 옥타브는 12 만큼 차이.

2. \dur (duration = 음의 길이)
1로 할 경우 sc의 기본 설정하에서는 1초를 나타냄.

3. \delta (앞선 음과 다음 음 사이의 시간 간격)
1로 할 경우 sc의 기본 설정하에서는 1초를 나타냄.

4. \amp (amplitude = 음량 = 소리크기)
범위 : 0 ~ 1.0


Pseq
a = Pseq([500, 400, 300, 200, 100], 2); // 500 -> 400 -> 300 -> 200 -> 100 의 순서로 2번 반복 된다.
* 무한 반복을 위해서는 2 를 inf (infinite의 축약) 로 바꾸면 됨.
r = a.asStream;
r.next;



(
~p = Pdef(\seq,
	Pbind(
		\instrument, \gobeat,

		\freq, Pseq([
			Pseq([61, 59, 61, 63, 64, 63, 61, 56, 59, 56], 1).midicps,
			Pseq([61, 59, 61, 63, 64, 63, 64, 66, 68, 64], 1).midicps,
		], inf),

		\dur, 1.2,
		\delta, Pseq([0.75, 0.25, 0.5, 0.5, 0.75, 0.25, 0.5, 0.5, 0.75, 3.25], inf),
		\amp, 0.3
	)
).play;
)


4. 그림 그리기 맛보기

Pen

(
w = Window.new.front;
w.view.background_(Color.white);
w.drawFunc = {
    20.do{
        // set the Color
        Pen.color = Color.green(rrand(0.0, 1), rrand(0.0, 0.5));
		Pen.width = rrand(0.1, 2);
        Pen.addRect(
            Rect((w.bounds.width).rand, (w.bounds.height).rand, (w.bounds.width).rand, (w.bounds.height).rand );
        );
        Pen.perform([\stroke, \fill].choose);
    }
};
w.refresh;
)


(
var w = Window("smoothing", Rect(100, 200, 900, 500)).front;
w.view.background_(Color.white);
w.drawFunc = { |v|
    Pen.strokeColor = Color.grey(0.25);
    Pen.smoothing_(true); //anti-aliasing (default)
	Pen.width = rrand(0.1, 0.3);
    500.do{|i|
        Pen.moveTo(50@50.rrand(450));
        Pen.lineTo(850@50.rrand(450));
    };
    Pen.stroke;
};
)