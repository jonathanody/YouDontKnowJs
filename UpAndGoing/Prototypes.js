var foo = {
    a: 42
};

// create 'bar' and link it to 'foo'
// Object.create(foo) creates a prototypical link back to foo from bar
var bar = Object.create(foo); 

bar.b = "hello world";

console.log(bar.b); // "hello world"
console.log(bar.a); //  42 <-- delgated to 'foo'