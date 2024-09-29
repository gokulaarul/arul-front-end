//namespace 
var MyNamespace;
(function (MyNamespace) {
    function sayHello(person) {
        console.log("Hello,".concat(person.name, "!"));
    }
    MyNamespace.sayHello = sayHello;
})(MyNamespace || (MyNamespace = {}));
// Usage of the namespace
var person = {
    name: "John",
    age: 25
};
MyNamespace.sayHello(person);
