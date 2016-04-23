// ES6 default parameter values - currently not fully implemented
// function foo(a = 2) {
//     console.log(a);
// }

// a transpiler could re-write the above as
function foo() {
    // check if the first supplied argument is 'undefined' (void 0)
    var a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log(a);
}

foo(); // 2
foo(42); // 42