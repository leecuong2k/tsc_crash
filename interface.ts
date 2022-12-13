interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
};

const lee: Person = {
  name: 'Lee',
  age: 32,
  speak(lang: string) {
    return lang;
  },
  spend(amount: number): number {
    return amount;
  }
};

const sayHi = (person: Person) => console.log(`Hello ${person.name}`);

sayHi(lee);