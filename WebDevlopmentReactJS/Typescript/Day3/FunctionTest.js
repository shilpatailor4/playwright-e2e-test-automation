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
function add(a, b, c) {
    return a + b;
}
console.log(add(10, 20));
// default
function greet(name) {
    if (name === void 0) { name = "ram"; }
    return "Hi my name is ".concat(name, " ");
}
console.log(greet("reddy"));
// rest parameter
function greetByNames() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return "Hi my names are ".concat(names);
}
console.log(greetByNames("ram", "reddy", "raj", "rajesh"));
//hoisting moving all the declaration to the top
console.log(sayHello());
function sayHello() {
    return "ram";
}
var ename = " ram reddy";
console.log(ename.toUpperCase());
console.log(ename.trim());
console.log(Math.min(10, 20));
console.log(Math.max(10, 20));
