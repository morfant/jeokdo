// 배열(Array), 짐칸이 여럿 달린 기차 
var numbers = [];

// string 은 기본적으로 배열의 속성을 가집니다.  
var string = "abcdefghijklmn";

function setup() {
	createCanvas(400, 400);

	numbers[0] = 1;
	numbers[1] = 2;

	print(numbers);
	print(numbers[0]);
	print(numbers[1]);
	print(numbers[2]);

	print(string);
	print(string[0]);

	// 문자열 더하기? => 문자열 연결하기
	print("length of numbers: " + numbers.length);
	print("length of string: " + string.length);

	print(numbers[numbers.length - 1]); // get last element
	print(string[string.length - 1]); // get last element


	// for-loop 안에서 각 문자들에 접근하기 
	for (var i = 0; i < string.length; i++) {
		print("string["+i+"]: " + string[i]);
	}

	// 인덱스를 사용하지 않는, 좀 더 간편한 표현 
	for (var c in string) {
		print(c)
	}


}


function mouseClicked() {

	// javascript array push(), pop()
	// push() : Array에 값을 넣고
	// pop() : Array에서 값을 빼내는
	// push(), pop() 모두 Array의 마지막에 넣고, 빼기때문에 순서에 신경써야 합니다.
	print("push 100 to numbers");
	numbers.push(100);
	print(numbers);
	print("push 200 to numbers");
	numbers.push(200);
	print(numbers);

	print("pop from numbers 1");
	var last = numbers.pop();
	print(numbers);
	print("pop element: " + last);

	print("pop from numbers 2");
	last = numbers.pop();
	print(numbers);
	print("pop element: " + last);
}
