// Explicit Types
let myName: string = 'Lee';
let age: number;
let isAuthenticated: boolean;

myName = "Cruz Lee";
age = 20;
isAuthenticated = false;

// arrays
let students: string[] = ['Lee', 'Tony'];

// union
let mixed: (string | number | boolean)[];
mixed = ['Lee', 22, false];
mixed.push(false);
mixed.push("Cruz");
mixed.push(20);

let id: string | number;
id = 123;
id = "123";

let hobby: "book" | 'music';
hobby = "book";
hobby = "music";

// object
let person: object;
person = {name: 'Lee', age: 22};
person = [];

let student: {
  name: string;
  age: number;
  gennder: string;
};

student = {
  name: 'Lee',
  age: 22,
  gennder: 'Male'
};