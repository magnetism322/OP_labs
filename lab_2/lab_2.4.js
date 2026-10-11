'use strict'

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };

  obj1.name = 'Aurelius';
  obj2.name = 'Aurelius';

  obj2 = { name: 'Jack' };
  
  console.log("result fn: ", obj1.name, obj2.name);
};

fn();

function createUser(name, city) {
    return {
        name: name,
        city: city
    };
}

console.log(createUser('Marcus Aurelius', 'Rome'));