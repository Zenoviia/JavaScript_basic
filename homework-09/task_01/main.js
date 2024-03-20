'use strict';

// 1

let map = new Map();

map.set(777, 'number');
map.set('Hello World', 'string');
map.set(true, 'boolean');
map.set(null, 'null');
map.set(undefined, 'undefined');
map.set({name: 'Robert',
         year: 35,
         job: 'farmer',
         country: 'Ukraine'}, 
'object');
map.set(9007199254740991n, 'bigInt');
map.set(Symbol("hi"), 'symbol');


map.forEach((value, key) => {
    console.log(value, key);
});


// 2

let objectFromMap = Object.fromEntries(map.entries());

console.log(objectFromMap);


// 3

let map2 = new Map(Object.entries(objectFromMap));

console.log(map2);