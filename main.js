//.find() .findIndex()

const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

const a = fruits.find(fruit => {
  return /^B/.test(fruit);
});
console.log(a);