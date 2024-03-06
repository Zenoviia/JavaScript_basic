'use strict';


// function sumOrConcatination(value1 = 15, value2 = 15) {
//     if (typeof(value1) === 'string' || typeof(value2) === 'string') {
//         console.log('Результат конкатенації:', value1 + value2);
//     } else if (typeof(value1) === 'number' && typeof(value2) === 'number') {
//          console.log('Результат суми:', value1 + value2);
//     } else {
//         console.log('Некоректні аргументи')
//     }
// }

// sumOrConcatination(null, null);



const sumOrConcatination = (value1 = 15, value2 = 15) => {
    if (typeof(value1) === 'string' || typeof(value2) === 'string') {
        console.log('Результат конкатенації:', value1 + value2);
    } else if (typeof(value1) === 'number' && typeof(value2) === 'number') {
         console.log('Результат суми:', value1 + value2);
    } else {
        console.log('Некоректні аргументи')
    }
}

sumOrConcatination(56, 78);