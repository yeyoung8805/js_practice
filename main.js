// 논리 연산자(logical operator)

const a = 1 === 123;
const b = 'AB' === 'AB';
const c = false;

console.log(a); //result true
console.log(b); //result true
console.log(c); //result true

console.log(a && b && c); //&&는 And 연산자로서, 하나라도 false이면 result false가 됨. 모두 true가 되어야 함
console.log('&&: ', a && b && c); //문장이 길어질 경우 구분자를 앞에 '' 넣음

console.log('||: ', a || c); //||는 Or 연산자. 하나라도 true 이면 true

console.log('!: ', !a); //!는 Not 부정 연산자. 기존값의 반대가 된다.
