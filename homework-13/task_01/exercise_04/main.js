'use strict';

function Animal(voice) {

    this.voice = voice;

    Object.defineProperty(Animal.prototype, 'say', {

        value: function() {
            return this.voice;
        },

        enumerable: false,
        
    })

}

const dog = new Animal("Гав");
console.log(dog.say());// Гав

for (let key in dog) {
    console.log(key); // voice (say - не перераховується)
    }