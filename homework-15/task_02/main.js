'use strict';


function delay(fn, sec) {
    return function() {
        setTimeout(() => {
            fn();
        }, sec * 1000);
    } 
}

function sayHi() {
    console.log("Hi!");
}

delay(sayHi, 5);
const delayedSayHi = delay(sayHi, 5);

sayHi() // Hi! (Виконається одразу)
delayedSayHi() // Hi! (Виконається через 5 секунд);