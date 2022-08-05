// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

const timer = setTimeout(() => { //화살표 함수 
  console.log('YeYoung');
}, 3000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearTimeout(timer); //브라우저 새로고침(F5)하고 3초가 되기전 h1 태그내용을 클릭하면, console에 찍히는 값이 없게 된다.
});