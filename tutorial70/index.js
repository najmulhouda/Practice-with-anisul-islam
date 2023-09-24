var number = [1, 2, 3, 4, 5];
var newNumber = [];
number.forEach(function (item) {
  newNumber.push(item * 2);
});
console.log(newNumber);

var number = [1, 2, 3, 4, 5];

number.forEach(function (item, index, array) {
  array[index] = item + 5;
});
console.log(number);
