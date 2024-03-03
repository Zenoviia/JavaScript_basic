'use strict';


let num = +prompt('Введіть число, факторіал якого ви хочете порахувати');
let i = 1;
let fact = 1;

while (i <= num) {
    fact *= i;
    i++;
}

console.log(`${num}! = `, fact);