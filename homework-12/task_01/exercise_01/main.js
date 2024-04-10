'use strict';


class Animal {
    constructor (word) {
        this.word = word;
    }
    say() {
        return this.word
    }
}

const dog = new Animal('Гав');
console.log(dog.say());

const cat = new Animal('Мяу');
console.log(cat.say());

const cow = new Animal('Му');
console.log(cow.say());