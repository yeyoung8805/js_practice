//JSON (JavaScript Object Notation)
//자바스크립트의 객체 표기법
import myData from './myData.json';

console.log(myData);

const user = {
  'name': "HEROPY",
  'age': 85,
  'emails': [
    'thesecon@gmailcom',
    'neo@zillinks.com'
  ],
};

console.log('user', user);

const str = JSON.stringify(user); //stringify() : JSON 형태로 문자화 시킴
console.log('str', str); // {"name":"HEROPY","age":85,"emails":["thesecon@gmailcom","neo@zillinks.com"]}
console.log(typeof str); // string

const obj = JSON.parse(str); //parse() : 문자데이터를 자바스크립트에서 활용할 수 있는 실제 데이터로 변경시켜준다.
console.log('obj', obj);
