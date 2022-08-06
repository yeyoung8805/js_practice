//.filter()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = numbers.map(numbers => { 
	return number < 3;
});
console.log(a); //[true, true, false, false]

const b = numbers.filter(numbers => {
  return number < 3;
});
console.log(b); //[1, 2]