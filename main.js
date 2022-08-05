//ES6 Classes

const heropy = {
  name: 'Heropy',
  //normal: function () {  //ES6 class 문법에서 위와 아래는 같다.
  normal() { 
    console.log(this.name);
  },
  arrow : () => {
    console.log(this.name);
  } 
};

heropy.normal();
heropy.arrow();