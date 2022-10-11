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

/**
 * find even and odd and splt in separate arrays
 */

function splitarrays(arg) {
  const even = [];
  const odd = [];

  for (let value of arg) {
    if (value % 2 === 0) {
      even.push(value);
    } else {
      odd.push(value);
    }
  }

  return [even, odd];
}

const response = splitarrays([1, 2, 5, 7, 6, 10]);

console.log(response);

/***
 * outPract = [5,4,3,2,1]
 * splice(startIndex,deletecount,elemen,,,,,elemnt-N) -> it will affect original array
 * delete values from 1st index to 3 deletecount -> splice(1,3)
 * we need insert record(1,2,3) before 1st index without delete any values-> splice(1,0,1,2,3)
 * we need to delete 1st index record and insert 1,4 values -> splice(1,1,1,4)
 */

outPract.splice(1, 3); // output:[5,1]
outPract.splice(1, 0, 1, 2, 3, 4); //ouput:[5, 1, 2, 3, 4, 1]
outPract.splice(0, 1, 0); //output:[0,1,2,3,4,1]
console.log(outPract);

/**
 * [0,1,2,3,4,1]
 * slice(start,end)-> return new array without affect parent;
 * slice(start)-> from starting index to end index values returned
 * slice(-value)-> consider from the end
 */

const spl = outPract.slice(1);
console.log(spl, outPract);
const conc = ["default"];

/**
 * concat -> create new array from two or more arrays
 */
const res = conc.concat([1, 2, 3], [10, 20, 30], ["a", "b", "c"]);

console.log(res, conc);
