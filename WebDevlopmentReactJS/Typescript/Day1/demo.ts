// console.log("Hello Typescript!");

// Var keyword
{
  var ename: string = "shilpa";
  console.log(ename);
}
console.log(ename); //access outside of scope also and redclre and reassign is possible

// let keyword
{
  let name: string = "tailor";
  name = "thada";
  console.log(name);
}
// console.log(name);   // cannot access outside of scope but redeclare is possible

//const keyword
{
  const emp: string = "Globallogic";
  console.log(emp);
}
// console.log(emp); //cannot access outside of scope and redeclare and reassign is not possible
