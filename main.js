const user = {
  name: 'Yeyoung',
  age: 88,
  email: 'yyk8805@naver.com'
};

const keys = Object.keys(user); //key(property)만 추출해내어 배열을 만듦
console.log(keys);
// ['name', 'age', 'email']

console.log(user['email']); //email 이라는 key의 value를 받아오고자 할때

const values = keys.map(key => user[key]); //keys 라는 배열 데이터에는 map()을 사용할 수 있다.
                                           //map(콜백함수) : 3번 실행되는, 콜백함수 결과가 map이라는 매개변수에 들어간다.
console.log(values);
