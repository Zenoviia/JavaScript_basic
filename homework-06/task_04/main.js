'use strict';


const generateNumberInLimit = (start, end) => {

    const randomNumber = Math.random();
    const randomNumberInRange = randomNumber * (end - start) + start;
    const randomNumberInRangeInteger = Math.round(randomNumberInRange);
    
    return randomNumberInRangeInteger;

}

console.log(generateNumberInLimit(1, 10));
console.log(generateNumberInLimit(24, 50));