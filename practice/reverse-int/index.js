//Reverse Int

// function reverseInt(number) {
//   if (!number || isNaN(number)) {
//     return "Invalid format - input is not a integer";
//   }
//   let strArray = number.toString().split("");
//   let isNegative = strArray.indexOf("-") !== -1 ? true : false;
//   let reversedStr = strArray.reverse().join("");
//   reversedStr = isNegative ? `${"-"}${reversedStr}` : reversedStr;
//   return parseInt(reversedStr);
// }

// console.log(reverseInt(123));
// console.log(reverseInt(-981));
// console.log(reverseInt(500));
// console.log(reverseInt(-900));
// console.log(reverseInt(-900123));
// console.log(reverseInt(""));
// console.log(reverseInt("hello world"));
// console.log(reverseInt(null));
// console.log(reverseInt(NaN));

//Alternate approach using Math.sign() method
function reverseIntAlternate(number) {
  if (!number || isNaN(number)) {
    return "Invalid format - input is not a integer";
  }

  let reversedNumber = parseInt(number.toString().split("").reverse().join(""));

  return reversedNumber * Math.sign(number);
}

console.log(reverseIntAlternate(123));
console.log(reverseIntAlternate(-981));
console.log(reverseIntAlternate(500));
console.log(reverseIntAlternate(-900));
console.log(reverseIntAlternate(-900123));
console.log(reverseIntAlternate(""));
console.log(reverseIntAlternate("hello world"));
console.log(reverseIntAlternate(null));
console.log(reverseIntAlternate(NaN));
