'use strict';

const arr = array();

function array() {
    const data = [];

    const accessor = function(index) {
        return data[index];
    }

    accessor.push = function(value) {
        data.push(value);
    }

    accessor.pop = function() {
        return data.pop();
    }

    return accessor;
}

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined