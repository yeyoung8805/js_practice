// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7;
function double() {
  console.log(a * 2);
}
double();


//즉시실행함수 의 형식이다!
(function () {
  console.log(a * 2);
}) ();

//즉시실행함수 의 다른 형태이다! (위와 똑같은 기능을 한다.)
(function () {
  console.log(a * 2);
}());
