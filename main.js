// 전개연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']; //Orange 항목을 추가했다.
console.log(fruits);
console.log(...fruits); //전개연산자 사용

function toObject(a, b, ...c) { //...c는 "Rest parameter"로서 나머지 변수들을 모두 포함한다.
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits));
