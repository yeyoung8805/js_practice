// 변수 유효범위 (Variable Scope)
//var, let, const

function scope() {
  console.log(a); //undefined
  if(true) {
    var a = 123; //var 은 블록레벨이 아닌 함수레벨에서 관리된다.
  }
}
scope();
