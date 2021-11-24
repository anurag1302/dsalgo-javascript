//using for loop
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

console.log(reverseString("Anurag"));
console.log(reverseString("Hello World !!!"));

// 1. convert string to array
// 2. apply reverse() method on the array
// 3. convert the array back to string
function reverseStringUsingReverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringUsingReverse("Anurag"));
console.log(reverseStringUsingReverse("Hello World !!!"));
