//this
//일반(Normal) 함수는 '호출 위치에서' 따라 this 정의!
//화살표(Arrow) 함수는 '자신이 선언된 함수 범위에서'(블록 내에서) this 정의!

const timer = {
  name: 'Heropy!!',
  timeout: function () {
    //setTimeout(함수,시간)
    setTimeout(() => { //화살표 함수는 자신이 선언된 함수범위인 timeout: 이 timer 안에서 호출되고 있기에 this는 timer 이다!!
      console.log(this.name);
    }, 2000);
  }
};
timer.timeout();