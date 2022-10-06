/**task1-> get two values from user */

var a = prompt("Enter a value", "");
var b = prompt("enter b value", "");
// console.log(typeof a, a);
if (a === null) {
  a = "0";
}
/**If condition */

if (a === b) {
  console.log("both are equal");
}

/**show confirmation for even */

if (a % 2 === 0) {
  confirm("are you sure to proceed even");
  console.log("given a is even");
} else {
  console.log("Given a value is odd");
}
