'use strict';


function boom(count) {
    let id = setTimeout(function numbersCount() {
            if (count > 0) {
                console.log(count);
            } else if (count === 0){
                console.log('Boom!')
            }
            count--;
        id = setTimeout(numbersCount, 1000)
    }, 1000)
}

boom(3);