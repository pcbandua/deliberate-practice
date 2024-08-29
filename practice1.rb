# Write a program that uses a variable to store a number, then prints that number plus 10.

x = 49

p x + 10

# Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

numbers = [59, 45]

numbers_multiplied = numbers[0] * numbers[1]
p numbers_multiplied

# Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

word = "BING"

p word
puts word.downcase

# Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

number = 6005

if number == 10
  puts 0
else puts -1 end

# Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

number = 4543

if number < 10
  puts -1
elsif number > 10
  puts 1
else number == 10
  puts 0 end
