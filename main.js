//.find() .findIndex()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = fruits.find(fruit => {
  return /^C/.test(fruit); //정규표현식 : C로 시작(^)하는 문자데이터 첫번째배열 value
});
console.log(a); //result : Cherry

const b = fruits.findIndex(fruit => {
  return /^C/.test(fruit); 
});
console.log(b); //result : 2 (Cherry index is 2)