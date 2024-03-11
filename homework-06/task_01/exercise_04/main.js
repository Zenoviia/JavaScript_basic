'use strict';


const generateRandomFloat = (n) => {

    const randomNumber = Math.random() * 100;
    let randomNumberToString = "";
    
    if (Math.round(randomNumber) < 10) {

        randomNumberToString = "0" + String(randomNumber);

    } else {
        
        randomNumberToString = String(randomNumber);

    }

        const firstPartOfRandomNumber = randomNumberToString.slice(0, 3);
        const secondPartOfRandomNumber = randomNumberToString.slice(3, Infinity);
        const finalResult = firstPartOfRandomNumber + secondPartOfRandomNumber.slice(0, n);
    
        
        return finalResult;
   
}

console.log(generateRandomFloat(2));
console.log(generateRandomFloat(1));
console.log(generateRandomFloat(4));