// eval example
function foo(str) {
    // undefined error 
    // Eval variables are only declared in the eval's scope when running in strict mode
    //"use strict";
    eval(str);
    console.log(a);
}

foo("var a = 2");

// Works in Chrome
//setTimeout("console.log('hello');", 500);

// Works in Node
setTimeout(eval("console.log('hello')"), 500);

var a = new Function("a", "b", "var total = a + b; console.log('total: ' + total);");
a(1, 2);