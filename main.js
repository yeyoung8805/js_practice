function user(first, last) {
  this.firstName = first;
  this.lastName = last;
};
user.prototype.getFullName = function () { //prototype 개념이 도입된다.
  return `${this.firstName} ${this.lastName}`;
}

const yeyoung = new user('Yeyoung', 'Kim'); // const yeyoung 은 인스턴스(instance)이다!
const amy = new user('Amy', 'Clarke');
const neo = new user('Neo', 'Smith');

console.log(yeyoung.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());