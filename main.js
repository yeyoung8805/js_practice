//.filter()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = numbers.map(numbers => {  //배열의 개수만큼 boolean 값이 반환된다.
	return number < 3;
});
console.log(a); //[true, true, false, false]

const b = numbers.filter(numbers => { //원본 배열에서 필터링해서 "새로운 배열"을 만들어 반환한다.
  return number < 3;
});
console.log(b); //[1, 2]

console.log(numbers); //map, filter 모두 원본배열을 변화시키지 않는다.