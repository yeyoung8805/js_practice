//.filter()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = numbers.map(numbers =>number < 3); //return에 하나의 실행문만 반환할경우 줄여서 표현할 수 있다.
console.log(a); //[true, true, false, false]

const b = numbers.filter(numbers =>number < 3);
console.log(b); //[1, 2]

console.log(numbers); //map, filter 모두 원본배열을 변화시키지 않는다.