// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200

// let numbers = [5, 57, 43, 25460];
// let index = 0;
// let product = 1;

// while (index < numbers.length) {
//   product = product * numbers[index];
//   index = index + 1;
// }
// console.log(product);

// numbers.forEach(function (number) {
//   product = product * number;
// });
// console.log(product);

// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

let strings = ["lubricant", "engine", "exhaust"];
let index = 0;
let allStrings = "-";

// while (index < strings.length) {
//   let string = strings[index];
//   allStrings += string + "-";
//   index += 1;
// }

// console.log(allStrings);

strings.forEach(function (string) {
  allStrings += string + "-";
});

console.log(allStrings);
