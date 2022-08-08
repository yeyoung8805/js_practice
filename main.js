import _ from 'lodash'; //from `node_modules`!
import getType from './getType'; //getType.js
import {random} from './getRandom'; //getRandom.js

console.log(_.camelCase('the hello world')); //theHelloWorld
console.log(getType([1,2,3])); //Array
console.log(random(), random()); //randomly changed two numbers
