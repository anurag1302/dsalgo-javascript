//Palindrome

function palindrome(str) {
  if (!str) {
    return "Invalid Input";
  }
  let reversedStr = str
    .replace(" ", "")
    .split("")
    .reduce((rev, item) => item + rev, "");

  return str.replace(" ", "").toLowerCase() === reversedStr.toLowerCase();
}

console.log(palindrome("abba"));
console.log(palindrome("abcd"));
console.log(palindrome("racecar"));
console.log(palindrome("civic"));
console.log(palindrome("taco cat"));
console.log(palindrome("Aibohphobia"));
console.log(palindrome(null));
console.log(palindrome(""));
