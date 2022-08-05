function User(first, last) { //생성자 함수는 파스칼 케이스 사용하여 대문자로 표시
  this.firstName = first;
  this.lastName = last;
};
User.prototype.getFullName = function () { //prototype 개념이 도입된다.
  return `${this.firstName} ${this.lastName}`;
}

const yeyoung = new User('Yeyoung', 'Kim'); // const yeyoung 은 인스턴스(instance)이다!
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');

console.log(yeyoung.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());