# Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song
  def initialize(name, artist, duration)
    @name = name
    @artist = artist
    @duration = duration
  end

  def artist_info
    puts "The song #{name} by #{artist} has a duration of #{duration}"
  end
end

pharell = Song.new("Frontin", "Pharell", "3:45 mins")

pp pharell

pharell.artist_info
