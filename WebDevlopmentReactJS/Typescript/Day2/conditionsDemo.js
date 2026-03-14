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
var marks = 40;
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
var i = 5;
while (i <= 5) {
    console.log("values form while loop", i);
    i++;
}
//do-while
var j = 6;
do {
    console.log("Do-block executed");
    j++;
} while (j <= 5);
//type casting
var value1 = "ram";
var value2 = value1;
console.log(typeof value2);
//type inference
var eAge = 20;
//union and Intersaction type
var variableNAme;
variableNAme = "ram";
console.log(variableNAme);
variableNAme = 23;
console.log(variableNAme);
variableNAme = true;
console.log(variableNAme);
var user = {
    name: "ram",
    age: 23,
};
//Objects:
var users = {
    name: "Shilpa",
    age: 25,
    status: true,
};
console.log(users);
//update the values
users.age = 27;
users.name = "tailor";
console.log(users.name);
console.log(users.age);
