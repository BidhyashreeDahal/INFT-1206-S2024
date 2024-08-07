// console.log("Script is running...");

// Variables -> Containers for Data

// Primitive Data Types
// String
// Number
// Boolean (True or False)
// Null (lack of value)
// Undefined{Variable that has not assigned value}
// BigInt
// Symbol

// There are 4 ways we can declare a new variable. Let, Const, Var and none

// Var is an old keyword that is no longer used commonly. It defines a variable in the current scope
// var introString = "Intro to JavaScript";
// Let is a more common keyword that behaves similar to var
// let number = 5;
// Const is used to declare a variable who's value cannot be re-assigned (i.e. changed)
// const isJavaScriptFun = true;
// We can also omit all of these to declare a variable in the global scope
// secondNumber = 10;

// isJavaScriptFun = false;

// console.log(isJavaScriptFun);

// --------------------------------

// String Methods - JavaScript comes with built-in string methods that are avaialble to us by default so that we can manipulate and work with strings

let food = "Tacos";

// console.log(food.toUpperCase()); // TACOS
// console.log(food.toLowerCase()); // tacos
// console.log(food[0] + food[1]); // The first two letters of Tacos
// console.log(food.concat(food)); // TacosTacos
// console.log(food.charAt(3)); // Returns character at index 3 of the string "Tacos" -> T -> 0, a -> 1, c -> 2, o -> 3
// console.log(food.includes("co")); // True
// console.log(food.replace("c", "k")); // Takos => Only replace the first instance of C
//console.log(food.replaceAll("c", "k")); // Takos   => To replace all the c
// console.log(food.slice(0, 3)); // Tac -> slicing the string from index 0 to index 3
// console.log(food.split("")); // ['T', 'a', 'c', 'o', 's']
// console.log(food.split("c")); // ['Ta', 'os']

// ---------------------------------

// Numbers & Operators

let a = 5;
let b = 10;

// console.log(a + b); // 15
// console.log(b - a); // 5
// console.log(b / a); // 2
// console.log(a * b); // 50
// console.log(b % a); // % represents the remainder after division
// Math is a built-in JavaScript object available for us to use when needing to perform complex mathematical calculations
// console.log(Math.sqrt(a + b)); // 3.87
// console.log(Math.max(a, b)); // 10 (b)

let c = 7;
let d = 12;
let e = "12";

// console.log(c == d); // returns FALSE
// console.log(d == e); // JavaScript does something called type coersion where it automatically converts the string to a number for the comparison operator - returns TRUE
// console.log(d === e); // The triple === in JavaScript compares the value AND the type of the variable, whereas the double == only compares value - returns FALSE
// console.log(c > d); // return FALSE
// console.log(c < d); // return TRUE
// console.log(c != d); // return TRUE, The ! is called the NOT operator

// console.log(a < b || c > d); // returns TRUE -> || OR operator
// console.log(a < b && c > d); // returns FALSE -> && AND operator

// ------------------------------

// IF ELSE Conditions

let firstNumber = prompt("Please choose your first number:");

let operand = prompt(
  "Please choose your operator from the following choices: '+', '-', '*', '/'"
);

let secondNumber = prompt("Please choose your second number:");

// We are going to use the result from the user input via the prompt to build a mini calculator
let result;

if (operand == "+") {
  result = firstNumber + secondNumber;
} else if (operand == "-") {
  result = firstNumber - secondNumber;
} else if (operand == "*") {
  result = firstNumber * secondNumber;
} else {
  result = firstNumber / secondNumber;
}

console.log("The result of the calculator is: " + result);