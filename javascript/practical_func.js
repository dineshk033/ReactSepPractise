/**
 * function function_name(){
 *
 *statement;
 * }
 */

function getFullName(firstName, surname) {
  if (surname == undefined) {
    return firstName + "....";
  }
  return firstName + surname;
}

const result = getFullName("mr.x", "MBA");

console.log(result);
/**get salry and bonus , return the sum of saly and bonus */
