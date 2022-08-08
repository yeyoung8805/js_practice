// 전개연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']; //Orange 항목을 추가했다.
console.log(fruits);
console.log(...fruits); //전개연산자 사용

const toObject = (a, b, ...c) => ({a, b, c}); //화살표 함수 내에서 배열데이터를 반환하려면 ()로 한번 감싸야 한다!!
console.log(toObject(...fruits)); //c변수엔 배열의 형태로 밸류값들이 들어간다.
