// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(10, 20));

// function concat(a: string, b: string) {
//   return a + b;
// }

// console.log(concat("ram", "reddy"));

// // anonymous function
// let sub = function (a: number, b: number): number {
//   return a - b;
// };

// console.log(sub(30, 10));

// // arrow function

// let mul = (a: number, b: number) => {
//   return a * b;
// };

// console.log(mul(10, 10));

//optional , default, rest

function add(a: number, b: number, c?: number) {
  return a + b;
}

console.log(add(10, 20));

// default

function greet(name: string = "ram") {
  return `Hi my name is ${name} `;
}

console.log(greet("reddy"));

// rest parameter

function greetByNames(...names: string[]) {
  return `Hi my names are ${names}`;
}

console.log(greetByNames("ram", "reddy", "raj", "rajesh"));

//hoisting moving all the declaration to the top

console.log(sayHello());

function sayHello() {
  return "ram";
}

let ename: string = " ram reddy";
console.log(ename.toUpperCase());
console.log(ename.trim());
console.log(Math.min(10, 20));
console.log(Math.max(10, 20));
