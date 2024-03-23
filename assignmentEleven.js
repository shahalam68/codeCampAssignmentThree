// Explanation of hoisting:
// Hoisting is like a magic trick in JavaScript where variables and functions are lifted (hoisted) to the top of their scope.

// Variable hoisting example:
console.log(myVar); // Output: undefined
var myVar = 10;
// Explanation:
// Even though we use myVar before it's declared, JavaScript moves the declaration to the top of the scope.
// So, it's as if the code is read like this:
// var myVar;
// console.log(myVar); // Output: undefined
// myVar = 10;

// Function hoisting example:
hoistedFunction(); // Output: "Hello, I'm a hoisted function!"
function hoistedFunction() {
  console.log("Hello, I'm a hoisted function!");
}
// Explanation:
// Functions are also hoisted to the top of their scope. So, we can use hoistedFunction before it's declared.

// Function expression example:
// nonHoistedFunction(); // This will throw an error!
const nonHoistedFunction = function () {
  console.log("I am not hoisted.");
};
// Explanation:
// Function expressions, like nonHoistedFunction, are not hoisted. So, trying to use them before their declaration causes an error.

// Hoisting behavior with var, let, and const:
console.log(x); // Output: undefined
var x = 5;
// Explanation:
// Variables declared with var are hoisted to the top of their scope and initialized with undefined.

// console.log(y); // This will throw an error!
let y = 10;
// Explanation:
// Variables declared with let and const are also hoisted, but they are not initialized. Trying to access them before their declaration causes an error.
