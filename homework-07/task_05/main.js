'use strict';


let sumInput = () => {

    let numbersArray = [];
    let arrayElement;

    while (arrayElement !== null && arrayElement !== '') {
        arrayElement = prompt('Введіть елемент масиву');

        if (arrayElement !== null && arrayElement !== '' && !isNaN(arrayElement)) {
            numbersArray.push(+arrayElement);

        }
        
    } 
    
    console.log(numbersArray);
    
    let sum = 0;

    for (let number of numbersArray) {
        sum += number;
    }

    return sum;
    
}

console.log(sumInput());