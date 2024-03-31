'use strict';


let user = {
    _name: '',
    _age: 0,

    get name() {
        return this._name;
    },

    set name(newName) {
        newName.length > 2 ? this._name = newName : console.log('Input valid name');
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        newAge > 0 ? this._age = newAge : console.log('Input valid age');
    },
}


user.name = 'df';
user.age = -5;

console.log('User name:', user.name);
console.log('User age:', user.age);

user.name = 'Britt';
user.age = 75;

console.log('User name:', user.name);
console.log('User age:', user.age);