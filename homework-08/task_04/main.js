'use strict';



function mostFrequentNumber(array) {
    let count = {};

    array.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    let mostFrequentNum = array[0];
    let maxFrequency = 0;

    for (let num in count) {
        let isEqualMaxAndMostFrequent = count[num] === maxFrequency && num > mostFrequentNum;
        let isBiggerThanMax = count[num] > maxFrequency;

        if (isBiggerThanMax || isEqualMaxAndMostFrequent) {
            mostFrequentNum = num;
            maxFrequency = count[num];
        }
    }

    return parseInt(mostFrequentNum);
}

console.log(mostFrequentNumber([12, 10, 8, 12, 7, 6, 4, 10, 12])); 
console.log(mostFrequentNumber([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(mostFrequentNumber([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));