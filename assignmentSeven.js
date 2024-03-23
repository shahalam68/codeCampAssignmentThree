function sumOfSquares(arr) {
  return arr.reduce((sum, num) => sum + num * num, 0);
}

function countEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).length;
}

function findMaximum(arr) {
  return Math.max(...arr);
}

function customOperation(arr, callback) {
  return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Sum of Squares:", sumOfSquares(numbers));
console.log("Count of Even Numbers:", countEvenNumbers(numbers));
console.log("Maximum Value:", findMaximum(numbers));
const squares = customOperation(numbers, (num) => num * num);
console.log("Squared Numbers:", squares);
