//데이터 불변성 (Immutability)
//원시데이터 : String, Number, Boolean, undefined, null
//참조형 데이터 : Object, Array, Function

//원시데이터의 경우, 밸류값이 한번 메모리 주소에 들어가면, 동일한 밸류값을 할당했을때 새로운 메모리 주소를 새로 할당하지 않고
//기존의 메모리 주소를 참조한다!
let a = 1;
let b = 4;
console.log(a, b, a === b); // 1 4 false //밸류가 다르다기 보다는 바라보는 메모리 주소가 다르기 때문에 false인것!
b = a;
console.log(a, b, a === b); // 1 1 true //a가 바라보고 있던 메모리주소를 b 에 할당한것!
a = 7;
console.log(a, b, a === b); // 7 1 false //a는 7이라는 값이 들어가는 새로운 세번째 메모리주소를 바라보고 있으므로, 서로 다름 false!
let c = 1;
console.log(b, c, b === c); // 1 1 true //b,c 모두 같은 1 밸류값이 들어가는 첫번째 메모리주소를 바라본다.
