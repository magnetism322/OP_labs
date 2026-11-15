'use strict';

function seq(...args) {
    const result = [...args];

    return function inner(next) {
        if (typeof next === 'function') {
            result.push(next);
            return inner;
        }
        else {
                return result.reduceRight((acc, fn) => fn(acc), next);
            }
        }
}

console.log(seq(x => x + 7)
   (x => x * 2)(5))

console.log(seq(x => x * 2)
   (x => x + 7)(5))

console.log(seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7))