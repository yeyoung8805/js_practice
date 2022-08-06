//.map()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = fruits.forEach(function (fruit, index) { 
	console.log(`${fruit}-${index}`); 
});
console.log(a);

const b = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`;
});
console.log(b);