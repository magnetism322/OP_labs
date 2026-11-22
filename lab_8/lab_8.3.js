'use strict'

function contract(fn, ...types) {
  const returnType = types[types.length - 1];
  const argTypes = types.slice(0, -1);

  return function(...args) {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const expectedType = argTypes[i];
      if (typeof arg !== expectedType.name.toLowerCase()) {
        throw new TypeError('Arg type must be ${expectedType.name}');
      }
    }

    const result = fn(...args);

    if (typeof result !== returnType.name.toLowerCase()) {
      throw new TypeError('Res type must be ${returnType.name}');
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world!