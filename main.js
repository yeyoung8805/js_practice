//.splice()
//원본 배열이 수정되므로 주의!

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

numbers.splice(2, 0); //splice(index, count); = 인덱스번호 2번에서 0개를 지운다. 즉 지워지는 것이 없다,

console.log(numbers); // result : [1, 2, 3, 4] 