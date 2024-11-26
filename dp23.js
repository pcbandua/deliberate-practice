// // Use a nested loop to convert an array of number pairs into a single flattened array.
// // For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// const numberPairs = [
//   [2, 4],
//   [5, 9],
//   [8, 5],
//   [9, 6],
// ];

// let flatttendNumbers = [];
// var index1 = 0;

// while (index1 < numberPairs.length) {
//   let numberPair = numberPairs[index1];
//   let index2 = 0;
//   while (index2 < numberPair.length) {
//     let number = numberPair[index2];
//     flatttendNumbers.push(number);
//     index2 = index2 + 1;
//   }
//   index1 = index1 + 1;
// }
// console.log(flatttendNumbers);

// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

// numbers = [5, 56, 40071, 20];
// sum = 0;
// index = 0;

// while (index < numbers.length) {
//   sum = sum + numbers[index];
//   index = index + 1;
// }

// console.log(sum);

numbers = [5, 56, 40071, 20];
sum = 0;

numbers.forEach(function (number) {
  sum = sum + number;
});

console.log(sum);
