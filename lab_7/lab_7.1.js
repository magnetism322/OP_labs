'use strict'

function removeElement(array, item) {
    const findItem = array.indexOf(item) 

    if (findItem !== -1) {
        array.splice(findItem, 1)
    }
}





