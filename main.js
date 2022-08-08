import _ from 'lodash';

const usersA = [
  {userId: '1', name: 'HEROPY'},
  {userId: '2', name: 'Neo'}
];

const usersB = [
  {userId: '1', name: 'HEROPY'},
  {userId: '3', name: 'Amy'}
];

const usersC = usersA.concat(usersB); //concat() : 두 개의 배열을 합쳐서 새로운 객체 배열을 반환한다. //중복되는 데이터가 발생할 수 있다.
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC, 'userId')); //uniqBy(중복들어간 배열, 중복을 제거할 속성) : 중복된 데이터를 제거할 수 있다.

const usersD = _.unionBy(usersA, usersB, 'userId'); //unionBy(합칠배열1, 합칠배열2, 중복제거할 고유 속성) : 합치는 과정에서 중복 데이터를 제거한다.
console.log('unionBy', usersD);
