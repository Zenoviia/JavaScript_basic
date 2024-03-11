'use strict';


const toCamelCase = (str) => {

    let camelCaseString = "";
    const stringLength = str.length;

    for (let i = 0; i < stringLength; i++) {

        const stringSymbol = str[i];

        if (stringSymbol === '_') {

            const stringSymbolToUpperCase = str[i + 1].toUpperCase();
            camelCaseString += stringSymbolToUpperCase;
            i++; 
        
        } else {

            camelCaseString += stringSymbol;

        }
    }

    return camelCaseString;

};

console.log(toCamelCase("current_user"));
console.log(toCamelCase("user_first_name"));
console.log(toCamelCase("car"));
