let a = "Dinesh";
let b = "It\"s Dine'sh";
/**
 * \ -> ' " \
 */

const Person = {
  id: 1,
  age: 24,
  name: "x",
};
console.log(Object.keys(Person).length);

/**
 * get the char
 * a[]
 * chartAt()
 */

for (let i = 0; i < a.length; i++) {
  a[i] = "Asd";
}

console.log(a.replace(/a/gi, "i"));

console.log(
  a
    .split("")
    .sort(function (a, b) {
      return a > b ? 1 : -1;
    })
    .join("")
);
