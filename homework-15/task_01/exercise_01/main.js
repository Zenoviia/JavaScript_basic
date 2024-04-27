'use strict';


function showDelay(msg) {
    setTimeout(() => {
        console.log(`${msg}`);
    }, 2000)
}

showDelay('Привіт!')