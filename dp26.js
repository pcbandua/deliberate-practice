// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

// define arrray variable
let numbers = [65, 1, 45, 2, 9, 7, 93];

// definte index
let index = 0;

// define min variab;e
let numberMin = numbers[0];
// create if loop

while (index < numbers.length) {
  let number = numbers[index];
  if (number < numberMin) {
    numberMin = number;
  }
  index = index + 1;
}
// print minimum number
console.log(numberMin);

// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

let strings = ["ondaka", "palavras", "yetu", "pamossi"];
index;
