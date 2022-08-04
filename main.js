// 함수 복습

//익명함수
const sum = function (x, y) { //x,y 라는 매개변수
  return x + y;
  console.log(x); //return 이후이므로 함수기능이 종료됐기 때문에, 개발자도구 콘솔에 log 가 찍히지 않는다.
}

const a = sum(1, 3); // 1,3 이라는 인수
const b = sum(4, 12);

console.log(a);
console.log(b);
console.log(a + b); //함수 계속 호출하는 비효율적인 구조
