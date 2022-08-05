const str = 'world@gmail.com';

console.log(str.match(/.+(?=@)/));  //정규표현식(RegExp) 사용
console.log(str.match(/.+(?=@)/)[0]); //배열의 0 키에 들어간 value "world"만 추출