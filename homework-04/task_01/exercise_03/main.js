'use strict';


let monthNumber = +prompt('Введіть номер місяця:');

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;

    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;

    case 6:
    case 7:
    case 8:
        alert('Літо');
        break;

    case 9:
    case 10:
    case 11:
        alert('Осінь');
        break;

    default:
        alert('Некоректний номер місяця');
        break;
}





// 'use strict';


// let monthNumber = +prompt('Введіть номер місяця:');
// let isWinter = monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12;
// let isSpring = monthNumber >= 3 && monthNumber <= 5;
// let isSummer = monthNumber >= 6 && monthNumber <= 8;
// let isAutumn = monthNumber >= 9 && monthNumber <= 11;

// if  (isWinter)  {
//     alert('Зима');
// } else if  (isSpring)  {
//     alert('Весна');
// } else if  (isSummer)  {
//     alert('Літо');
// } else if  (isAutumn)  {
//     alert('Осінь');
// } else {
//     alert('Некоректний номер місяця');
// }