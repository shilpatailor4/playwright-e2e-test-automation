// // //if-else
// // let age: number = 0;
// // if (age >= 18) {
// //   console.log("You are an adult");
// // } else if (age == 15) {
// //   console.log("You are an children");
// // } else {
// //   console.log("default you are not born");
// // }

// //switch

// // let marks: number = 0;
// // switch (marks) {
// //   case 20:
// //     console.log("You are fail");
// //     break;
// //   case 40:
// //     console.log("you are just pass");
// //     break;
// //   case 70:
// //     console.log("You are excellent");
// //     break;
// // //   case 190:
// // //     console.log("You are outstanding");
// // //     break;
// // //   default:
// // //     console.log("please refer for your marks");
// // // }

// // //for

// // for (let i = 0; i <= 5; i++) {
// //   console.log("Value from for loop", i);
// // }

// // // while loop

// // let i: number = 6;
// // while (i <= 5) {
// //   console.log("values form while loop", i);
// //   i++;
// // }

// // //do-while

// // let j: number = 6;
// // do {
// //   console.log("Do-block executed");
// //   j++;
// // } while (j <= 5);

// // type casting
// let value1: any = "ram";
// let value2 = value1 as string;
// console.log(typeof value2);

// // type inference

// let eAge = 30;
// console.log(typeof eAge);

// // type annotations

// let eName: string = "rashmi";
// console.log(eName);

// // Type Compatibility
// let person = { name: "ram" };
// let person2: { name: string } = person;

// console.log(person2.name);

// //type guard

// function isString(value: any): value is string {
//   return typeof value === "string";
// }

// let result1: any = 10;
// if (isString(result1)) {
//   console.log("\nType Guards:");
//   console.log("Length of result1:", result1.length);
// } else {
//   console.log("\nType Guards:");
//   console.log("Not a string");
// }

// union

// let variableNAme: string | number | boolean;
// variableNAme = "ram";
// console.log(variableNAme);
// variableNAme = 23;
// console.log(variableNAme);
// variableNAme = true;
// console.log(variableNAme);

// type A = {name:string}
// type B = {age:number}

// type Person = A&B;

// const user:Person = {
//     name:"ram",
//     age:23
// }

// plain object

interface person {
  name: string;
  age: number;
  status: boolean;
  hobbies: string[];
  Address: { city: string; pincode: number };
  greet(): void;
}

let user: person = {
  name: "ram",
  age: 23,
  status: true,
  hobbies: ["Playing Cricket", "Singing songs"],
  Address: {
    city: "Hyd",
    pincode: 500021,
  },
  greet() {
    console.log("I am an method from an object");
  },
};
// manipulate
user.age = 27;
user.name = "reddy";

// access
console.log(user.name);
console.log(user.age);
console.log(user["status"]);

let user2: person = {
  name: "Jagadish",
  age: 23,
  status: true,
  hobbies: ["Playing Cricket", "Singing songs"],
  Address: {
    city: "Hyd",
    pincode: 500021,
  },
  greet() {
    console.log("I am an method from an object");
  },
};

console.log(user2.Address.pincode);
user.greet();
