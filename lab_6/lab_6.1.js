'use strict'

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function')
            throw new Error('Вась, не той тип')
    }
    return (x) => fns.reduce((acc, fn) => fn(acc), x);
} 

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

try {
  const f3 = pipe(inc, 7, cube);
  console.log(f3(5));
} catch (err) {
  console.error(err.message);
}
