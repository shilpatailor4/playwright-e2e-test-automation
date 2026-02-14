// for loop
// for(let i=1; i<=3; i++){
//     console.log("Playwright JavaScript");   
// }
// console.log("Loop has ended");

//Calculate sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
   sum = sum + i;  
}

console.log("sum =", sum);

//1. find the number is even or not
let num = 75;
if(num % 2 === 0){
    console.log(num, "is a even number.")
}else{
    console.log(num, "is a odd number.");
    
}

//while loop
// let i=1;
// while(i<=5){
//     console.log("i=", i);
//     i++;
// }

//do while loop
// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);

//for-of loop
// let str = "shilpa";
// let size=0;
// for(let val of str){
//     console.log("val = ", val);
//     size++;
// }
// console.log("size =", size);

//for-in loop (it returns a key value) -- works like iterator
let student = {
    name: "shilpa",
    age: 25,
    cgpa: 7.5,
    isPass: true,
}
for(let key in student){
    console.log("key =", key, " value =", student[key]); 
}

