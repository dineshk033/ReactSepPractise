/**
 * object-. alwys key value pair comma split property
 */

const obj = {
  name: "MR.x",
  id: 51278,
  age: 24,
  getFullName: function () {
    return this.name + "..";
  },
};

const obj2 = {
  name: "MR.x",
  id: 51278,
  age: 24,
};
const obj3 = {
  name: "MR.x",
  id: 51278,
  age: 241,
};

console.log("comparison=>", JSON.stringify(obj2) === JSON.stringify(obj3));
/**
 * get the values from object
 */
const KEY = "name";

console.log(obj.getFullName());
console.log(obj["name"]);
console.log(obj[KEY]);

/**
 * set the value
 */
obj.name = "Dinesh";

/**
 * delete
 */

delete obj.age;

obj.isAdmin = true;
console.log(obj);

for (let key in obj) {
  console.log(obj[key]);
}
/**
 * JSON.parse => string to object/json
 * JSON.stringify -> convert to string
 */

/** ES5/ ES6
 * Object.keys
 * Object.values
 * objectname.hasownproperty
 */

var obj1 = JSON.stringify(obj);

console.log(obj1, typeof obj1);

obj1 = JSON.parse(obj1);

obj1.isAdmin = false;
console.log(obj1, obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(obj.hasOwnProperty("empid"));

if ("KEY" in obj) {
  console.log(obj[KEY]);
}

const race = ["a", "b", "a", "a", "b", "c"]; //output:{a:3,b:2,c:1}
