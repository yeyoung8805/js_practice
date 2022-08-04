// 변수 유효범위 (Variable Scope)
//var, let, const

function scope() {
  console.log(a); //Error : a is not defined
  if(true) {
    const a = 123;
  }
}
scope();
