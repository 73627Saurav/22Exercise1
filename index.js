// Exercise 1: Guess the number
// Prize Amount: Rs 500 Amazon voucher
// let number = 0 // Generate random number here
// let chances = 0
// Keep asking for the number until the correct number is guessed
// Increment the chances variable

// Eventually after the game is over, display the (100 - Number of chances) and the actual number 

let random = Math.floor(Math.random() * 101);
let chances = 0;
let number = prompt("Enter the number");

while (random != number) {
  random < number ? console.log(`number is less than ${number}`): console.log(`number is greater than ${number}`)
  number = prompt("Enter a new number");
  chances++;
}
console.log(`${random} is equal to ${number}`+"\n"+`It took ${chances} tries to guess the number.`);