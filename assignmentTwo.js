function sortNumsAscending(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  } else {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (typeof arr[i] !== "number" || isNaN(arr[i])) {
        return [];
      }
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}


const mixDataArray
const numberArray = [45, 34, 23, 12, 7];
console.log(sortNumsAscending());
console.log(sortNumsAscending(array)); 
console.log(sortNumsAscending(123)); 
console.log(sortNumsAscending("hello")); 
