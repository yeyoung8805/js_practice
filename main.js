const user = {
  name: 'Yeyoung',
  age: 88,
  email: 'yyk8805@naver.com'
};

const keys = Object.keys(user);
console.log(keys);
// ['name', 'age', 'email']

console.log(user['email']);

const values = keys.map(key => user[key]);
console.log(values);
