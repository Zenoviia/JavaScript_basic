'use strict';


const isPalindrom = (str) => {

    const strToLowerCase = str.toLowerCase();
    const stringWithoutSpaces = strToLowerCase.replaceAll(' ', '');
    const stringLength = stringWithoutSpaces.length;
    let reversedString = '';

    for (let i = stringLength - 1; i >= 0; i--) {

        reversedString += stringWithoutSpaces[i];

    }

    return reversedString === stringWithoutSpaces ? true : false;

}

console.log(isPalindrom('радар'));
console.log(isPalindrom('око'));
console.log(isPalindrom('дід'));
console.log(isPalindrom('І розморозь зором зорі'));
console.log(isPalindrom('Привіт'));