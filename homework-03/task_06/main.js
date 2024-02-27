'use strict';


let monthNumber = +prompt('Введіть номер місяця:');
let isWinter = monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12;
let isSpring = monthNumber >= 3 && monthNumber <= 5;
let isSummer = monthNumber >= 6 && monthNumber <= 8;
let isAutumn = monthNumber >= 9 && monthNumber <= 11

if  (isWinter)  {
    alert('Зима');
} else if  (isSpring)  {
    alert('Весна');
} else if  (isSummer)  {
    alert('Літо');
} else if  (isAutumn)  {
    alert('Осінь');
} else {
    alert('Некоректний номер місяця');
}