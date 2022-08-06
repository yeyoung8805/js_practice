//.forEach()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

fruits.forEach(function (item, index, array) { //function ~부터는 콜백함수이다.
	console.log(item, index, array); // 콘솔에 배열의 크기(length) 만큼 찍힌다.
});