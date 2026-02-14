//Define a function
function myFunction(){
    console.log("Welcome to JavaScript!");
    console.log("Hello, Shilpa!");
}

//Call a function
myFunction();

//parameter functiona
function paraFunction(msg){
    console.log(msg);
}
paraFunction("I love JS!");

//para return function
function sumTwo(a,b){
    let c = console.log("total sum val:", a + b);
    return c;
}
sumTwo(2, 3);

//Arrow function
const arrowFunc = (a, b) => {
   let c = a * b;
   console.log("total mul val:" + c);
   return c;
};
arrowFunc(2, 5);

let printHello = () => {
    console.log("Hello, Shilpa!");
}
printHello();