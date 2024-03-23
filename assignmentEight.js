// Function to create a counter with private count variable
function counter() {
  let count = 0;

  // Inner function to increment the count variable
  function increment() {
    count++;
    return count;
  }

  return increment;
}

// Function to create a password checker with private password variable
function makePassword(password) {
  return function (guess) {
    return guess === password;
  };
}

// Function to create a counter with step value
function counterWithStep(step = 1) {
  let count = 0;

  // Inner function to increment the count variable by the specified step value
  function increment() {
    count += step;
    return count;
  }

  return increment;
}

// Test scenarios
const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

const checkPassword = makePassword("mySecretPassword");
console.log(checkPassword("password123")); // Output: false
console.log(checkPassword("mySecretPassword")); // Output: true

const incrementByTwo = counterWithStep(2);
console.log(incrementByTwo()); // Output: 2
console.log(incrementByTwo()); // Output: 4
