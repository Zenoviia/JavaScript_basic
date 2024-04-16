'use strict';


let actor = {};

Object.defineProperties(actor, {

    firstName: {
        value: 'Zendaya',
        writable: false,
        enumerable: true,
        configurable: true,
    },

    lastName: {
        value: 'Coleman',
        writable: true,
        enumerable: false,
        configurable: true,
    },

    age: {
        value: 27,
        writable: true,
        enumerable: true,
        configurable: false,
    },

    height: {
        value: 178,
        writable: false,
        enumerable: true,
        configurable: true,
    },

    birthPlace: {
        value: 'California, USA',
        writable: true,
        enumerable: false,
        configurable: true,
    }

})

// actor.firstName = 'Nina';
// delete actor.age;
// actor.height = 175;

console.log(Object.values(actor));