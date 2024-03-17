'use strict';


let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];

let unigue = (arr) => {

    let uniqueStrings = [];

    arr.forEach((item) => {
        if (!uniqueStrings.includes(item)) {
            uniqueStrings.push(item);
        }
    })

    return uniqueStrings;
    
}

console.log(unigue(strings));