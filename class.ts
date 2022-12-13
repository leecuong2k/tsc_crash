// CLASS

export class Employee {
  // public name: string;
  // private age: number;
  // readonly male: boolean;

  // constructor(n: string, a: number, m: boolean) {
  //   this.name = n;
  //   this.age = a;
  //   this.male = m;
  // };

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean,
  ) { }

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`;
  }
};

const lee = new Employee('Cruz Lee', 22, true);
// console.log(lee.name);
// console.log(lee.age); false => private
// console.log(lee.male);

// console.log(myInfo.print());

const bob = new Employee('Bob', 28, true);

let employees: Employee[] = [];

employees.push(lee, bob);

employees.forEach(employee => console.log(employee.name, employee.male, employee.print()));