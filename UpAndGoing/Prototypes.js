var foo = {
    a: 42
};

// create 'bar' and link it to 'foo'
// Object.create(foo) creates a prototypical link back to foo from bar
var bar = Object.create(foo); 

bar.b = "hello world";

console.log(bar.b); // "hello world"
console.log(bar.a); //  42 <-- delgated to 'foo'


// prototype property
Array.prototype.where = function (predicate) {
    var matched = [];
    
    for(var i = 0; i < this.length; i++) {
        if (predicate(this[i])) {
            matched.push(this[i]);
        }
    }
    
    return matched
}

var greaterThanTwo = function (valueToTest) {
    return valueToTest > 2;
}

var testArray = [1, 2, 3, 4, 5];
var results = testArray.where(greaterThanTwo);
outputArray(results);

function outputArray(arrayToOutput) {
    for(var i = 0; i < arrayToOutput.length; i++) {
        console.log(arrayToOutput[i]);
    }
}