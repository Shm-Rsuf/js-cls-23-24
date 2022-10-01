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

console.log('------fibonacci-------');
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(8));

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

console.log('--------Prime Or Not---------');
console.log(primeChekc(0));
console.log(primeChekc(3));
console.log(primeChekc(1));
console.log(primeChekc(10));
console.log(primeChekc(31));

/* FACTORIAL */
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log('------Factorial------');
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(8));

/* POWER OF TWO */

function powerOfTwo(num) {
  if (num < 1) return false;
  while (num > 1) {
    if (num % 2 !== 0) return false;
    num = num / 2;
  }
  return true;
}
console.log('-----PowerOfTwo------');
console.log(powerOfTwo(4));
console.log(powerOfTwo(9));
console.log(powerOfTwo(16));

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

console.log('----trapping water-----');
console.log(trappingRainWater([5, 3]));
console.log(trappingRainWater([5, 3, 4, 7, 3]));
console.log(trappingRainWater([5, 3, 4, 7, 3, 11, 8, 7]));

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

console.log('-----linearSearch------');
console.log(linearSearch([23, 34, 54, 22, 12], 54));
console.log(linearSearch([23, 34, 54, 22, 12], 55));
console.log(linearSearch([23, 34, 54, 22, 12], 12));


/*ES5 VS ES6 */
console.log('-------ES5 VS ES6-------');
var i = 13;

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log('Value: ' + i);

let i6 = 13;
for (let i6 = 0; i6 < 5; i6++) {
  console.log(i6);
}
console.log('Value: ' + i6);

/* IFFE-Imediate Invoke Function Expressions */

(function printName() {
  let msg = 'Hello, There.!'
  console.log(msg);
})();

(function myName() {
  let name = 'I am Usuf.';
  console.log(name);
})();

{
  let a = 5;
  let b = 10;
  let pi = 3.1416;
  console.log(a + b + pi);
}

{
  var myName1 = function () {
    var nameIs = 'Abdullah Al Zubayer';
    console.log(nameIs);
  }
}

myName1()


/* TEMPLATE LITERAL */
let nameS = 'Usuf Ali', age = 25, job = 'Student';
let fullName = `My name is ${nameS}. I am a ${job} & ${age} years old.`;

console.log('-----Template Literal-----');
console.log(nameS.startsWith('U'));
console.log(nameS.endsWith('u'));
console.log(fullName.includes('Student'));

/* ARROW FUNCTION */

// let afunc = function () {
//   console.log('A Demo ES5 Function Expression.');
// }

// afunc()
console.log('------Arrow Function------');
let afunc = () => console.log('A Demo ES6 Arrow Function.');

afunc()

const dob = [1998, 1999, 1996, 2000];
const ageOfSome = dob.map((birthYear) => new Date().getFullYear() - birthYear);
console.log(ageOfSome);

/* LEXICAL THIS IN ARROW FUNCTION */

let lex5 = {
  afunc: function () {
    console.log(this);
    return () => {
      console.log(this);
    }
  }
}

console.log('--------Lexical This------');
lex5.afunc()();