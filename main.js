function user(first, last) {
  this.firstName = first;
  this.lastName = last;
};

const yeyoung = new user('Yeyoung', 'Kim'); // const yeyoung 은 인스턴스(instance)이다!
const amy = new user('Amy', 'Clarke');
const neo = new user('Neo', 'Smith');

console.log(yeyoung);
console.log(amy);
console.log(neo);