//max characters
//"abbcccccddddd"
function maxCharacters(str) {
  const chars = {};
  let maxCount = 0;
  let maxCharacter = "";

  for (let i = 0; i < str.length; i++) {
    if (!chars[str[i]]) {
      chars[str[i]] = 1;
    } else {
      chars[str[i]]++;
    }
  }
  console.log(chars);

  for (let key in chars) {
    if (chars[key] > maxCount) {
      maxCount = chars[key];
      maxCharacter = key;
    }
  }

  return { maxCharacter, maxCount };
}

console.log(maxCharacters("abbcccccdddddde"));
