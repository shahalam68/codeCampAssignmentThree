function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}

function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

function findMaximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function customOperation(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

function square(num) {
  return num * num;
}

function isEven(num) {
  return num % 2 === 0;
}

function calculate(arr, callback) {
  return callback(arr);
}

console.log("Sum of Squares:", calculate(numbers, sumOfSquares));
console.log("Count Even Numbers:", calculate(numbers, countEvenNumbers));
console.log("Find Maximum:", calculate(numbers, findMaximum));
console.log(
  "Custom Operation (Doubled):",
  customOperation(numbers, (num) => num * 2)
);
