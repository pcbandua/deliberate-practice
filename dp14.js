// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var x = [{name: "hat", price: 4}, {name: "octopus", price: 23}, {name: "beef", price: 65}]
var new_items = []
var index = 0

while (index < x.length) {
  var item = x[index];
  if(item.price > 5) {
    new_items.push(item)
  }
  index++;
} 
console.log(new_items)


// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [2, 13, 43, 94, 68]
var less_numbers = []

numbers.forEach(function (new_numbers){
  if (new_numbers < 20){
    less_numbers.push(new_numbers);
  }
})
console.log(less_numbers)