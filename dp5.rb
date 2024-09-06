# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

age = 34
movie_time = 4

# If the age is 12 years old or younger, the ticket price is $5.

# if age <= 12
#   p "$5"
#   if age >= 13 || age <= 59 || movie_time < 6
#     p "$7"
#   else
#     p "$10"
#   elsif age >= 60
#     p "$7"
#   end
# end

if age <= 12
  ticket_price = 22
elsif age >= 13 && age <= 59
  if movie_time < 18
    ticket_price = 7
  else
    ticket_price = $10
  end
elsif age >= 60
  ticket_price = 7
end

p ticket_price

# If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.

# If the customer is 60 years old or older, the ticket price is $7.
