//.map()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = fruits.forEach(function (fruit, index) { 
	console.log(`${fruit}-${index}`); 
});
console.log(a);

const b = fruits.map(function (fruit, index) { //map 은 return값들을 토대로 "새로운 배열"을 만들어서 반환한다. 
  return { //{} 리터럴이라는 새로운 배열을 만들어서 반환한다.
    id: index,
    name: fruit,
  };
});
console.log(b);