//생성자 함수 (prototype)
const yeyoung = {
  firstName: 'YeYoung',
  lastName: 'Kim',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(yeyoung.getFullName());