'use strict'

function average(a,b) {
    return (a + b) / 2;
}

console.log(average(10, 20));

function square(x) {
    return x * x;
}

console.log(square(5));

function cube(x) {
    return x * x * x;
}

console.log(cube(3));

function calculate() {
    const result = [];
    for (let i = 0; i <= 9; i++) {
        result.push(average(square(i), cube(i)));
    }
    return result;
}

console.log(calculate());