'use strict';


// function callback_BasedFunction(arg1, arg2, callback) {
//     // Perform asynchronous operations
//     // Call the callback with the result or error
//     setTimeout(() => {
//         const result = arg1 + arg2;
//         if (result % 2 !== 0) {
//             callback(null, result);
//         } else {
//             callback(new Error('Result is not odd!'), null);
//         }
//     }, 1000);
// }

// callback_BasedFunction(2, 3, (error, result) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(result);
//     }
// });


function promiseBasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
                resolve(result);
            } else {
                reject(new Error('Result is not odd!'));
            }
        }, 1000);
    });
};

promiseBasedFunction(2, 3)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error)})