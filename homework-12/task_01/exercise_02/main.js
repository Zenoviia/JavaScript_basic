'use strict';


class Car {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }
    ride() {
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
    }
    gase() {
        this.speed = this.speed + 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }
    brake() {
        this.speed = this.speed - 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    }
}

const bmw = new Car("BMW", 50);
 
bmw.ride() //"BMW їде зі швидкістю 50 км/год"
bmw.gase() //"BMW їде зі швидкістю 60 км/год"
bmw.gase() //"BMW їде зі швидкістю 70 км/год"
bmw.brake() //"BMW їде зі швидкістю 60 км/год"
bmw.stop() //"BMW зупинилась. Швидкість 0 км/год"