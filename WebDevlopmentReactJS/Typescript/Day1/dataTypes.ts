//Datatypes

//string
let ename: string = "shilpa";
console.log("string datatype", ename);

// number
let eAge: number = 25;
console.log("number datatype", eAge);

// boolean
let eStatus: boolean = true;
console.log("boolean datatype", eStatus);

//null
let eCheck: null = null;
console.log("null datatype", eCheck);

// undefined
let eDemo: undefined;
console.log("undefined datatype", eDemo);

// array
let empNames: string[] = ["shilpa", "david", "richie", "vinutha"];
let empSalary: Array<number> = [25000, 30000, 40000, 50000];
console.log("Array datatype", empNames);
console.log("Array datatype with different implementation", empSalary);

// object
let empData: { name: string; age: number } = {
  name: "shilpa",
  age: 24,
};

console.log("object datatype", empData);

//tuple
let empInfo: [string, number, boolean] = ["Krishna", 9101010101, true];
console.log("tuple datatype", empInfo);

//any
let empAny: any = ["ram", "raj"];
console.log("any datatype", empAny);

//enum - if not defined any value the start 0, 0+1, 1+2, 2+3
enum color {
  red = 10, //0
  orange, //0+1 = 1
  blue, //1+1 = 2
  green = 200, //2+1 ==3
}
console.log(color);
