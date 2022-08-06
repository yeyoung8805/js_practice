//.map()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = fruits.forEach((fruit, index) => { //forEach() 는 따로 반환하는 값 return 이 없다.
	console.log(`${fruit}-${index}`); 
});
console.log(a);

const b = fruits.map((fruit, index) => ({ //{} 리터럴이라는 새로운 배열을 만들어서 반환한다.
  id: index,
  name: fruit,
}));
console.log(b);