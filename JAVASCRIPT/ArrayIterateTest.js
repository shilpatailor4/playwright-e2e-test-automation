/*1. for a given array with  marks of students -> [85, 97, 44, 37, 76, 60].
Find the average marks of the entire class. */

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let mark of marks){
    sum += mark;  
}


// for(let i=0; i<marks.length; i++){
//     sum += marks[i];   
// }

console.log("Total sum of all marks:: " + sum);
let avg = sum/marks.length;
console.log("Average of all marks:: " + avg);

