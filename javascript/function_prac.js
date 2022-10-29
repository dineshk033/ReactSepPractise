"use strict";
/***
 * spread & rest operator denotion symbol ...
 *
 */

const arr = [1, 2, 3, 4, 5];
const arr1 = [0, 10, 20, 30];
const concatArr = [...arr, "add", "del", arr1];

console.log(arr, concatArr);

const Person = {
  name: "sads",
  age: 23,
  empid: 4534,
  num: [1, 3, 4, 5],
};

console.log(
  { ...Person, key: "asd", age: 25, empID: 32432, key: "changed" },
  Person
);
/***
 *
 * destructing
 */

const { age, ...rest } = Person;

console.log(age, rest);

function check(a, b, ...arg) {
  console.log(a, b, arg);
}

check(1, 2, 3, 4);
check(1, 2);

/***
 *arrow function-> shorthand function and also return single statement
 resolve this problem, it will bind to the current function
 *
 */

Person.getNumber = function () {
  console.log(this);
  return this.num.forEach((item) => {
    console.log(this);
    console.log(this.age, item);
    return item;
  });
};

Person.getNumber();

/***
 * function(){
 *
 * }
 *
 * ()=>{
 * }
 *
 * ()=>1212
 *
 */

console.log(
  arr.map((item) => {
    console.log(item);
    return item * 2;
  })
);

console.log(
  arr.map(function (item) {
    return item * 2;
  })
);

/***
 * IIF
 * call
 * apply
 * bind
 * hoisting
 * closure --> var/let
 * Promises
 * async await
 * Math
 */
console.log(a);
var a;
if (true) {
  b = 10;
  console.log(b);
  var b;
}
// var truncateSentence = function (s, k) {
//   let i = 331453;
//   while (i > 0) {
//     console.log(i);
//     for (let j = k[0]; j <= k[1]; j++) {
//       if (i % j !== 0) {
//         break;
//       }
//       if (j === k[1]) {
//         console.log(j, k[1]);
//         return i;
//       }
//       console.log(i + " " + j + "remainder" + (i % j));
//     }
//     i++;
//   }
// };

// const res = truncateSentence([2519, 2521], [1, 10]);

// console.log("output...." + res);

/***
 * Immediate invoke function --> IIF
 *
 *
 */

(function () {
  console.log("i'm logged");
})();

/**
 * bind ->
 * call
 * appply
 */

console.log(Person);

function getDetails(rest) {
  console.log(this, rest);
  return this.empid + " " + this.name;
}

// const temp = getDetails.bind(Person);

// console.log(temp());

console.log(getDetails.apply(Person, ["Greting", "Dinesh"]));

/**
 *
 * closures
 */

const closuresPra = function x(coun) {
  var count = coun;
  return function y() {
    return count++;
  };
};
const inner = closuresPra(20);

console.log(inner());
console.log(inner());
console.log(inner());
