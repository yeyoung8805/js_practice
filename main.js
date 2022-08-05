//this
//일반(Normal) 함수는 '호출 위치에서' 따라 this 정의!
//화살표(Arrow) 함수는 '자신이 선언된 함수 범위에서'(블록 내에서) this 정의!

function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
}

User.prototype.arrow = () => {
  console.log(this.name);
}

const heropy = new User('Heropy');

heropy.normal(); //result : Heropy
heropy.arrow(); //result : undefined