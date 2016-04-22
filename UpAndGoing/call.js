function foo() {
    console.log(this.foo);
}

function bar() {
    console.log(this.bar);
}

var obj1 = {
    foo: "obj1-foo",
    bar: "obj1-bar"
};

var obj2 = {
    foo: "obj2-foo"
    //bar: "obj2-bar"
};

foo.call(obj1); // "obj1-foo"
bar.call(obj1); // "obj1-bar"

foo.call(obj2); // "obj2-foo"
bar.call(obj2); // undefined