'use strict';


function fib(n) {

    if (n === 1 || n ===2) {
        return 1;
    }

    let firstEl = 1;
    let nextEl = 1;
    let currentEl = 0;

    let i = 3;

    while (i <= n) {
        currentEl = firstEl + nextEl;

        firstEl = nextEl;
        nextEl = currentEl;

        i++
    }
    return currentEl;
} 

console.log(fib(3));