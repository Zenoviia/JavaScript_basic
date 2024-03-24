'use ctrict';


let shoppingCart = {

    items: new Map(),

    addItem: function(title, price) {
        this.items.set(title, price);
        console.log(this.items);
    },

    removeItem: function(title) {
        this.items.delete(title);
        console.log(this.items);
    },

    calculateTotalPrice: function() {
        let totalPrice = 0;
        for(let [title, price] of this.items) {
            totalPrice += price;
        }
        console.log(totalPrice);
    },

}

console.log('-----before deleting-----');
shoppingCart.addItem('Iphone', 1500);
shoppingCart.addItem("Книга", 30);
shoppingCart.addItem("Чашка", 5);
console.log('-----after deleting-----');
shoppingCart.removeItem("Чашка");
console.log('-----total price-----');
shoppingCart.calculateTotalPrice();