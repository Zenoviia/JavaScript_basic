'use strict';


let array = ['Mersedes', 'Audi', 'BMW', 'VolksWagen'];

let sortedArray = (a, b) => {
    return a.length - b.length;
}

array.sort(sortedArray);
console.log(array);