'use strict';


class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }

    ride() {
        console.log(`Їде зі швидкістю ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`Стоїть. Швидкість ${this.speed}`);
    }

}

class Skateboard extends Vehicle {
    constructor(type, speed) {
        super(speed);
        this.type = type;
    }

    ride() {
        super.ride();
        console.log('Виконує трюк ollie');
    } 

}

class Taxi extends Vehicle {
    constructor(type, speed) {
        super(speed);
        this.type = type;
    }
    stop() {
        super.stop();
        console.log('Пробите колесо!');
    }
    fixed() {
        console.log('Полагодили неполадки');
    }
}


const skateboard1 = new Skateboard('Лонгборд', 10);
const skateboard2 = new Skateboard('Скейт', 9);

const taxi1 = new Taxi('Маршрутне', 70);
const taxi2 = new Taxi('Вантажне', 65);

console.log('----skateboard 1----');
console.log('Type:', skateboard1.type);
console.log('Speed:', skateboard1.speed);
skateboard1.ride();
skateboard1.stop();

console.log('----skateboard 2----');
console.log('Type:', skateboard2.type);
console.log('Speed:', skateboard2.speed);
skateboard2.ride();
skateboard2.stop();

console.log('----taxi 1----');
console.log('Type:', taxi1.type);
console.log('Speed:', taxi1.speed);
taxi1.ride();
taxi1.stop();
taxi1.fixed();

console.log('----taxi 2----');
console.log('Type:', taxi2.type);
console.log('Speed:', taxi2.speed);
taxi2.ride();
taxi2.stop();
taxi2.fixed();