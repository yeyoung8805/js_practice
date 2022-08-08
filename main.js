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

localStorage.setItem('user', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('user')));

// age 만 85 에서 22로 변경하여 저장하고 싶을때
const str = localStorage.getItem('user');
const obj = JSON.parse(str); //JS에서 변경할 수 있는 데이터 형식으로 바꿈
obj.age = 22;
console.log(obj);

localStorage.setItem('user', JSON.stringify(obj)); //localStorage에 저장할땐 다시 stringify문자화 한다.
