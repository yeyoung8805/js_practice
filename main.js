//JSON (JavaScript Object Notation)
//자바스크립트의 객체 표기법
const user = {
  name: "HEROPY",
  age: 85,
  emails: [
    'thesecon@gmailcom',
    'neo@zillinks.com'
  ],
};

console.log('user', user);

const str = JSON.stringify(user);
console.log('str', str); // {"name":"HEROPY","age":85,"emails":["thesecon@gmailcom","neo@zillinks.com"]}
console.log(typeof str); // string

const obj = JSON.parse(str);
console.log('obj', obj);
