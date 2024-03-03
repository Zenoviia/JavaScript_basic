'use strict';


let lowerLimit = +prompt('Введіть нижню межу проміжку');
let upperLimit = +prompt('Введіть верхню межу проміжку');
let i = lowerLimit;

while (i <= upperLimit) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}