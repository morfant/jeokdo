var streams = [];
var fadeInterval = 1.6;
var symbolSize = 14;

var sample_text = "가짜 뉴스(허위 정보)’는 민주주의를 곤란하게 한다. 불필요한 사회적 갈등을 유발하고, 여론을 왜곡시킨다. 11월24일 지방선거를 앞둔 타이완도 가짜 뉴스 몸살을 앓고 있다. 타이완 지방선거는 시장 및 시의원 등 9개 분야 공직자를 한 번에 선출해 ‘구합일(九合一)’ 선거로 불린다. 유권자 약 1800만명이 모두 1만1130명에 달하는 공직자를 선출하는 대형 정치 이벤트다. 같은 날 탈원전 폐지 여부·동성혼 합법화를 포함해 모두 10개 안에 대한 국민투표도 동시 실시된다. 타이완 시민사회는 지난 7월 가짜 뉴스를 감시하는 ‘타이완 팩트체크센터’를 꾸리고 대응에 나섰다. 선거를 앞두고 좀 더 전문적으로 뉴스를 검증할 필요가 높아졌기 때문이다. 타이완 팩트체크센터 황자우훼이(黃兆徽) 편집국장은 타이완 공영방송 PTS(Public Television Service) 앵커 출신으로 타이완 대학 신문방송대학원 교수를 역임하고 있다. “타이완 주류 미디어는 선정성이 강하고 때로는 매체 스스로 가짜 뉴스의 전달자 노릇을 합니다. 정치 성향에 따라 친중국·반중국 극단으로 나뉜 언론에서는 최소한의 중립을 지키려는 노력 역시 보기 어렵습니다. 특정 매체나 기자를 망신 주려는 게 아니라 공론장을 건강하게 만들기 위해서라도 개입이 필요하다는 시민사회의 공감대가 있었습니다.” 양안 관계 관련 뉴스 외에도 동성혼·탈원전 이슈 등 여론을 달구는 뉴스들이 타이완 팩트체크센터의 주요 감시 대상이다.";

function setup() {
  createCanvas(
    window.innerWidth, window.innerHeight
  );

  background(0);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize
  }

  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0, 150);
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
      if (charType > 1) {
        // set it to Katakana
        // https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C_3000~3FFF
        // 유니코드 문자표
        // this.value = String.fromCharCode(
          // 0x30A0 + round(random(0, 96))
          // 0x3130 + round(random(0, 96))
        // );


        this.value = sample_text[round(random(sample_text.length - 1))];
        // console.log(this.value);
      } else {
        // set it to numeric
        this.value = round(random(0,9));
      }
    }
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 35));
  this.speed = random(5, 22)

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
        opacity
      );
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(140, 255, 170, symbol.opacity);
      } else {
        fill(0, 255, 70, symbol.opacity);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}

