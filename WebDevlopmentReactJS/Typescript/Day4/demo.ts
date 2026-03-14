// class

class person {
  // Property
  ename: string = "ram";
  // method
  greet() {
    console.log(`Hi my name is ${this.ename}`);
  }
}

const c = new person();
console.log(c.ename);
c.greet();

// constructor ==>

class Person {
  Ename: string;

  constructor(ename: string) {
    this.Ename = ename;
  }

  greet() {
    console.log(`hi my name is ${this.Ename}`);
  }
}

const p = new Person("ram reddy");
p.greet();
