// # Start with an array of numbers and create a new array with only the numbers less than 20.
// # For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [45, 42, 10, 32]
new_numbers = []
var index = 0

while (index < numbers.length) {
  var number = numbers[index];
  if (number < 20) {
  new_numbers.push(number);
  }
  index = index + 1
}
console.log(new_numbers)
