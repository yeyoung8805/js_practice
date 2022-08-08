import _ from 'lodash'; //from `node_modules`!
import getType from './getType'; //getType.js //default 키워드가 붙은 파일은 하나의 파일에 하나의 export만 내보낼 수 있다!
// import {random, user as yeyoung} from './getRandom'; //getRandom.js //default 키워드가 빠진 파일은 여러개의 export 작성 가능!
import * as R from './getRandom'; //random 과 user 를 한번에 R(의미없음)로 가져오고 싶을때

console.log(_.camelCase('the hello world')); //theHelloWorld
console.log(getType([1,2,3])); //Array
// console.log(random(), random()); //randomly changed two numbers
console.log(R);
