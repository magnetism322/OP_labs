'use strict'

const items = [
  true, 'hello', 5, 12, -200, false, false, 'word', 
  1000, 'JS', undefined, 3.14, 'KPI', true, 'gaming', 
  77, 'C++', false, undefined, 'CS2', 42, 'Dota 2', 
  true, -0.5, 'Acer', 'G435', false
];

const collection = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0
}

for (const item of items) {
    if (collection.hasOwnProperty(typeof item)) {
        collection[typeof item] += 1;
    }
}

console.dir(collection);

const dinamicCollection = {}

for (const item of items) {
    const type = typeof item;
    if (dinamicCollection.hasOwnProperty(type)) {
        dinamicCollection[type] += 1;
    } else {
        dinamicCollection[type] = 1;
    }
}

console.dir(dinamicCollection);