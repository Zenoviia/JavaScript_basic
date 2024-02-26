'use strict';


let number = +prompt('Введіть число:');
let rem = number % 2;    // rem - reminder of dividing

if (number === 0) {
    alert('Число = 0');
} else if (rem === 0) {
    alert("Число парне");
} else {
    alert('Число непарне')
}







// if (rem == 0 &&) {
//     alert('Число парне');
// } else {
//     alert('Число непарне');
// }