'use strict';


let monthNumber = +prompt('Введіть номер місяця:');

if  (monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12)  {
    alert('Зима');
} else if  (monthNumber >= 3 && monthNumber <= 5)  {
    alert('Весна');
} else if  (monthNumber >= 6 && monthNumber <= 8)  {
    alert('Літо');
} else if  (monthNumber >= 9 && monthNumber <= 11)  {
    alert('Осінь');
} else {
    alert('Некоректний номер місяця');
}