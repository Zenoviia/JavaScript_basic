'use strict';


function repeat2(msg) {
    let id = setTimeout(function output() {
        console.log(`${msg}`);
        id = setTimeout(output, 2000);
    }, 2000);
}

repeat2('lesson 15');