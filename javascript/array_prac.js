/***
 * 1.literal
 * 2.constructor
 */

const arr = [1, 2, 3, 10, 20, 30];
/**get the values by index */

console.log(arr[2]);
/**arrayname.length -> to find the length of array
 * Array.isArray(variableName) -> to find the given value is array or not
 *
 */

console.log("length " + arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("last index", arr[arr.length - 1]);
/**to get last index in array */
const lastIndex = arr.length - 1;

/**reverse print in array */
for (let i = lastIndex; i >= 0; i--) {
  console.log(arr[i]);
}

/**for..of -> to iterate array return values*/
/**for..in -> to iterate object/array return keys*/

for (let value of arr) {
  console.log("index of", value);
}

const num = [5, 10, 20];

/**
 * push -> insert values at last index of array
 * pop -> last index remove from the array
 * shift -> first indexed values removed in array
 * unshift -> inser values in first index
 *  */
// delete num[1];
num.pop(); ///remove last value
num.shift(); //remove first value
num.push(1);
num.push(10);
num.push(100);
num.unshift(1000);
console.log(num);

const pract = [1, 2, 3, 4, 5];
/***
 * iterate the array
 * 1,2,3,4,5->push
 * 5,4,3,2,1 -> unshift
 */
//output:[5,4,3,2,1] reverse sort
const outPract = [];
for (let value of pract) {
  outPract.unshift(value);
}
console.log(outPract);
