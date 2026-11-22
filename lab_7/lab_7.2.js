'use strict'



function removeElements(array, ...items) { 

    for (const item of items) {

        const findItem = array.indexOf(item)

        if (findItem !== -1) {
        array.splice(findItem, 1)

    }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]