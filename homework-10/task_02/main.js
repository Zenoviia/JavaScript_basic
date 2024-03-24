'use strict';


let calculator = {

    read: function(num1 = 0, num2 = 0) {
        this.num1 = num1;
        this.num2 = num2;
    },

    sum: function() {
        console.log(this.num1 + this.num2);
    },

    mul: function() {
        console.log(this.num1 * this.num2);
    }

}

calculator.read(2, 3);
console.log('Номер 1:', calculator.num1);
console.log('Номер 2:', calculator.num2);
console.log('-----сума-----');
calculator.sum();
console.log('-----множення-----');
calculator.mul();


// let calculator = {

//     num1: 0,
//     num2: 0,

//     read: function() {
//         this.num1 = +prompt('Введіть перше число');
//         this.num2 = +prompt('Введіть друге число');
//     },

//     sum: function() {
//         console.log(this.num1 + this.num2);
//     },

//     mul: function() {
//         console.log(this.num1 * this.num2);
//     }

// }

// calculator.read();
// console.log('Номер 1:', calculator.num1);
// console.log('Номер 2:', calculator.num2);
// console.log('-----сума-----');
// calculator.sum();
// console.log('-----множення-----');
// calculator.mul();