//abstraction ==>

// abstract class animals {
//   sound() {
//     console.log("All animals make sound");
//   }
//   makeSound(): void {}
// }

// class Dog extends animals {
//   makeSound(): void {
//     console.log("Dog is making sound as BOW-BOW");
//   }
// }

// const d = new Dog();
// d.makeSound();
// d.sound();

// inheritance

// class Parent {
//   ehabit: string = "quick learner";
//   greet() {
//     console.log(`The parent is ${this.ehabit}`);
//   }
// }

// class child extends Parent {
//   check() {
//     console.log(`As parent this child also an ${this.ehabit}`);
//   }
// }

// const c = new child();
// c.check();
// c.greet();

// polymorphism

class Animal {
  makeSound() {
    console.log("All animals make sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Dog is making sound");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Cat is making sound");
  }
}

const animal: Animal[] = [new Dog(), new Cat(), new Animal()];
animal.forEach((animal) => animal.makeSound());

// import { add, sub } from "./demo.js";

// console.log(add(2, 4));
// console.log(sub(20, 10));

// import { user } from "./demo.js";
// const u = new user("ram");
// u.greet();

// default export
import greets from "./demo.js";
console.log(greets("ram", "reddy"));
// export function add(a, b) {
//   return a + b;
// }

// export function sub(a, b) {
//   return a - b;
// }

// export class user {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`hi my name is ${this.name}`);
//   }
// }

export default function greet(a, b) {
  return a + b;
}
