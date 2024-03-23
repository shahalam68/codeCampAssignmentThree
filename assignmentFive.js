function doubleChar(str) {
  if (typeof str !== "string") {
    return null;
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}

console.log(doubleChar("exercise"));
console.log(doubleChar(123));
console.log(doubleChar());
