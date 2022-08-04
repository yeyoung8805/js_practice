// 함수 복습

//익명함수
const sum = function (x, y) { //x,y 라는 매개변수
  return x + y;
}

const a = sum(1, 3); // 1,3 이라는 인수
const b = sum(4, 12);

console.log(a);
console.log(b);
console.log(a + b); //함수 계속 호출하는 비효율적인 구조
