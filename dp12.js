// Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

// class Account {
//   constructor(acct_name, balance) {
//   this.acct_name = acct_name;
//   this.balance = balance;
//   }

// balance_check(){
//   if (this.balance < 100){
//     console.log("Balance Warning")
//     }
//   }
// }  

// var check = new Account("Kids Account", 45)
// console.log(check)
// check.balance_check()

// Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.

class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  movies_attr() {
    console.log(`"The details for this film are" ${this.title}, ${this.director}, ${this.year}`)
  }
}

let movie1 = new Movie ("Fubber", "Spike Lee", "2006")
movie1.movies_attr()
