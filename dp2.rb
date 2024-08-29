# # # # Write a Song class with attributes for name, artist, and duration.

# # # class Song
# # #   def initialize(name, artist, duration)
# # #     @name = name
# # #     @artist = artist
# # #     @duration = duration
# # #   end
# # # end

# # # song = Song.new("She Wants to Move", "NERD", "3:45 mins")

# # # pp song

# # Write a Rectangle class with attributes for width and height.

# # class Rectangle
# #   def initialize(width, height)
# #     @width = width
# #     @height = height
# #   end
# # end

# # shape = Rectangle.new("35cm", "96cm")

# # pp shape

# # Write a Car class with attributes for make, model, year, and color.

# class Car
#   def initialize(make, model, year, color)
#     @make = make
#     @model = model
#     @year = year
#     @color = color
#   end
# end

# vehicle = Car.new("Honda", "Accord", "2024", "Bluegrey")
# pp vehicle

# Write a Book class with attributes for title, author, and year.

class Book
  def initialize(title, author, year)
    @title = title
    @author = author
    @year = year
  end
end

bookstore_add = Book.new("Born a Sin", "Trevor Noah", "2021")

pp bookstore_add
