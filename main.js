'use strict';
/*FIBONACCI SERIES 
********************
*/
function fibonacci(n) {
  const fibo = [0, 1];

  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

// console.log('------fibonacci-------');
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(8));

/* PRIME OR NOT 
******************* 
*/
function primeChekc(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log('--------Prime Or Not---------');
// console.log(primeChekc(0));
// console.log(primeChekc(3));
// console.log(primeChekc(1));
// console.log(primeChekc(10));
// console.log(primeChekc(31));

/* FACTORIAL */
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// console.log('------Factorial------');
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));
// console.log(factorial(8));

/* POWER OF TWO */

function powerOfTwo(num) {
  if (num < 1) return false;
  while (num > 1) {
    if (num % 2 !== 0) return false;
    num = num / 2;
  }
  return true;
}
// console.log('-----PowerOfTwo------');
// console.log(powerOfTwo(4));
// console.log(powerOfTwo(9));
// console.log(powerOfTwo(16));

/* TRAPPING RAIN WATER */
function trappingRainWater(height) {
  let water = 0;
  let leftMax = -1;
  let rightMax = -1;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  if (height.length < 3) return water;

  while (leftIndex <= rightIndex) {
    leftMax = height[leftIndex] > leftMax ? height[leftIndex] : leftMax;
    rightMax = height[rightIndex] > rightMax ? height[rightIndex] : rightMax;

    if (leftMax > rightMax) {
      water += rightMax - height[rightIndex];
      rightIndex--;
    } else {
      water += leftMax - height[leftIndex];
      leftIndex++;
    }
  }
  return water;
}

// console.log('----trapping water-----');
// console.log(trappingRainWater([5, 3]));
// console.log(trappingRainWater([5, 3, 4, 7, 3]));
// console.log(trappingRainWater([5, 3, 4, 7, 3, 11, 8, 7]));

/* SEARCH ALGORITHM */
/************LINEAR SEARCH***************/
//arr = [23,34,54,22,12], 54 ---> 2
// arr = [23,34,54,22,12], 55 ---> -1
// arr = [23,34,54,22,12], 12 ---> 4

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// console.log('-----linearSearch------');
// console.log(linearSearch([23, 34, 54, 22, 12], 54));
// console.log(linearSearch([23, 34, 54, 22, 12], 55));
// console.log(linearSearch([23, 34, 54, 22, 12], 12));


/*ES5 VS ES6 */
// console.log('-------ES5 VS ES6-------');
var i = 13;

for (var i = 0; i < 5; i++) {
  // console.log(i);
}
// console.log('Value: ' + i);

let i6 = 13;
for (let i6 = 0; i6 < 5; i6++) {
  // console.log(i6);
}
// console.log('Value: ' + i6);

/* IFFE-Imediate Invoke Function Expressions */

(function printName() {
  let msg = 'Hello, There.!'
  // console.log(msg);
})();

(function myName() {
  let name = 'I am Usuf.';
  // console.log(name);
})();

{
  let a = 5;
  let b = 10;
  let pi = 3.1416;
  // console.log(a + b + pi);
}

{
  var myName1 = function () {
    var nameIs = 'Abdullah Al Zubayer';
    // console.log(nameIs);
  }
}

myName1()


/* TEMPLATE LITERAL */
let nameS = 'Usuf Ali', age = 25, job = 'Student';
let fullName = `My name is ${nameS}. I am a ${job} & ${age} years old.`;

// console.log('-----Template Literal-----');
// console.log(nameS.startsWith('U'));
// console.log(nameS.endsWith('u'));
// console.log(fullName.includes('Student'));

/* ARROW FUNCTION */

// let afunc = function () {
//   console.log('A Demo ES5 Function Expression.');
// }

// afunc()
// console.log('------Arrow Function------');
// let afunc = () => console.log('A Demo ES6 Arrow Function.');

// afunc()

const dob = [1998, 1999, 1996, 2000];
const ageOfSome = dob.map((birthYear) => new Date().getFullYear() - birthYear);
// console.log(ageOfSome);

/* LEXICAL THIS IN ARROW FUNCTION */

let lex5 = {
  afunc: function () {
    // console.log(this);
    return () => {
      // console.log(this);
    }
  }
}

// console.log('--------Lexical This------');
lex5.afunc()();

/* JS-CLS-24 */
/****************************/
let a = 0.1, b = 0.2;
let sum = (a + b).toFixed(2)
// console.log(+sum);

/* PARSING 
********************
কোনো কিছু থেকে কোনো সংখাকে বের করে নিয়ে আসার যে প্রক্রিয়া তাকেই মুলুত পারসিং(PARSE) করা বলে।
*/

// console.log(Number.parseFloat('16.5rem'));
// console.log(Number.parseInt('2.4rem'));
// console.log(Number.parseFloat('8rem'));
// console.log(Number.parseFloat('5.6rem'));

// console.log(parseInt('32px', 8));//assume base 8
// console.log(parseInt('100px', 2)); // assume base 2

/* MATH OPRERATIONS */

// console.log(Math.abs(-10.25));
// console.log(Math.sqrt(25));
// console.log(64 ** (1 / 2));
// console.log(Number((29 ** (1 / 3)).toFixed()));

// const arr = [10, 35, 22, 65, 27, 30]
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// console.log(Math.PI * 2.5 * 2.5);
// console.log(Math.PI * 2.5 ** 2);

// console.log(Math.trunc(Math.random() * 5));

// console.log(12_95_750);
// console.log(1_97_20_350);

// console.log(10000 * 1000000);
// console.log(10000000000n * 1000000000000000n);

// console.log(10n === 10);
// console.log(typeof 10n);

/* DATES CONSTRUCTOR */
// const today = new Date();
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.getTime());

// console.log(new Date(2020, 9, 1, 16, 28, 30));

/* INTL FORMATES SYSTEM */
/****************************/
/* TIME FORMATING IN INTL*/

const date = new Date();

console.log(new Intl.DateTimeFormat('en-US').format(date));

console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));

const options = {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: 'true'
}
console.log(new Intl.DateTimeFormat('en-GB', options).format(date));

/* NUMBER FORMATING */
const number = 123456.789;

console.log(new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(number));
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number));
console.log(new Intl.NumberFormat('bn-BD', { style: 'currency', currency: 'BDT' }).format(number));

/* SET TIME OUT & SET TIME INTERVAL */
console.log('Hello');
setTimeout(() => {
  console.log('Janina.!!');
}, 3000)

console.log('World');

// setInterval(() => {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);
