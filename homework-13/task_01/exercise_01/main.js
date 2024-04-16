'use strict';


let Person = {
    firstName: 'Linda',
    lastName: 'Broke',
    sayHi: function() {
        console.log('hi!');
    },
    animals: ['kitten', 'dog', 'hamster'],
}

let setLength = (obj) => {

    let objectKeys = Object.keys(obj);
    let lenght = objectKeys.length;
    Person.lenght = lenght;
    return Person;

}

console.log(setLength(Person));
Person.sayHi();
console.log(Person.animals);