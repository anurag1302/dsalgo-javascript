//Palindrome
function isPalindrome(str) {
  if (!str) {
    return "Invalid Input";
  }
  let reversedStr = str
    .replace(/ +/g, "")
    .split("")
    .reduce((rev, item) => item + rev, "");

  return str.replace(/ +/g, "").toLowerCase() === reversedStr.toLowerCase();
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("abcd"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("taco cat"));
console.log(isPalindrome("Aibohphobia"));
console.log(isPalindrome(null));
console.log(isPalindrome(""));
console.log(isPalindrome("A Santa Lived As a Devil At NASA"));

//Alternate implementation using every() method
function isPalindromeUsingEvery(str) {
  if (!str) {
    return "Invalid Input";
  }
  let trimmedStr = str.replace(/ +/g, "");
  return trimmedStr.split("").every((item, index) => {
    return (
      item.toLowerCase() ===
      trimmedStr[trimmedStr.length - index - 1].toLowerCase()
    );
  });
}

console.log(isPalindromeUsingEvery("abba"));
console.log(isPalindromeUsingEvery("abcd"));
console.log(isPalindromeUsingEvery("racecar"));
console.log(isPalindromeUsingEvery("civic"));
console.log(isPalindromeUsingEvery("taco cat"));
console.log(isPalindromeUsingEvery("Aibohphobia"));
console.log(isPalindromeUsingEvery(null));
console.log(isPalindromeUsingEvery(""));
console.log(isPalindromeUsingEvery("A Santa Lived As a Devil At NASA"));
