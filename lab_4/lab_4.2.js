'use strict'

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

function max(arr) {
    const flattened = arr.flat();
    return flattened.reduce((maxValue, currentValue) => {
        return currentValue > maxValue ? currentValue : maxValue;
    })
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));