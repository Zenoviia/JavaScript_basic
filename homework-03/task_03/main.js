'use strict';


let userMassage = prompt('Введіть ваше повідомлення:');

if (userMassage === null) {
    console.log('Відміна вводу');
} else if (userMassage === '') {
    console.log('Ви нічого не написали');
} else {
    console.log(userMassage);
}