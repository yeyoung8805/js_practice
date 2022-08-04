//호이스팅 (Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7;

const double = function () {
  console.log(a * 2);
}

double();
