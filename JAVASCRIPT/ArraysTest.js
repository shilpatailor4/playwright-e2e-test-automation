//to add new item in the given string - to add new item in the end of list
let str = ["apple", "licchi", "Graps", "Bannana"];
let newItem = str.push("Walnut");
console.log(newItem);
console.log(str);

// to remove from the list - to remove from the end of the list last item
let deleteItem = str.pop();
console.log(deleteItem);
console.log(str);

// convert array to string
let convertedStr = str.toString();
console.log(convertedStr);

// add two diff arrays using 'concat()' method
let marvelsHeros = ["Thore", "Spiderman", "Ironman"];
let dcHeros = ["Superman", "Batman"];
let indianHeros = ["Shaktiman", "Krish"];
let heros = marvelsHeros.concat(dcHeros, indianHeros);
console.log(heros);

// add items in the list in first using 'unshift()' method
let addstr = marvelsHeros.unshift("Antman");
console.log(marvelsHeros);

//remove the first item from the list using 'shift()' method
let deleteStr = marvelsHeros.shift();
console.log("deleteed", deleteItem);
console.log(marvelsHeros);
