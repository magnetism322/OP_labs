'use strict'

function inc_1(n) {
    return n + 1
}

const a = 5;
const b = inc_1(a);

console.dir({ a, b });

function inc_2(num) {
    num.n += 1;
}

const obj = { n: 5 };   
inc_2(obj);
console.dir(obj);