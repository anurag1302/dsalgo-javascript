//max characters implementation
function maxCharacters(str) {
  const chars = {};
  let maxCount = 0;
  let maxCharacter = "";

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    //if there does not exist any value for a character key in the chars object
    //it is safe to say that the character key has been encountered for the 1st time, hence
    //to compare it we negate the undefined value to truthy and assign the value as 1 to the key
    //else we increment it by 1
    chars[temp] = !chars[temp] ? 1 : chars[temp] + 1;
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
