/*1. Get user to input a number using prompt("Enter a number"). check if number 
is a multiple of 5 or not */

let num = prompt("Enter a number");

if(num % 5 === 0){
    console.log(num, "is a multiple of 5");
}else{
    console.log(num, "is NOT a multiple of 5");
}


/*2. write a code which can give grades to student according to their scroes
*/

let score = prompt("Enter a score of student (0-100): ");

if(score >= 90 && score <=100){
    console.log(score, "is a garde of A.")
}else if(score >= 70 && score <=89){
    console.log(score, "is a grade B.");    
}else if(score >= 60 && score <=69){
    console.log(score, "is a garde C.");
}else if(score >= 50 && score <= 59){
    console.log(score, "is a garde D.");
}else if(score >= 0 && score <= 49){
    console.log(score, "is a grade F.");
}