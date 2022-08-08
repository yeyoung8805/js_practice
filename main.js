import _ from 'lodash';

//데이터 불변성 (Immutability)
//원시데이터 : String, Number, Boolean, undefined, null
//참조형 데이터 : Object, Array, Function

//참조형 데이터
//얕은 복사와 깊은 복사 개념 이해 필요
//얕은 복사(shallow copy), 깊은 복사(deep copy)
//참조 데이터 {}(객체) 안에 [](배열) 라는 또다른 참조데이터가 들어있다면, 깊은복사를 고려해보는게 좋다.
const user = {
  name: 'yeyoung',
  age: 88,
  emails: ['yyk8805@naver.com']
}

const copyUser = _.cloneDeep(user); //깊은복사(deep copy) 하는 방법이다!!
console.log(copyUser === user); //false

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);

console.log('------')
console.log('------')

user.emails.push('aaa@naver.com');
console.log(user.emails === copyUser.emails); //false
console.log('user', user); //emails 배열에 aaa@naver.com 메일도 리스트에 들어간다.
console.log('copyUser', copyUser); //emails 배열에 yyk8805@naver.com 메일 한개만 리스트에 들어간다.
