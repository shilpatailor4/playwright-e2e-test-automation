// class
var person = /** @class */ (function () {
    function person() {
        // Property
        this.ename = "ram";
    }
    // method
    person.prototype.greet = function () {
        console.log("Hi my name is ".concat(this.ename));
    };
    return person;
}());
var c = new person();
console.log(c.ename);
c.greet();
// constructor ==>
var Person = /** @class */ (function () {
    function Person(ename) {
        this.Ename = ename;
    }
    Person.prototype.greet = function () {
        console.log("hi my name is ".concat(this.Ename));
    };
    return Person;
}());
var p = new Person("ram reddy");
p.greet();
