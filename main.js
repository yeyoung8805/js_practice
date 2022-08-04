//반복문 (For statement)
//for ( 시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul');

for(let i = 0; i < 3; i += 1) {
  const li = document.createElement('li'); //메모리 상에 li 를 만든 상태(눈에 보이진 않지만)
  li.textContent = `list-${i + 1}`; //li의 내용물로 list-1, list-2, list-3 나오게 함
  ulEl.appendChild(li); //ul 안에 child로 li 들 추가함
}
