import _ from 'lodash'; //from `node_modules`!
import getType from './getType'; //getType.js //default 키워드가 붙은 파일은 하나의 파일에 하나의 export만 내보낼 수 있다!
import {random, user as yeyoung} from './getRandom'; //getRandom.js //default 키워드가 빠진 파일은 여러개의 export 작성 가능!

console.log(_.camelCase('the hello world')); //theHelloWorld
console.log(getType([1,2,3])); //Array
console.log(random(), random()); //randomly changed two numbers
console.log(yeyoung);
