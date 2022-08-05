function user(first, last) {
  this.firstName = first;
  this.lastName = last;
};

const yeyoung = new user('Yeyoung', 'Kim'); //user()는 생성자 함수

console.log(yeyoung);

// const yeyoung1 = {}; // {}로 나타내는 방식이 리터럴 방식