/**
 * switch(expression){
 * case 0;
 * statement;
 * break;
 * case 1;
 * statement;
 * break;
 * default:
 * statement;
 * break;
 * }
 */

let x = 5; //prompt("Enter value", "");

let text = "";

switch (x) {
  case "0":
    text = "Entered value is 0";
    break;
  case "1":
    text = "Entered value is 1";
    break;
  default:
    text = "no match found";
    break;
}
console.log(text);

/**for looop
 * for(init,cond,inc){
 * statement
 * }
 * for(;cond){
 * }
 * continue -> just skip the loop
 * break -> stop the loop
 */

for (let i = 0; i < x; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

// console.log("outside block", i);
/***
 * var -> provide values to outside block,but it doesn't provide value to outside function
 * let & const -> doesn't provide values to outside block
 */
console.log("while loop=>>>>>>>>>>");
let i = 0;
while (i < x) {
  if (i % 2 === 1) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
