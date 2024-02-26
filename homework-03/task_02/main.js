'use strict';


let password = 12345;
let userPassword = prompt('Введіть пароль:');

if (userPassword == password) {
    alert('Ласкаво просимо!');
} else {
    alert('Пароль не вірний');
}