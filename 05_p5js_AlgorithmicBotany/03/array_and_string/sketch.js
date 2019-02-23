var numbers = [];
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

	// 문자열 더하기? => 연결하기
	print("length of numbers: " + numbers.length);
	print("length of string: " + string.length);

	print(numbers[numbers.length - 1]); // get last element
	print(string[string.length - 1]); // get last element


	// for-loop 안에서
	for (var i = 0; i < string.length; i++) {
		print("string["+i+"]: " + string[i]);
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
