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

const copyUser = {...user}; //전개연산자 : 빈 {}객체에 user객체의 속성, 값들을 전개해서 넣는다.
console.log(copyUser === user); //false : copyUser가 바라보는 새로운 메모리 주소와, user의 메모리 주소는 다르다.

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);

console.log('------')
console.log('------')
