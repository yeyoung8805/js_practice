// 전개연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']; //Orange 항목을 추가했다.
console.log(fruits);
console.log(...fruits); //전개연산자 사용

function toObject(a, b, ...c) { //...c는 "Rest parameter"로서 나머지 변수들을 모두 포함한다.
  return { //속성의 이름과 변수의 이름이 같을 때 a:a를 a로 단순하게 나타낼 수 있다.
    a,
    b,
    c
  }
}
console.log(toObject(...fruits)); //c변수엔 배열의 형태로 밸류값들이 들어간다.
