// Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

const x = 456

if (x == 10) {
  console.log(0)
}
  else {console.log(-1)
}


// Write a Location class with attributes for latitude and longitude.

class Location { 
  constructor (latitude, longitude) {
this.latitue = latitude
this.longitude = longitude
}
}
const location = new Location("33", "44");
console.log(location)


// Write a Rectangle class with attributes for width and height.

class Rectangle {
  constructor(width, height){
  this.width = width;
  this.height = height;
  }
}

const rectangle = new Rectangle(45, 85);
console.log(rectangle)

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person { 
  constructor (first_name, age){
    this.first_name = first_name;
    this.age = age;
}
}

function (first_name){
  const new_name = Tavares
  const all_caps = new Person (new_name).toUpperCase()
}

console.log(first_name)