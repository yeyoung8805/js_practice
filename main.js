const userAge = {
  // key(property): value
  name: 'Yeyoung',
  age: 88
};
const userEmail = {
  name: 'Yeyoung',
  email: 'yyk8805@naver.com'
};

const target = Object.assign(userAge, userEmail); //assign 은 정적(static) 메소드  //Object.assign(대상객체, 출처객체);
console.log(target);
console.log(userAge);
console.log(target == userAge);

const a = { k: 123 }
const b = { k: 123 } //a와 b는 서로 다른 메모리 주소를 바라보고 있다.
console.log(a === b) //주의! 똑같이 생겼음에도 불구하고 === 일치연산자 결과가 false 이다. (서로 다른 객체이기 때문이다.)
