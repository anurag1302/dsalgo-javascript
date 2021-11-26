//max characters
//"abbcccccddddd"
function maxCharacters(str) {
  const chars = {};
  let maxCount = 0;
  let maxCharacter = "";

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    //if chars[temp] is undefined, keep the count as 1, else increase the count by +1
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
