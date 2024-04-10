'use strict';


class Customer {
    constructor(name) {
        this.name = name;
        this.shoppingCart = [];
        this.sum = 0;
    }

    addProduct(product) {
        this.shoppingCart.push(product);
        this.sum += product.calculateDiscountPrice();
    }

    remobeProduct(product) {
        const index = this.shoppingCart.indexOf(product);
        if (index !== -1) {
            this.shoppingCart.splice(index, 1);
            this.sum -= product.calculateDiscountPrice();
        }
    }

    buy() {
        const productNames = this.shoppingCart.map(product => product.title).join(', ');
        console.log(`${this.name} купив товари "${productNames}" на суму ${this.sum} грн`);
        this.shoppingCart = [];
        this.sum = 0
    }

}

class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    
    calculateDiscountPrice() {
        return this.price;
    }

}

class DiscountProduct extends Product {
    constructor(title, price, percent) {
        super(title, price);
        this.discountPercent = percent;
    }

    calculateDiscountPrice() {
       const discount = this.price * (this.discountPercent / 100);
       return this.price - discount;
    }

}


const eggs = new Product("Яйця", 50);
const porridge = new Product("Гречка", 40);
const sausage = new DiscountProduct("Ковбаса", 120, 5); // 5% знижка
const dumplings = new DiscountProduct("Пельмені", 90, 10); // 10% знижка

const customer = new Customer('Tom Holland');

customer.addProduct(eggs);
customer.addProduct(porridge);
customer.addProduct(sausage);
customer.addProduct(dumplings);
customer.remobeProduct(porridge);
customer.buy(); // "Tom Holland купив товари: Яйця, Ковбаса, Пельмені на сумму 245 грн."