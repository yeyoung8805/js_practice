//구조 분해 할당 (Destructuring assignment)
//비구조화 할당

const user = {
  name: 'Yeyoung',
  age: 88,
  email: 'yyk8805@naver.com'
};

const {name, age, email, address} = user;

console.log(`사용자의 이름은 ${name} 입니다.`);
console.log(`${name}의 나이는 ${age}세입니다.`);
console.log(`${name}의 이메일 주소는 ${email} 입니다.`);
console.log(address);

const fruits = ['Apple', 'Banana', 'Cherry'];
const [a,b,c,d] = fruits;
console.log(a,b,c,d);
