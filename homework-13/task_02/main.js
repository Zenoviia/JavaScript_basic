'use strict';


let SymbolToPrimitive = {

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.model;
        }
        if (hint === 'number') {
            return this.price;
        }
        if (hint === 'default') {
            return this.price;
        }
    }
    
}

let car1 = {
    model: "Mersedes",
    price: 50000,
    __proto__: SymbolToPrimitive,
};

let car2 = {
    model: "Audi",
    price: 40000,
    __proto__: SymbolToPrimitive,
};

console.log(car1 + car2) // 90 000
alert(car1) // Mersedes
alert(car2) // Audi