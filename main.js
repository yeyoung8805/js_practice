//this
//일반(Normal) 함수는 '호출 위치에서' 따라 this 정의!
//화살표(Arrow) 함수는 '자신이 선언된 함수 범위에서'(블록 내에서) this 정의!

const timer = {
  name: 'Heropy!!',
  timeout: function () {
    //setTimeout(함수,시간)
    setTimeout(function() { //일반함수 내의 this는 setTimeout()내의 범위에서만 찾으므로 name에 도달할 수 없다!!
      console.log(this.name);
    }, 2000);
  }
};
timer.timeout();