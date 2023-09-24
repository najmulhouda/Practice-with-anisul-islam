"use strict";
// spred operator

// function addNmber(x, y, z) {
//   return x + y + z;
// }
// let numbers = [1, 2, 3];
// console.log(addNmber(...numbers));

// let number1 = [5, 6, 7, ...numbers];
// console.log(number1);

let a = {
  name: "John",
  age: 25,
};
let b = {
  job: "teacher",
  address: "London",
};

let c = { ...a, ...b };
console.log(c);
