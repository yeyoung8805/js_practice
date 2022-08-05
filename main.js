//ES6 Classes

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }

//class 사용한 새로운 문법으로 구현한다!!(React 등도 비슷함)
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last; 
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const heropy = new User('Heropy', 'Kim');
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');

console.log(heropy);
console.log(amy.getFullName());
console.log(neo.getFullName());