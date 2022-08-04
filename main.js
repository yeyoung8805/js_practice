//호이스팅 (Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7;

double();

//함수 선언부가 double();호출부보다 아래있어도 유효범위 최상단으로 끌어올려진다.
function double() {
  console.log(a * 2);
}
