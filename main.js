// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(callback) {
  setTimeout(()=> {
    console.log('YeYoung!');
    callback();
  }, 3000);
};
timeout(() => { //timeout() 함수 내에 화살표 함수라는 콜백을 넣는다.
  console.log('Done!');
});

