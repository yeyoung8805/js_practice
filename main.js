// 함수 복습

function sum(x, y) {
  if(x < 2) {
    return; // x값이 2보다 작으면 여기서 종료된다. 밑의 내용들 실행하지 않는다. 함수가 여기서 종료된다.
  }
  return x + y;
}

console.log(sum(1, 3)); //result : undefined
