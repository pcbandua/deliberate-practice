// // // Use a nested loop to convert an array of number pairs into a single flattened array.
// // // For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

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

// // Start with an array of numbers and compute the sum of all the numbers.
// // For example, [5, 10, 8, 3] becomes 26.

// // numbers = [5, 56, 40071, 20];
// // sum = 0;
// // index = 0;

// // while (index < numbers.length) {
// //   sum = sum + numbers[index];
// //   index = index + 1;
// // }

// // console.log(sum);

// // Alternate Way

// numbers = [5, 56, 40071, 20];
// sum = 0;

// numbers.forEach(function (number) {
//   sum = sum + number;
// });

// console.log(sum);

// // Start with an array of strings and combine them all into a single string.
// // For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// let strings = ["change", "oppenness", "guidance", "wisdom"];
// stringsNew = "";
// index = 0;

// // // while (index < strings.length) {
// // //   stringsNew = stringsNew + strings[index];
// // //   index = index + 1;
// // // }

// // // console.log(stringsNew);

// strings.forEach(function (string) {
//   stringsNew = stringsNew + string;
// });
// console.log(stringsNew);

// // Start with an array of hashes and compute the sum of the prices (from the :price key).
// // For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// let productPrices = [
//   { name: "toothpaste", price: 2 },
//   { name: "map", price: 5 },
//   { name: "disc", price: 10 },
// ];

// let prices = 0;
// index = 0;

// // // while (index < productPrices.length) {
// // //   prices = prices + productPrices[index].price;
// // //   index = index + 1;
// // // }
// // // console.log(prices);

// productPrices.forEach(function (productPrice) {
//   prices = prices + productPrice.price;
// });

// console.log(prices);

// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3

// let numbers = [1, 9, 45, -5];
// let minimum = 0;
// let index = 0;

// minimum = findMin(numbers);
// console.log(minimum);
