// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

const { duration } = require("moment");

function number_string(number) {
  return number.toString();
}
console.log(number_string(45));

// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor (song_name, artist, duration) {
  this.song_name = song_name;
  this.artist = artist;
  this.duration = duration;
  }
}

function song_info (info) {
  console.log(song_name, artist, duration)
}

song_info() {
  console.log(`"The song" ${song_name}, "was recorded by" ${artist}, "and has a duration of" ${duration}`)
}

let song = (new Song ("Blah Bleh", "Womper", "3.45s"))
song_info(song)
song.song_info
