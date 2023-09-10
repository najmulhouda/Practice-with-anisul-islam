var number1 = Number(prompt("Enter a fist number"));
var number2 = Number(prompt("Enter a second number"));
var number3 = Number(prompt("Enter a third number"));

var result = number1>number2 && number1>number3 ? "number 1 is big" : number1<number2 && number3<number2 ? "number 2 is big" : "number 3 is big";

document.write(result);