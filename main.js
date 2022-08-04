// 비교 연산자(comparison operator)

const a = 1;
const b = 3;

console.log(a === b); //result : false  // 일치연산자 ===

function isEqual(x,y) {
  return x === y;
}

console.log(isEqual(1,1)); //true
console.log(isEqual(2,'2')); //false number, string is different
