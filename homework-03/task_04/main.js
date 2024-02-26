'use strict';


let num1 = +prompt('Введіть перше число:');
let num2 = +prompt('Введіть друге число:');

if (num1 > num2) {
    console.log('Перше число більше, ніж друге.');
} else if (num1 < num2) {
    console.log('Друге число більше, ніж перше.');
} else {
    console.log('Числа рівні.'); 
}