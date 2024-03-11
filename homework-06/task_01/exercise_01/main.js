'use strict';


const capitalize = (str) => {

    const firstLetter = str.charAt(0);
    const otherLetters = str.slice(1);

    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
    
}

console.log(capitalize('ПриВіТ'));
console.log(capitalize('яК СПРавИ?'));