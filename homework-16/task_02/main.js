'use strict';


function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms);
    });
};

delay(3000).then(() => alert('виконалось через 3 секунди'));