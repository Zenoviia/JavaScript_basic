'use strict';


const phone = +prompt('Введіть ваш номер телефону');

let contacts = {

    phone: phone,
    email: 'qweerrttyyuu@gmail.com',

};

let person = {

    firstName: 'Zenoviia',
    lastName: 'Tkachenko',
    contacts,
   
};

console.log(person);