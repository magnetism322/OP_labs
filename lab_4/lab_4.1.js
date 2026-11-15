'use strict'



function sumFor(...args) {
    let totalFor = 0;
    for (let i = 0; i < args.length; i++) {
        totalFor += args[i];
    }
    return totalFor;
}

function sumForOf(...args) {
    let totalForOf = 0;
    for (const arg of args) {
        totalForOf += arg;
    }
    return totalForOf;
}


function sumWhile(...args) {
    let totalWhile = 0;
    let i = 0;
    while (i < args.length) {
        totalWhile += args[i];
        i++;
    }
    return totalWhile;
}

function sumDoWhile(...args) {
    let totalDoWhile = 0;
    let i = 0;
    do {
        totalDoWhile += args[i];
        i++;
    } while (i < args.length);
    return totalDoWhile;
}

function sumAPR(...args) {
    return args.reduce((total, current) => total + current, 0);
}

const a = sumFor(1, 2, 3);
console.log(a);

const b = sumForOf(0);
console.log(b);

const c = sumWhile();
console.log(c);

const d = sumDoWhile(10, -1, -1, -1);
console.log(d);

const e = sumAPR(10, -1, -1, -1);
console.log(e);
