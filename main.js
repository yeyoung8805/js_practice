import _ from 'lodash';

const usersA = [
  {userId: '1', name: 'HEROPY'},
  {userId: '2', name: 'Neo'}
];

const usersB = [
  {userId: '1', name: 'HEROPY'},
  {userId: '3', name: 'Amy'}
];

const usersC = usersA.concat(usersB);
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC, 'userId'));

const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy', usersD);
