'use strict';


function memoization(fn) {

    let keeper = {};

    return function(...args) {
        
        let key = JSON.stringify(args);

        if (keeper.hasOwnProperty(key)) {
            return keeper[key];
            
        } else {
            let result = fn(...args);
            keeper[key] = result;
            return result;
        }
    }
}

function expensiveOperation(n) {
    return n * 2;
}

const memoizedExpensiveOperation = memoization(expensiveOperation);
console.log(memoizedExpensiveOperation(5)); // 10
console.log(memoizedExpensiveOperation(5)); // 10 - повертає його з кеша