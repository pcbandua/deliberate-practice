# array_1 = [2, 4, 6, 8]
# array_2 = [1, 3, 5, 7]

# def three_times
#   new_array = array_1 + array_2
#   puts new_array
# end

# pp three_times

puts "Script is running"

array_1 = [2, 4, 6, 8]
new_array = []
index = 0

# while index < array_1.length
#   arrayx3 = array_1.each do 3
#   index = index + 1
#   new_array << arrayx3
# end
while index < array_1.length
  new_array << array_1[index] * 3
end

pp new_array
