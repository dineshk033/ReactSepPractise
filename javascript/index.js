// single line comment
/**  
multi
line
comment
suffix - ++,--
+= -  firstNumber = firstNumber +4
!= => both not equal values , !==> both values and datatypes should not equal
== -> check same values , === -> check sames values as wel as datatype
*/

//maths operator %-> remainder **-> 2**2 -> 2

var firstNumber = 2;
var second = "2";
var third = 3;

third = third ?? 1;
/***
 * ternary operator
 * condition ? truthy : falsy
 */
third > 0 ? (firstNumber = 10) : (firstNumber = 20);
// firstNumber++; firstNumber = firstNumber +4;
console.log(third ?? "isundefined", firstNumber);

/**
 * truthy -> 'q','sdasd',i.e,1,2,...9,[],{},true
 * false -> false,0,'',undefined,null
 */

/***
 * ?? =>when we have undefined, it will return default value
 * || => for falsy value, it will return default value
 */

//simple if statement

/**
 * !-> inverse and return boolean
 * !!-> return boolean based on truthy
 * !0 -> true
 * !1-> false
 * !!0-> false
 * !!"Asd"->true
 */
console.log(!"asd");
if (third === 0) {
  /**multi statement */
  console.log("enterd if condition...");
} else if (third > 0) {
  console.log("greater than zero");
} else {
  console.log("entered else condition");
}
