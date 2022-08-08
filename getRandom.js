export function random() { //default 키워드를 뺐으므로, import 해올때 {함수명}으로 가져와야 한다.
  return Math.floor(Math.random() * 10); // Math.random() * 10 (정수 1 자리수를 받아와서) -> floor () (내림을 하는것(소수점은 버리는것))
}

export const user = {
  name: 'Yeyoung',
  age: 88
};
