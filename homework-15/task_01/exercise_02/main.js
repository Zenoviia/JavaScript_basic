'use strict';


function repeat(msg) {
    setInterval(() => {
        console.log(`${msg}`);
    }, 2000)
}

repeat('JavaScript')