//.forEach()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

fruits.forEach(function (fruit, index) { //function ~부터는 콜백함수이다.
	console.log(fruit, index); // 콘솔에 배열의 크기(length) 만큼 찍힌다.
});