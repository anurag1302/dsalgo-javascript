//max characters implementation using for-of loop & object.hasOwnProperty() method
function maxCharacters(str) {
  const chars = {};
  let maxCount = 0;
  let maxCharacter = "";

  for (let char of str) {
    chars[char] = chars.hasOwnProperty(char) ? chars[char] + 1 : 1;
  }
  //a loop can be run thru an OBJECT via for-in loop
  for (let key in chars) {
    if (chars[key] > maxCount) {
      maxCount = chars[key];
      maxCharacter = key;
    }
  }

  return { maxCharacter, maxCount };
}

console.log(maxCharacters("abbcccccdddddde"));
console.log(maxCharacters("11111 22 3 4 0009999999"));
