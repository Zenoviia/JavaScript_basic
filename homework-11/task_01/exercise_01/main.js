'use strict';


let Guest = {

    name: 'John',
    isRegistered: false,

}

let User = {

    isRegistered: true,
    isAdmin: false,
    email: 'email@mail.com',
    __proto__: Guest,
    
}

let Admin = {

    isAdmin: true,

    addProduct: function (product) {

        console.log(`Я адмін, додаю новий продукт - ${product}`);

    },
    __proto__: User,

}

for (let keys in Admin) {
    console.log(keys)
}

Admin.addProduct('laptop');