// if-else
// let age: number = 0;
// if (age >= 18) {
//   console.log("You're an adult");
// } else if (age == 15) {
//   console.log("You're an children");
// } else {
//   console.log("default you are not born");
// }

//switch
let marks: number = 40;
switch (marks) {
  case 25:
    console.log("Your are Fail");
    break;

  case 40:
    console.log("You are just pass");
    break;

  case 70:
    console.log("You are excellent");
    break;

  case 100:
    console.log("You are outstanding");
    break;

  default:
    console.log("Please refer your marsk");
}

//for loop
// for (let i = 0; i <= 3; i++) {
//   console.log("values from the for loop", i);
// }

//while loop
let i: number = 5;
while (i <= 5) {
  console.log("values form while loop", i);
  i++;
}

//do-while

let j: number = 6;
do {
  console.log("Do-block executed");
  j++;
} while (j <= 5);

//type casting
let value1: any = "ram";
let value2 = value1 as string;
console.log(typeof value2);

//type inference
let eAge: number = 20;

//union and Intersaction type
let variableNAme: string | number | boolean;
variableNAme = "ram";
console.log(variableNAme);
variableNAme = 23;
console.log(variableNAme);
variableNAme = true;
console.log(variableNAme);

type A = { name: string };
type B = { age: number };

type Person = A & B;

const user: Person = {
  name: "ram",
  age: 23,
};

//Objects:
let users = {
  name: "Shilpa",
  age: 25,
  status: true,
};
console.log(users);

//update the values -maniplute
users.age = 27;
users.name = "tailor";

//access
console.log(users.name);
console.log(users.age);

let emp: { name: string; age: number; status: boolean } = {
  name: "shilpa",
  age: 24,
  status: true,
};
