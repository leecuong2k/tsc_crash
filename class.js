"use strict";
// CLASS
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // public name: string;
    // private age: number;
    // readonly male: boolean;
    // constructor(n: string, a: number, m: boolean) {
    //   this.name = n;
    //   this.age = a;
    //   this.male = m;
    // };
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender Male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
;
var lee = new Employee('Cruz Lee', 22, true);
// console.log(lee.name);
// console.log(lee.age); false => private
// console.log(lee.male);
// console.log(myInfo.print());
var bob = new Employee('Bob', 28, true);
var employees = [];
employees.push(lee, bob);
employees.forEach(function (employee) { return console.log(employee.name, employee.male, employee.print()); });
