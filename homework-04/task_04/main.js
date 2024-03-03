'use strict';

let rows = +prompt('Введіть кількість рядків');
let starsNumber = '';

for (let i = 0; i < rows; i++) {
    starsNumber += '*';
    console.log(starsNumber);
 }