'use strict';


let lowerLimit = +prompt('Введіть нижню межу проміжку');
let upperLimit = +prompt('Введіть верхню межу проміжку');

for(let i = lowerLimit; i <= upperLimit; i++) {
    if (i % 5 === 0) {
    console.log(i);
    }
}