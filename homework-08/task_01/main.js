'use strict';


let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];


// 1

array.forEach((item) => {
    console.log(item);
})


// 2

let newArray = array.map(item => item * 2);
console.log('Array multiplied by 2:', newArray);


// 3

let sortArray = (a, b) => {
    return a < b ? -1 : 1;
}

array.sort(sortArray);

console.log('Sorted array:', array)


let sortReverse = (a, b) => {
    return a < b ? 1 : -1;
}

array.sort(sortReverse);

console.log('Reversed sorted array:', array)


// let sortReverse = () => {
//     let reversedArray = array.toReversed();
//     return reversedArray;
// }

// console.log('Reversed sorted array:', sortReverse())


// 4

let sumOfElements = array.reduce((sum, current) => {
    sum += current
    return sum;
}, 0);

console.log('Sum of array elements:', sumOfElements);