/*create a function using the "function" keyword that takes a String as an argument and return the number of Vowels 
 in the string. */

function countVowels(str){
   let count = 0;
   for(const char of str){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        count++;
    }
   }
   console.log(count);
}
countVowels("shilpa");
countVowels("seleniumo");
countVowels("xyz");

//create an arrow function to perform a same ttask.
const countVowelNum = (str) => {
   let count = 0;
   for(let char of str){
     if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        count++;
    }
   } return count;
};
let val = countVowelNum("Playwright");
console.log(val);

//forEach array function - it's also known as 'Hire order function/method
//calculate the number fo square

let nums = [1, 2, 3, 4, 5];
let calSquare = (num) => {
    console.log(num * num);
}
console.log("Squares of nums:");
nums.forEach(calSquare);

console.log("..................");

/// use reduce method function
let nums1 = [10, 42, 23, 54, 25];
let output = nums1.reduce((prev, curr) => {
    return prev > curr ? prev : curr;   //print largest number from the array
})
console.log(output);

//Q. We are given array  marks of students. filter out the marks of student that score 90+.
let marks = [87, 93, 64, 99, 86];
let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers);

//Take a number num as input form user. create an array from 1 to n.
let num2 = 5;
let arr = [];
for(let i=1; i<=num2; i++){
    arr[i-1] = i;
}
console.log(arr);

// Use the reduce method and calculate sum of all the numbers in the array
let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log(sum);

//Use the reduce method to calculate products of all numbers in the array 
let factorial = arr.reduce((res, curr) => {
    return res * curr;
})
console.log(factorial);