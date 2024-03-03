'use strict';


let i = 1;
let sum = 0;

while (i <= 5) {
    let num = +prompt(`Введіть число №${i}`);
    sum += num;
    i++;
}

console.log('Сума введених чисел:', sum);