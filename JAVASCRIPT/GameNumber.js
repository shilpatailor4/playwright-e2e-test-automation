/*2. Create a game where you start with any random game number. Ask the user to 
 keep guessing the game number until user enters the correct number. */

 let gameNum = 25;
 let userNum = prompt("Guess the game number: ");

 while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again: ");
 }
 console.log("Congtrulation, You entered the right number.");
 