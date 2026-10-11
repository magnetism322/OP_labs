'use strict'

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Danylo', phone: '+380991112233' },
  { name: 'Ivan Petrov', phone: '+380501234567' },
  { name: 'Alex Smith', phone: '+12025550101' }
];


function findPhoneByName(name) {
    for (let i = 0; i < phonebook.length; i++) {
        if (phonebook[i].name === name) {
            return phonebook[i].phone;
        }
    }
}

console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Danylo"));
console.log(findPhoneByName("Ivan Petrov"));
console.log(findPhoneByName("Alex Smith"));