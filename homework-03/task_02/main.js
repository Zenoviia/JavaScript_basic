'use strict';


let password = 'HelloWorld';
let userPassword = prompt('Введіть пароль:');

if (userPassword === password) {
    alert('Ласкаво просимо!');
} else {
    alert('Пароль не вірний');
}