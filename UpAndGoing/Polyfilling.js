if (!Number.isNaN) {
    // this will only be added to Number if the isNan property does not currently exist.
    // This demonstrates how to add a 'polyfill' if the functionality does not currently exist.
    Number.isNaN = function isNaN(x) {
        return x !== x;
    };
}

var isNotNan = Number.isNaN(2);
console.log("IsNan: " + isNotNan);

var isNan = Number.isNaN(0 / 0);
console.log("IsNan: " + isNan);