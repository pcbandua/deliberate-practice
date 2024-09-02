# Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

# class Song
#   attr_reader :name, :artist, :duration
#   attr_writer :name, :artist, :duration

#   def initialize(name, artist, duration)
#     @name = name
#     @artist = artist
#     @duration = duration
#   end

#   def artist_info
#     puts "The song #{name} is #{duration} long and is performed by #{artist}"
#   end
# end

# song = Song.new("Frontin", "The Neptunes", "3.44 mins")

# pp song
# song.artist_info

# Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle
  attr_reader :width, :height
  attr_writer :width, :height

  def initialize(width, height)
    @width = width
    @height = height
  end

  def area_calc
    width * height
  end
end

rectangle = Rectangle.new(45, 89)
pp rectangle
rectangle.area_calc
puts "the width is" #{rectangle.width}, "and height is" #{Rectangle.height}
