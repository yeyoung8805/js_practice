console.log(typeof 'hello world!'); //특정한 데이터의 데이터 타입 확인 가능 typeof //string
console.log(typeof 123); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined : 의도하지 않은 빈값, null : 의도한 빈값
console.log(typeof null); //null, {}, [] 모두 object 로 타입이 출력된다.
console.log(typeof {}); //객체
console.log(typeof []); //배열

function getType(data) {
  return Object.prototype.toString.call(data);
}

console.log(getType(123)); //result : [object Number]
console.log(getType(false)); //result : [object Boolean]
