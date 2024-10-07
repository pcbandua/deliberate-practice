// # Write a while loop that prints the phrase "Around the world" 144 times.

var word = "around the world"
 
var count = 0

while (count < 144) {
  console.log(word)
  count = count + 1
}

// # Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

while (true) {
  var user_input = window.prompt("enter a word:");
  if (user_input.length > 5) {
    break;
  }
}

// while (true) {
//   console.log("enter a word")
//   var user_input = gets.chomp
//   if user_input > 5
//   break
// }