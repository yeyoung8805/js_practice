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
localStorage.setItem('user', JSON.stringify(user));
