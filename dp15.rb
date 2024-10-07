# Start with an array of strings and create a new array with each string upcased.
# For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

# Create a variable assigned to an array with strings in it
lower_case = ["soccer", "engine", "woof"]

# Create empty array that new strings will be passed into
upper_case = []
index = 0
#run a method that turns the strings in the array into all uppercase

while index < lower_case.length
  lower_cased = lower_case[index]
  upper_case << lower_cased.upcase
  index = index + 1
end

#fill the empty variable with the new strings

#print out the new array with all uppercase strign for the user
pp upper_case
