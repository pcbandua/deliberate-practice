// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

const array = [56, 2, 70, 1];
console.log(Math.min(...array));
numbersMin = array[0];
let index = 0;

while (index < array.length) {
  let numberMin = array[index];
  if (numberMin < numbersMin) {
    numbersMin = array;
  }
  index = index + 1;
}
console.log(numbersMin);

// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// Create array
// let arrayNames = [
//   { name: "erandscope", price: 40 },
//   { name: "absynth", price: 65 },
//   { name: "camel", price: 24 },
// ];
// Creater index
// let index = 0;
// Create empty string variable
// let name = "";
// create while loop
// while (index < arrayNames.length) {
// create loop instruction that go through each has and check with name has the shortest characters
//   let minName = Math.min(arrayNames[0].length);

//   index += 1;
// }

// print new result
