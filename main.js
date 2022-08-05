// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

const timer = setInterval(() => { //화살표 함수 
  console.log('YeYoung');
}, 3000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearInterval(timer); //3초마다 콘솔에 찍히는데, 그 중간에 h1의 내용을 클릭하게 되면 더이상 콘솔찍히지 않게 된다.
});