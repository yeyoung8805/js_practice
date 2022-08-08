//데이터 불변성 (Immutability)
//원시데이터 : String, Number, Boolean, undefined, null
//참조형 데이터 : Object, Array, Function

//참조형 데이터
//얕은 복사와 깊은 복사 개념 이해 필요
//얕은 복사(shallow copy), 깊은 복사(deep copy)
const user = {
  name: 'yeyoung',
  age: 88,
  emails: ['yyk8805@naver.com']
}

const copyUser = {...user}; //전개(Spread)연산자 : 빈 {}객체에 user객체의 속성, 값들을 전개해서 넣는다.
console.log(copyUser === user); //false

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);

console.log('------')
console.log('------')

user.emails.push('yyy@naver.com'); //user라는 객체의 emails라는 배열 데이터도 참조형이다. 따라서 emails라는 배열은 기존과 같은 메모리 주소를 참조하고 있다.
console.log(user.emails === copyUser.emails); //true
console.log('user', user);
console.log('copyUser', copyUser);
