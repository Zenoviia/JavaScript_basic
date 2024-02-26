'use strict';


// let num = +prompt('Введіть число:');

// if (num < 20 || num > 80 ) {
//     alert('Число не в діапазоні');
// } else if (num != null) {
//     alert('Число в діапазоні');
// }



let num = +prompt('Введіть число:');

if (!(num < 20 || num > 80 || num != null )) {
    alert('Число в діапазоні');
} else {
    alert('Число не в діапазоні');
}