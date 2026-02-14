//1. Create an array to stroe companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//remove the first company from the array
let removeFirst = companies.shift();
console.log("Remove Item: ", removeFirst);
console.log(companies);

//add again the deleted item
let addItem = companies.unshift("Bloomberg")
console.log(companies);

//remove "Uber" and add "Ola" in this pplace
let replaceItem = companies.splice(2, 1, "Ola");
console.log("Replace item: " + replaceItem);
console.log(companies);

//add "Amazon" at the end
let addEndItem = companies.push("Amazon");
console.log(companies);


