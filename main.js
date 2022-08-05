const pi = 3.14159265358979;
console.log(pi); //result : 3.14159265358979

const str = pi.toFixed(2);
console.log(str); //result : 3.14  //소수점 2자리까지만 남기고 다 버림
console.log(typeof str); //result : String

const integer = parseInt(str);
const float = parseFloat(str); 
console.log(integer); //result : 3  //정수로 반환 
console.log(float); //result : 3.14  //소수점숫자도 유지하면서 문자를 숫자로 변환
console.log(typeof integer, typeof float); //result : number, number