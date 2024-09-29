//namespace 
namespace MyNamespace {
    // Code within the namespace
    export interface Person {
      name: string;
      age: number;
    }
  
    export function sayHello(person: Person) {
      console.log(`Hello,${person.name}!`);
    }
  }
  
  // Usage of the namespace
  const person: MyNamespace.Person = {
    name: "John",
    age: 25
  };
  
  MyNamespace.sayHello(person);