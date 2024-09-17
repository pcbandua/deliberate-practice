// Write a Car class with attributes for make, model, year, and color.

class Car {
constructor (make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}
}

let car = new Car ("Honda", "Civic", "2024", "Beige");
console.log(car);


// Write a Point class with attributes for x, y, and z coordinates.

class Point{
  constructor(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  }
}

let point = new Point (2, 4, 5)
console.log(Point)

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

function firstLetter(string){
return string[0];
}
console.log(firstLetter ("Bring"));

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

// function trippleCombine(string){
//   let word1 = "Flight"
//   let word2 = "Delight"
//   let word3 = "Might"
//   let combination = word1 + " " + word2 + " " + word3
// }

// console.log(string)

function trippleCombine(string1, string2, string3) {
  return string1 + " " + string2 + " " + string3;
}
console.log(trippleCombine("flamengo", "pine", "carnivorous"))
