
const marchGreet = require('march-greet')
const lodash = require('lodash');

// cjs
// const primaryItem = require('hotel/menu');

// esm
// import primaryItem from './hotel/menu.js';

const language = "tn";
marchGreet.greet(language); // Vanakkam


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 6, 7];

const diff = lodash.difference(arr1, arr2);
console.log(diff);

// console.log(primaryItem);

// --------------------------------------------
// in built data structures
// --------------------------------------------

// array
const array = [1, 2, 3, 4, 5, 5];
console.log(array);

// set
const set = new Set(array);
console.log(set);

// map
const map = new Map();
map.set('name', 'Nag');
map.set('age', 37);
console.log(map);


const p = {
    name: 'Nag',
    age: 37
}

console.log(p);


const car1 = {
    name: 'Audi',
    price: 1000
}
const car2 = {
    name: 'BMW',
    price: 1000
}

const owner1 = {
    name: 'Nag'
}
const owner2 = {
    name: 'Ria'
}


const carOwners = new Map();
carOwners.set(car1, owner1);
carOwners.set(car2, owner2);

console.log(carOwners.get(car1));

// --------------------------------------------
// proxy
// --------------------------------------------

const target = {
    message1: "hello",
    message2: "everyone",
};

const handler1 = {
    get(target, prop, receiver) {
        if (prop === "message2") {
            return "world";
        }
        return Reflect.get(...arguments);
    },
};

const proxy1 = new Proxy(target, handler1);

console.log(proxy1.message1);
console.log(proxy1.message2);

// --------------------------------------------
// subclassable built-ins
// --------------------------------------------


class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() {
        return Array;
    }
}











