'use strict'

function randNum(min, max) {
    if (max == undefined) {
        max = min;
        min = 0;
    }
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    return res;
}

console.log(randNum(1, 10));
console.log(randNum(10));