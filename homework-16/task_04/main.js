'use strict';


console.log('start');

function fibonacci(n) {
    
    if (n === 0 || n === 1) {
        return n;
    };

    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(27));

const fibPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(fibonacci(45));
    }, 5000);
});

fibPromise.then(result => {
    console.log('45-те число Фібоначчі:', result);
});

console.log('end');