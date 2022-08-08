//구조 분해 할당 (Destructuring assignment)
// = 비구조화 할당

const user = {
  name: 'Yeyoung',
  age: 88,
  email: 'yyk8805@naver.com',
  address: 'Singapore'
};

const {name: yeyoung, age, address = 'Korea'} = user; //구조분해할당 (=비구조화 할당)의 예
//E.g, user.address

console.log(`사용자의 이름은 ${yeyoung} 입니다.`);
console.log(`${yeyoung}의 나이는 ${age}세입니다.`);
console.log(`${yeyoung}의 이메일 주소는 ${user.email} 입니다.`); //구조분해할당 되지 않았을때 email 키의 밸류값을 도출하기 위한 방법이다.
console.log(address); //address default값 Korea가 할당돼있지만, const address에서 Singapore 가 할당돼있으므로 Singapore가 출력된다.

// 객체데이터 뿐만아니라 '배열 데이터'도 구조분해할당 가능하다!
const fruits = ['Apple', 'Banana', 'Cherry'];
const [a,b,c,d] = fruits; //배열의 이름으로 추출하는게 아니라 a,b,c,d 라는 순서대로 추출한다.
console.log(a,b,c,d);
