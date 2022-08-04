// 변수 유효범위 (Variable Scope)
//var, let, const

function scope() {
  console.log(a); //Error : a is not defined
  if(true) {
    const a = 123; //const 뿐만 아니라 let 도 마찬가지
  }
}
scope();
