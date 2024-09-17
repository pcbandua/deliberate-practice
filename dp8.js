
// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

// var words = ["lap", "lever", "lemonade", "liver"]

// function selectEvenItems() {
//   let result = []
//   let i = 0
//   words.forEach((string, i) => {
//     if (index % 2 == 0) {
//       result.push(string);
//     }
//     });
//   console.log(result)
// }

// selectEvenItems();

// var words = ["lap", "lever", "lemonade", "liver"];

// function selectEvenItems() {
//   let result = [];  // Declare result array
//   let i = 0;  // Declare i for indexing

//   words.forEach((string, index) => {
//     if (index % 2 === 0) {  // Check if the index is even
//       result.push(string);  // Add string to result array
//     }
//   });

//   console.log(result);
// }

// selectEvenItems();  // Output: ["lap", "lemonade"]


// Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// let r = 500
// if (r == 10) {
//   console.log(0)}
//   else {
//   console.log(-1)
// // }

// var t = 432

// if (t == 10) {
//   console.log(0)
// }
// else {
//   console.log(-1)
// }


// Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// let ff = 43
// if (ff < 10) {
//   console.log(9);
// }
// else if (ff < 20) {
// console.log(19);
// }
// else if (ff < 30) {
//   console.log (29);
// }
// else {
//   console.log (-1);
// }

// Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

// var number = 21

// if (number == 100) {
//   console.log(100) 
// }
// else if (number == 99) {
//   console.log(99)
// }
// else {
//   console.log(0)
// }

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

let first = "Pratik"
let last = "Kumar"

console.log(first + " " + last)