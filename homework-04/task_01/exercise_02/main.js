'use strict';


let userMassage = prompt('Введіть ваше повідомлення:');

switch(userMassage) {
    case null:
        console.log('Відміна вводу');
        break;

    case '':
        console.log('Ви нічого не написали');
        break;

    default:
        console.log(userMassage);
        break;
}



// 'use strict';


// let userMassage = prompt('Введіть ваше повідомлення:');

// if (userMassage === null) {
//     console.log('Відміна вводу');
// } else if (userMassage === '') {
//     console.log('Ви нічого не написали');
// } else {
//     console.log(userMassage);
// }