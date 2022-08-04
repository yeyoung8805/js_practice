// 화살표 함수
// () => {}  vs  function () {}

//일반 익명함수
const double = function (x) {
  return x * 2;
}
console.log('double: ', double(7));

//화살표 익명함수
//기본적인 로직을 축약형으로 줄일수 있다는 차이점이 있다!
const doubleArrow = x => { //return 사용하는 경우의 코드 정리
  return x * 2;
}
console.log('doubleArrow', doubleArrow(7));
