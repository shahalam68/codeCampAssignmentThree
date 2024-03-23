function checkEnding(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }

  if (str1.length === 0 || str2.length === 0 || str2.length > str1.length) {
    return false;
  }

  let startLoop = str1.length - str2.length;

  for (let i = startLoop, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      return false;
    }
  }

  return true;
}
console.log(checkEnding(123, 234));
console.log(checkEnding("zi", "samurai"));
console.log(checkEnding("samurai", "rai")); // true
console.log(checkEnding("samurai", "zi")); // false
