'use strict'


function unique(array) {
    const uniqueEl = [];

    for (const item of array) {

        if (uniqueEl.indexOf(item) === -1) {
            uniqueEl.push(item)
        }
    }
    return uniqueEl;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]