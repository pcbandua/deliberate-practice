// Start with an array of numbers and create a new array with each number converted into a string.
// For example, [1, 2, 3] becomes ["1", "2", "3"].

// create array
var numbers = [45, 65, 112, 33, 40]

// create empty array
var new_numbers = []

// create index
var index = 0
// create while loop 
while (index < numbers.length){
  // create new variable to define looping action
var number = numbers[index].toString()
// push new variale into empty array
new_numbers.push(number)
// deifne index to cycle through objects in array
index++
}
// console log answer
console.log(new_numbers)




