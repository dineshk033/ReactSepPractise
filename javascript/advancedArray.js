/***
 * advanced javascript predefined methods, it should be case sensitive
 * indexOf(value,afterindex(optional)) -> find the value and return the index, supose  not found return -1
 * includes()-> check value return true or false
 * findIndex(function(value,idx)=>{return condition }) -> check condition return values , not found -1
 */

const fruits = [
  "apple",
  "mango",
  "kiwi",
  "mango",
  "pine",
  "strawberry",
  "mango",
];

const person = [
  { id: 1 },
  { id: 2 },
  {
    id: 3,
  },
];
console.log(fruits.lastIndexOf("mango"));
console.log(fruits.includes("pine"));
console.log(fruits.includes("pineapple"));

const findID = person.findIndex(function (element, index) {
  return element.id === 31;
});
console.log(findID);

/**
 *splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
 *
 */

const temp1 = ["a", "e", "i", "a", "b", "e"];
temp1.splice(4, 2, "apple");
function findCount(arg, findText) {
  const result = [];

  for (let value of arg) {
    if (findText === value) {
      result.push(value);
    }
  }
  return result.length;
}
console.log(temp1);
console.log("find count", findCount(temp1, "i"));

var temp2 = [
  [1, 2],
  [100, 105],
];
function findRangeinarr(arr) {
  const result = [];
  arr.forEach(function (element) {
    const [start, end] = element;
    for (let i = start; i <= end; i++) {
      console.log(i);
      result.push(i);
    }
  });

  return result;
}

console.log(findRangeinarr(temp2));
