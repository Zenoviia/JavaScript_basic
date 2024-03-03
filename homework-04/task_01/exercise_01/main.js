'use strict';


const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');

let massage = (num1 > num2) ? 'Перше число більше' : (num1 < num2) ? 'Друге число більше' : 'Числа рівні';

console.log(massage);



// 'use strict';


// let num1 = +prompt('Введіть перше число:');
// let num2 = +prompt('Введіть друге число:');

// if (num1 > num2) {
//     console.log('Перше число більше, ніж друге.');
// } else if (num1 < num2) {
//     console.log('Друге число більше, ніж перше.');
// } else {
//     console.log('Числа рівні.'); 
// }