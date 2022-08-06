//.push() .unshift()
//원본 배열이 수정되므로 주의!

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

numbers.push(5); //push() : 배열의 가장 뒤쪽에 데이터가 삽입된다.
console.log(numbers);  //[1,2,3,4,5]

numbers.unshift(0); //unshift() : 배열의 가장 앞쪽에 데이터가 삽입된다.
console.log(numbers); //[0,1,2,3,4,5]