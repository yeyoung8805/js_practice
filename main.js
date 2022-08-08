// Storage (local, session)
// 1. local storage : 데이터를 반영구적으로 사용 가능
// 2. session storage : 페이지를 닫을때, 데이터가 사라짐

const user = {
  name: "HEROPY",
  age: 85,
  emails: [
    'thesecon@gmailcom',
    'neo@zillinks.com'
  ],
};

// localStorage.setItem('user', user);
// JSON.stringify(user);
localStorage.setItem('user', JSON.stringify(user)); //String 형태로 localStorage에 저장된다.
console.log(JSON.parse(localStorage.getItem('user'))); //자바스크립트에서 해석되는 형태로 가져온다.
localStorage.removeItem('user'); //콘솔에는 찍히더라도 F12 > Application > localStorage 에는 값과 밸류가 사라진다.
