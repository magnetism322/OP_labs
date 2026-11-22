'use strict'

function difference(array1, array2) {

    const difEl = []

    for (const el1 of array1) {

        if (array2.indexOf(el1) === -1) {
            difEl.push(el1)
        }
    }
    return difEl;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]