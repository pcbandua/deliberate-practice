# Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

def words(string, string1, string2)
  words_combined = string + " " + string1 + " " + string2
  pp words_combined
end

pp words("fish", "rust", "lychee")
