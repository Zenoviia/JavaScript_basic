'use strict';


const sumOfNumbers = (number) => {

    let sum = 0;
    const numberToString = String(number);
    const numberToStringLength = numberToString.length;

    for (let i = 0; i < numberToStringLength; i++) {

        const stringElement = numberToString[i]
        sum += parseInt(stringElement);
        
    }

    return sum;
    
}

console.log(sumOfNumbers(12));
console.log(sumOfNumbers(122));
console.log(sumOfNumbers(12256)); 