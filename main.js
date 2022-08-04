// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression


//기존 방식
const a = 7;
function double() {
  console.log(a * 2);
}
double();


//1. 즉시실행함수 의 형식이다!
(function () {
  console.log(a * 2);
}) ();

//2. 즉시실행함수 의 다른 형태이다! (위와 똑같은 기능을 한다.)
//1.보다 2.방법이 더 권장된다.
(function () {
  console.log(a * 2);
}());
