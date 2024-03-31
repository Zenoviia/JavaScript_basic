'use strict';


let animal = {

    sleep: function() {
        console.log('Я сплю');
    }
}

let dog = {

    showVoice: function() {
        console.log('Гав!');
    },
    __proto__: animal,
}

let pug = {

    name: 'Casper',
    sayHi: function() {
        console.log(`Доброго вечора! Мене звати ${this.name}!`);
    },
    sleep: function() {
        console.log('Я сплю і храплю');
    },
    __proto__: dog,
}


pug.sleep();
pug.showVoice();
pug.sayHi();