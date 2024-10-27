// Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

// create array
var strings = ["brave", "courage", "keep going"]

// create empty array
var string_length = [] 
// create index
var index = 0
// create while loop using index as a way to cycle through array with string length for each string calculated
while( index < strings.length) {
  var length = strings[index].length
  // push resut into empty array
  string_length.push(length)
  index ++
}
// print result
console.log(string_length)

// Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
