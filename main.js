// 함수 복습

function sum() {
  console.log(arguments);
  return;
}

console.log(sum(7, 3)); //Arguments 배열에 7, 3이 각각 0번째, 1번째로 들어간다.
