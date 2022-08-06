//.splice()
//원본 배열이 수정되므로 주의!

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

numbers.splice(2, 1); //splice(index, count); = 인덱스번호 2번에서 1개를 지운다.

console.log(numbers); // result : [1, 2, 4] 