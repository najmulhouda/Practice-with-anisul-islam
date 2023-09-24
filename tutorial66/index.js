"use strict";

// function message(text = "hello") {
//   console.log("text: " + text);
// }
// message("i love javascript");
// message();

function printNumbers(x, y, ...z) {
  console.log(`x: ${x + y} z: ${z}`);
}

printNumbers(1, 2, 3, 4, 5, 6);
