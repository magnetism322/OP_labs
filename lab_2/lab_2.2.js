'use strict'

function array(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(array(15, 30));

function rangeOdd(start, end) {
    let result2 = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result2.push(i);
        }
    }
    return result2;
}

console.log(rangeOdd(15, 30));
