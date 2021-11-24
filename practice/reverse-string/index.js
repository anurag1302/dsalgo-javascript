//using for loop
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

console.log(reverseString("Brown Fox"));
console.log(reverseString("Hello World 1 !!!"));

//using for-of loop
function reverseUsingForOfLoop(str) {
  let result = "";
  for (let item of str) {
    result = item + result;
  }
  return result;
}

console.log(reverseUsingForOfLoop("Black Fox"));
console.log(reverseUsingForOfLoop("Hello World 2 !!!"));

// 1. convert string to array
// 2. apply reverse() method on the array
// 3. convert the array back to string
function reverseStringUsingReverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringUsingReverse("Blue Fox"));
console.log(reverseStringUsingReverse("Hello World 3 !!!"));

//using reduce method to reverse a string
function reverseUsingReduce(str) {
  return str.split("").reduce((rev, item) => item + rev, "");
}
console.log(reverseUsingReduce("Red Fox"));
console.log(reverseUsingReduce("Hello World 4 !!!"));
