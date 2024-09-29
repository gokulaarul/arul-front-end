//module
export interface Person {
    name: string;
    age: number;
  }
  export function sayHello(person: Person) {
    console.log(`Hello, ${person.name}!`);
  }