// =================================
// Simple Javascript Guessing Game
// Jaxcode Day 8 Homework Assignment
//
// Author: Kelsey McClanahan
// Date:   11/18/2020
// ===================================

let answer = 8;
let guess = prompt(
  "I am thinking of a number between 1 and 12.\nWhat is your guess?"
);

if (guess == answer) {
  alert("You guessed it!");
} else if (guess > answer) {
  alert("Your guess was too high.\nPlease try again.");
} else {
  alert("Your guess was too low.\nPlease try again.");
}
