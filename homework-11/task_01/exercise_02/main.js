'use strict';


let Vehicle = {

    ride: function() {
        console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`);
    }
}

let Car = {

    name: 'car',
    speed: 50,
    __proto__: Vehicle,
}

let Bicycle = {

    name: 'bicycle',
    speed: 10,
    __proto__: Vehicle,
}

Car.ride();
Bicycle.ride();