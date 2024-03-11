'use strict';


const reverseString = (str) => {

    const stringLength = str.length;
    let reversedString = '';

    for (let i = stringLength - 1; i >= 0; i--) {

        reversedString += str[i];

    }

    return reversedString;
    
}

console.log(reverseString('Привіт'));
console.log(reverseString('Як справи?'));