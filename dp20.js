// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var cities = [{city: "Tacoma", population:480000}, {city: "Seattle", population:2500000}, {city: "Yakima", population:35000}]

var index = 0
var new_cities = []
while(index < cities.length) {
var city = cities[index].city;
new_cities.push(city)
index++
}
console.log(new_cities)