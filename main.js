//구조 분해 할당 (Destructuring assignment)
// = 비구조화 할당

const user = {
  name: 'Yeyoung',
  age: 88,
  email: 'yyk8805@naver.com'
};

const {name, age, address = 'Korea'} = user; //구조분해할당 (=비구조화 할당)의 예
//E.g, user.address

console.log(`사용자의 이름은 ${name} 입니다.`);
console.log(`${name}의 나이는 ${age}세입니다.`);
console.log(`${name}의 이메일 주소는 ${user.email} 입니다.`); //구조분해할당 되지 않았을때 email 키의 밸류값을 도출하기 위한 방법이다.
console.log(address); //const user에는 address 값이 할당되지 않았지만, 디폴트 값 'Korea' 가 할당된 상태이므로 Korea가 출력된다.

const fruits = ['Apple', 'Banana', 'Cherry'];
const [a,b,c,d] = fruits;
console.log(a,b,c,d);
