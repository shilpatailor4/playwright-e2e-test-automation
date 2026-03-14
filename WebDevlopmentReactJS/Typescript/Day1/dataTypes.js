//Datatypes
//string
var ename = "shilpa";
console.log("string datatype", ename);
// number
var eAge = 25;
console.log("number datatype", eAge);
// boolean
var eStatus = true;
console.log("boolean datatype", eStatus);
//null
var eCheck = null;
console.log("null datatype", eCheck);
// undefined
var eDemo;
console.log("undefined datatype", eDemo);
// array
var empNames = ["shilpa", "david", "richie", "vinutha"];
var empSalary = [25000, 30000, 40000, 50000];
console.log("Array datatype", empNames);
console.log("Array datatype with different implementation", empSalary);
// object
var empData = {
    name: "shilpa",
    age: 24,
};
console.log("object datatype", empData);
//tuple
var empInfo = ["Krishna", 9101010101, true];
console.log("tuple datatype", empInfo);
//any
var empAny = ["ram", "raj"];
console.log("any datatype", empAny);
//enum - if not defined any value the start 0, 0+1, 1+2, 2+3
var color;
(function (color) {
    color[color["red"] = 10] = "red";
    color[color["orange"] = 11] = "orange";
    color[color["blue"] = 12] = "blue";
    color[color["green"] = 200] = "green";
})(color || (color = {}));
