// private access modifier

// class person {
//   private secret: string = "This is secret";
//   greet() {
//     console.log(`Dont tell ${this.secret}`);
//   }
// }

// const p = new person();
// p.greet();

// //Protected access modifier

// class Person {
//   protected familySecret: string = "a secret";
//   greet() {
//     console.log(`I hope ram knows ${this.familySecret}`);
//   }
// }

// class p1 extends Person {
//   check() {
//     console.log(`I also know that ${this.familySecret} knows by ram`);
//   }
// }

// const P = new p1();
// P.check();
// P.greet();

// getters and setters

class person {
  private _username: string = "";

  get username(): string {
    return this._username.toLowerCase();
  }

  set username(value: string) {
    if (value.length < 3) {
      console.error("Value must be greater than 3");
      return;
    }
    this._username = value;
  }
}
