//this
//일반(Normal) 함수는 호출 위치에서 따라 this 정의!
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const heropy = {
  name: 'Heropy',
  normal: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

heropy.normal(); //result : heropy
heropy.arrow(); //result : undefined //일반함수와 달리 화살표함수는 호출된 위치와는 관련이 없다.

const amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
};
amy.normal(); //result : Amy  //this is name:'Amy'
amy.arrow(); //result : undefined
