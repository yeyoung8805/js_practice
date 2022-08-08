//데이터 불변성 (Immutability)
//원시데이터 : String, Number, Boolean, undefined, null
//참조형 데이터 : Object, Array, Function

//참조형 데이터
//얕은 복사와 깊은 복사 개념 이해 필요
let a = {k: 1};
let b = {k: 1};
console.log(a, b, a === b); //false : 왜냐하면 서로 다른 메모리 주소를 바라보고 있다.
a.k = 7;
b = a;
console.log(a, b, a === b); //true : a의 메모리 주소를 b가 할당받기 때문에 똑같다.
a.k = 2;
console.log(a, b, a === b); //true : a라는 변수의 k속성을 바꾼거지만, 이미 a와 b는 같은 메모리 주소를 바라보고 있기 때문에 똑같다.
let c = b;
console.log(a, b, c, a === c); //true : a,b,c 모두 같은 메모리 주소를 바라보고 있기 때문에 똑같다.
a.k = 9;
console.log(a, b, c, a === c); //true : a라는 변수의 k속성은 바꾸었고, 이미 a,b,c는 같은 메모리 주소를 바라보고 있기 때문에 똑같다.
