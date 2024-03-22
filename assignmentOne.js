function minMaxLengthAverage(arr) {
  // Initialize variables
  let min = arr[0];
  let max = arr[0];
  let total = 0;
  let result = [];

  // Calculate minimum, maximum, and total sum
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    total += arr[i];
  }

  // Calculate average
  const average = total / arr.length;

  // Push results to the result array
  result.push(min, max, arr.length, average);

  // Return the result array
  return result;
}

// Sample array
const array = [7, 13, 3, 77, 100];

// Call the function and log the result
console.log(minMaxLengthAverage(array));
