'use strict'

const phonebookHash = {
    'Marcus Aurelius': '+380445554433',
    'Danylo': '+380991112233',
    'Ivan Petrov': '+380501234567',
    'Alex Smith': '+12025550101'
};


function findPhoneByName(name) {
    return phonebookHash[name];
}

console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Danylo"));
console.log(findPhoneByName("Ivan Petrov"));
console.log(findPhoneByName("Alex Smith"));