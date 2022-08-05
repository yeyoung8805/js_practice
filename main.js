//생성자 함수 (prototype)
const yeyoung = {
  firstName: 'YeYoung',
  lastName: 'Kim',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(yeyoung.getFullName());


const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(amy.getFullName());


const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(neo.getFullName());