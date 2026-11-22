'use strict'

function iterate(object, callback) {



    for (const ob of Object.keys(object)) {
        const value = object[ob]

        callback(ob, value, object)
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});