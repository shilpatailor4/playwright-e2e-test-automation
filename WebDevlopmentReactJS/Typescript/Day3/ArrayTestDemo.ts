console.log("Hello, World!");

// Array ==> string, number
// Array ==> 0
let empNames: string[] = ["Ram", "Krishna", "Atul", "Vinutha"];
console.log("Entire array with string datatype", empNames);
console.log("Accessing array with index", empNames[1]);
let empSalaries: Array<number> = [20000, 30000, 40000, 50000];
console.log("Creating array in different way", empSalaries[2]);

// push ==> add element at end of an array
empSalaries.push(10000);
console.log("Push operation output", empSalaries);

//pop ==> Remove element at end of an array

empSalaries.pop();
console.log("pop operation output", empSalaries);

// unshift ==> add elements at start of an array

empSalaries.unshift(60000);
console.log("Unshift operation output", empSalaries);

// shift ==> Remove an element at start of an array
empSalaries.shift();
console.log("Shift operation output", empSalaries);

//slice ==> return a portion of an array without changing the original array
// 2 arguments ==> start index, end index ==> before of the end index
let slicedArray = empSalaries.slice(1, 3);
console.log("Sliced Array output", slicedArray);

// splice ==> add,remove elements from an array
//3 ==> startindex, deletecount, add elements

empSalaries.splice(1, 0, 2, 3, 4, 5);
console.log("spilced array", empSalaries);

//20000,30000,40000,50000 or 200002,3,4,5,30000,40000,500000  or error
