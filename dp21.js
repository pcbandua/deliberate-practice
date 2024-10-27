// CONTENT: Map an array to a new array with some computation performed on each item

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

// create array 
let numbers = [45, 44, 38]
// create empty array
let new_numbers = []
// create index
index = 0
// create while loop, declare new variable, cycle through array with each number divided by 2
while (index < numbers.length){
  // create variable to cycle through array
  let number = numbers[index]/2
  // push into new array 
  new_numbers.push(number)
  index++
} 
// print result 
console.log(new_numbers)


// Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// create arry of hashes 
var students = [{name: "Jerry", age: 45}, {name: "Antunar", age: 18}, {name: "Indira", age: 23}]
// create new empty array
var students_ages = []
index = 0
// create index 

// create while loop to cycle through each hash while selecting the value of the age variable 
while (index < students.length){
// create new variable to do the cylcing for each has
var ages = students[index].age * 2
// push new vairable into empty array 
students_ages.push(ages)
index++
}
// print array 
console.log(students_ages)