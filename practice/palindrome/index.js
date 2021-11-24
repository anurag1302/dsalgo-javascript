//Palindrome

// function palindrome(str) {
//   if (!str) {
//     return "Invalid Input";
//   }
//   let reversedStr = str
//     .replace(" ", "")
//     .split("")
//     .reduce((rev, item) => item + rev, "");

//   return str.replace(" ", "").toLowerCase() === reversedStr.toLowerCase();
// }

// console.log(palindrome("abba"));
// console.log(palindrome("abcd"));
// console.log(palindrome("racecar"));
// console.log(palindrome("civic"));
// console.log(palindrome("taco cat"));
// console.log(palindrome("Aibohphobia"));
// console.log(palindrome(null));
// console.log(palindrome(""));

function palindromeUsingEvery(str) {
  if (!str) {
    return "Invalid Input";
  }
  return str
    .replace(" ", "")
    .split("")
    .every((item, index) => {
      return item.toLowerCase() === str[str.length - index - 1].toLowerCase();
    });
}

console.log(palindromeUsingEvery("abba"));
console.log(palindromeUsingEvery("abcd"));
console.log(palindromeUsingEvery("racecar"));
console.log(palindromeUsingEvery("civic"));
console.log(palindromeUsingEvery("taco cat"));
console.log(palindromeUsingEvery("Aibohphobia"));
console.log(palindromeUsingEvery(null));
console.log(palindromeUsingEvery(""));
