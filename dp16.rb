# Write a while loop that prints the phrase "Around the world" 144 times.

index = 0

while index < 144
  pp "Around the world"
  index = index + 1
end

# Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

while true
  p "enter a word"
  user_input = gets.chomp
  if user_input.length > 5
    break
  end
end

# p "enter a word"
# p user_input = []

# index = 0
# if user_input.length < 5
#   p user input[index]
#   index = index + 1
# elsif user_input > 5
# break
