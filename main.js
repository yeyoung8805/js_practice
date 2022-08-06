//.find() .findIndex()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = fruits.find(fruit => /^C/.test(fruit));
console.log(a); //result : Cherry

const b = fruits.findIndex(fruit => /^C/.test(fruit));
console.log(b); //result : 2 (Cherry index is 2)