function user(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

const yeyoung = new user('Yeyoung', 'Kim'); //user()는 생성자 함수

console.log(yeyoung);